node build\setupPortfolio.js

@echo off
echo y | rmdir /S "build/temp"
REM hugo

@echo on
hugo server --disableFastRender