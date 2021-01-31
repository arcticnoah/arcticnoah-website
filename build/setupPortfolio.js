const fs = require('fs');
const yaml = require('yaml');
const cmd = require('node-cmd');
const crypto = require('crypto');
const chalk = require('chalk');

const path = process.argv[1];
const splitPath = path.split('\\');
const startPath =
    splitPath.slice(0, splitPath.length - 2).join('/') + '/content/portfolio';
const buildPath = splitPath.slice(0, splitPath.length - 1).join('/');

let coverImages = {};
let categoriesList = [];
let currentBuildInfo = {};

function* files(dir, ext) {
    for (let f of fs.readdirSync(dir)) {
        const curr = dir + '/' + f;
        if (f.endsWith(ext)) {
            yield curr;
        } else if (fs.statSync(curr).isDirectory()) {
            yield* files(curr, ext);
        }
    }
}

function getFrontMatter(src) {
    return yaml.parse(src.split('---')[1]);
}

function createBuildInfo(fullFilePath, fileMetaData) {
    let fileInfo = {};

    let coverImage = fs.readFileSync(
        fullFilePath.slice(0, fullFilePath.length - 8) + fileMetaData.cover
    );
    let coverHash = crypto.createHash('sha256');
    coverHash.update(coverImage);

    fileInfo['image-hash'] = coverHash.digest('hex');
    fileInfo['categories'] = fileMetaData.categories;

    return fileInfo;
}

// Create dictionaries with categories and the files for it
for (let fullFilePath of files(startPath, '.md')) {
    let fileMetaData = getFrontMatter(fs.readFileSync(fullFilePath).toString());

    if (!fileMetaData.draft && fileMetaData.useRelativeCover) {
        // Create build info, so that the next run only renders what it needs to
        let fileName = fullFilePath.slice(startPath.length + 1);

        currentBuildInfo[fileName] = createBuildInfo(
            fullFilePath,
            fileMetaData
        );

        for (let x of fileMetaData.categories) {
            if (coverImages[x] == null) {
                coverImages[x] = [
                    fullFilePath.slice(0, fullFilePath.length - 8) +
                        fileMetaData.cover
                ];
                categoriesList.push(x);
            } else {
                coverImages[x].push(
                    fullFilePath.slice(0, fullFilePath.length - 8) +
                        fileMetaData.cover
                );
            }
        }
    }
}

// Clean up temp folder before running
if (fs.existsSync(`${buildPath}/temp`)) {
    fs.rmdirSync(`${buildPath}/temp`, { recursive: true });
}

fs.mkdirSync(`${buildPath}/temp`);

// Determine what needs to be rendered
let lastBuildInfo;
try {
    lastBuildInfo = JSON.parse(fs.readFileSync(`${buildPath}/lastBuild.json`));
} catch {
    lastBuildInfo = undefined;
}

let coverImagesClone = JSON.parse(JSON.stringify(coverImages));
let categoriesToRender = [];

