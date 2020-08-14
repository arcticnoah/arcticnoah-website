const fs = require("fs");
const yaml = require("yaml");
const cmd = require("node-cmd");

function* files(dir, ext) {
    for (let f of fs.readdirSync(dir)) {
        const curr = dir + "/" + f;
        if (f.endsWith(ext)) {
            yield curr;
        } else if (fs.statSync(curr).isDirectory()) {
            yield* files(curr, ext);
        }
    }
}

function getFrontMatter(src) {
    return yaml.parse(src.split("---")[1]);
}

let path = process.argv[1];
let splitPath = path.split("\\");
let startPath = splitPath.slice(0, splitPath.length - 2).join("/") + "/content/portfolio";
let coverImages = {};
let categoriesList = [];

// Create dictionary with categories and the files for it
for (let fname of files(startPath, ".md")) {
    let meta = getFrontMatter(fs.readFileSync(fname).toString());
    if (!meta.draft && meta.useRelativeCover) {
        for (let x of meta.categories) {
            if (coverImages[x] == null) {
                coverImages[x] = [fname.slice(0, fname.length - 8) + meta.cover]
                categoriesList.push(x);
            } else {
                coverImages[x].push(fname.slice(0, fname.length - 8) + meta.cover);
            }
        }
    }
}


// console.log(coverImages);

let buildPath = splitPath.slice(0, splitPath.length - 1).join("/");


// Clean up before running

if (fs.existsSync(`${buildPath}/temp`)) {
    fs.rmdirSync(`${buildPath}/temp`, { recursive: true });
}

fs.mkdirSync(`${buildPath}/temp`);

// Delete stuff to start from a clean state
let portfolioPath = splitPath.slice(0, splitPath.length - 2).join("/") + "/content/portfolio";
let portfolioFiles = fs.readdirSync(portfolioPath);
portfolioFiles.forEach(function(file) {
    // Check for 'category' pages
    categoriesList.forEach(function(category) {
        if (file == category) {
            console.log(`${portfolioPath}/${category}`);
            fs.rmdirSync(`${portfolioPath}/${category}`, { recursive: true });
        }
    });
    // Check for '.gif's
    if (file.endsWith(".gif")) {
        // console.log(file);
        fs.unlinkSync(`${portfolioPath}/${file}`);
    }
});

// Create fake 'category' pages
categoriesList.forEach(function(category) {
    fs.mkdirSync(`${portfolioPath}/${category}`);
    fs.writeFileSync(`${portfolioPath}/${category}/index.md`, `---\ntitle: "${category}"\nlayout: "list"\n---`);
});


// Copy images to temp folder for rendering
for (let i of categoriesList) {
    let x = 0;
    let tmpPath = `${buildPath}/temp/${i}`;
    if (!fs.existsSync(tmpPath)) {
        fs.mkdirSync(tmpPath);
    }
    for (let j of coverImages[i]) {
        fs.copyFileSync(j, `${buildPath}/temp/${i}/${x + 1}.jpg`);
        x += 1;
    }
}

// Images to GIF rendering
for (let i of categoriesList) {
    // TODO: Store inside 'category' page folder (update in template too)
    cmd.run(`gm convert -delay 150 -loop 0 -size 750x375 "build/temp/${i}/*.jpg" "content/portfolio/${i}/cover.gif"`);
}