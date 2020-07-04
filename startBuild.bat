node build\setupPortfolioImagesForCovers.js
echo y | rmdir /S "build/temp"
REM hugo
hugo server --disableFastRender