if (lastBuildInfo != undefined) {
    console.log(chalk.yellow('\nChecking files for changes:'));

    for (let file in lastBuildInfo) {
        let filePass = false;
        let imagePass = false;
        let categoriesPass = false;

        if (currentBuildInfo.hasOwnProperty(file)) {
            // File existed before
            filePass = true;

            // Check image hash
            if (
                currentBuildInfo[file]['image-hash'] ==
                lastBuildInfo[file]['image-hash']
            )
                imagePass = true;

            // Check if any categories have changed (symmetric difference)
            let changedCategories = currentBuildInfo[file]['categories']
                .filter((x) => !lastBuildInfo[file]['categories'].includes(x))
                .concat(
                    lastBuildInfo[file]['categories'].filter(
                        (x) => !currentBuildInfo[file]['categories'].includes(x)
                    )
                );

            if (changedCategories.length == 0) categoriesPass = true;
            else {
                for (category of changedCategories) {
                    let index = categoriesToRender.findIndex(
                        (element) => element == category
                    );
                    if (index != -1) continue;
                    else categoriesToRender.push(category);
                }
            }
        }

        if (!filePass || !imagePass) {
            for (category of currentBuildInfo[file]['categories']) {
                let index = categoriesToRender.findIndex(
                    (element) => element == category
                );
                if (index != -1) continue;
                else categoriesToRender.push(category);
            }
        }

        let extraMsg = '';

        if (filePass && imagePass && categoriesPass)
            extraMsg = chalk.green('No changes!');
        else {
            if (filePass) {
                filePass = chalk.green('✓');
            } else {
                filePass = chalk.red('x');
            }

            if (imagePass) {
                imagePass = chalk.green('✓');
            } else {
                imagePass = chalk.red('x');
            }

            if (categoriesPass) {
                categoriesPass = chalk.green('✓');
            } else {
                categoriesPass = chalk.red('x');
            }

            extraMsg =
                chalk.yellow('Changes detected:\n') +
                `File existed before? ${filePass}\nImage changed? ${imagePass}\nCategories changed? ${categoriesPass}`;
        }

        console.log(
            'Portfolio Page: ' +
                chalk.blue(`${file.slice(0, file.length - 9)}`) +
                `\n${extraMsg}\n`
        );
    }
} else {
    // Last build file missing/not created yet, render everything
    categoriesToRender = categoriesList;
}

// Delete previous GIFs/pages to start from a clean state
let portfolioPath =
    splitPath.slice(0, splitPath.length - 2).join('/') + '/content/portfolio';
let portfolioFiles = fs.readdirSync(portfolioPath);

portfolioFiles.forEach(function (file) {
    // Check for 'category' pages
    categoriesList.forEach(function (category) {
        if (file == category) {
            fs.rmdirSync(`${portfolioPath}/${category}`, { recursive: true });
        }
    });

    // Check for '.gif's
    if (file.endsWith('.gif')) {
        fs.unlinkSync(`${portfolioPath}/${file}`);
    }
});

// Create category pages
categoriesList.forEach(function (category) {
    fs.mkdirSync(`${portfolioPath}/${category}`);
    fs.writeFileSync(
        `${portfolioPath}/${category}/index.md`,
        `---\ntitle: "${category}"\nlayout: "list"\n---`
    );
});

for (category of categoriesToRender) {
    if (!(category in coverImagesClone)) {
        // No pages use this category anymore, remove it from the list
        fs.rmdirSync(`${portfolioPath}/${category}`, { recursive: true });

        let index = categoriesToRender.findIndex(
            (element) => element == category
        );
        delete categoriesToRender[index];
    }
}

// Copy images to temp folder for rendering
for (i of categoriesToRender) {
    if (i == undefined) continue;
    let x = 0;
    let tmpPath = `${buildPath}/temp/${i}`;

    if (!fs.existsSync(tmpPath)) {
        fs.mkdirSync(tmpPath);
    }

    for (j of coverImages[i]) {
        fs.copyFileSync(j, `${buildPath}/temp/${i}/${x + 1}.jpg`);
        x += 1;
    }
}

console.log(
    chalk.yellow('Categories list:\n') + `${categoriesList.join(', ')}`
);

let categoriesToRenderEmpty = true;

for (category of categoriesToRender) {
    if (category != undefined) categoriesToRenderEmpty = false;
}

if (!categoriesToRenderEmpty) {
    console.log(
        chalk.yellow('\nCategories to render:\n') +
            `${categoriesToRender.join(' ')}\n`
    );
} else {
    console.log(chalk.yellow('\nNo categories to render\n'));
}

// Images to GIF rendering
for (let i of categoriesToRender) {
    if (i == undefined) continue;
    cmd.run(
        `gm convert -delay 150 -loop 0 -size 750x375 "build/temp/${i}/*.jpg" "content/portfolio/${i}/cover.gif"`
    );
    console.log(`Finished rendering '${categoriesList[i]}' GIF`);
}

fs.writeFileSync(
    `${buildPath}/lastBuild.json`,
    JSON.stringify(currentBuildInfo)
);
