@echo off
For /f "tokens=1-3 delims=/ " %%a in ('date /t') do (set todaysFullDate=%%c-%%b-%%a)
For /f "tokens=1-3 delims=/ " %%a in ('date /t') do (set todaysPartialDate=%%c-%%b)

if "%1"=="dailylog"  (
    hugo new --kind dailylog-bundle "dailylog/%todaysFullDate%
    )

if "%1"=="post"  (
    hugo new --kind post-bundle "posts/%todaysFullDate%-%~2"
    )

if "%1"=="portfolio"  (
    hugo new --kind portfolio-bundle "portfolio/%todaysPartialDate%-%~2"
    )