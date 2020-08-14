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

// TODO: Remove old gifs in 'content/portfolio' only
let portfolioPath = splitPath.slice(0, splitPath.length - 2).join("/") + "/content/portfolio";
let portfolioFiles = fs.readdirSync(portfolioPath);
portfolioFiles.forEach(function(file) {
    console.log(file);
    if (file.endsWith(".gif")) {
        fs.unlinkSync(portfolioPath + "/" + file);
    }
});

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

// Images to GIF Process
for (let i of categoriesList) {
    // console.log(`gm convert -delay 50 -loop 50 "build/temp/${i}/*.jpg" "content/portfolio/${i}.gif"`);
    cmd.run(`gm convert -delay 150 -loop 0 -size 750x375 "build/temp/${i}/*.jpg" "content/portfolio/${i}.gif"`);
}

// Remove temp stuff
// fs.rmdirSync(`${buildPath}/temp`, { recursive: true });