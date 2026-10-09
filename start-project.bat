@echo off
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
    echo Node.js/npm was not found on PATH.
    echo Please install Node.js and try again.
    pause
    exit /b 1
)

start "ACTS Website" cmd /k "cd /d "%~dp0" && npm install && npm run dev -- --host 127.0.0.1"
