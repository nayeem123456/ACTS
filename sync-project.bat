@echo off
setlocal EnableExtensions EnableDelayedExpansion

cd /d "%~dp0"
title ACTS - GitHub Sync

echo.
echo ========================================
echo        ACTS GitHub Project Sync
echo ========================================
echo.

where git >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or is not available in PATH.
    goto :failed
)

git rev-parse --show-toplevel >nul 2>&1
if errorlevel 1 (
    echo ERROR: This file must be inside the Git project folder.
    goto :failed
)

for /f "delims=" %%R in ('git remote get-url origin 2^>nul') do set "REMOTE=%%R"
if not defined REMOTE (
    echo ERROR: The origin GitHub remote is not configured.
    goto :failed
)

echo Checking GitHub for updates...
git fetch origin main
if errorlevel 1 (
    echo ERROR: Could not contact GitHub. Check your internet connection and GitHub login.
    goto :failed
)

for /f "tokens=1,2" %%A in ('git rev-list --left-right --count main...origin/main') do (
    set "LOCAL_COMMITS=%%A"
    set "REMOTE_COMMITS=%%B"
)

set "LOCAL_FILES_CHANGED="
for /f "delims=" %%A in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "$changes = @(git status --porcelain); $changes = $changes | Where-Object { $_ -notmatch '^\?\? (node_modules|dist)(\\|/)' }; if ($changes.Count -gt 0) { 'yes' }"') do set "LOCAL_FILES_CHANGED=%%A"

if not defined LOCAL_COMMITS set "LOCAL_COMMITS=0"
if not defined REMOTE_COMMITS set "REMOTE_COMMITS=0"

if "%REMOTE_COMMITS%" GTR "0" (
    if "%LOCAL_COMMITS%" GTR "0" goto :conflict
    if defined LOCAL_FILES_CHANGED goto :conflict

    echo GitHub has newer changes. Updating local files...
    git merge --ff-only origin/main
    if errorlevel 1 goto :failed
    echo.
    echo Local files are now up to date with GitHub.
    goto :success
)

if defined LOCAL_FILES_CHANGED (
    echo Local changes found. Saving and pushing them to GitHub...
    git add -A -- . ":(exclude)node_modules" ":(exclude)dist"
    if errorlevel 1 goto :failed

    git diff --cached --quiet
    if errorlevel 1 (
        git commit -m "Sync local changes"
        if errorlevel 1 goto :failed
    )

    git push origin main
    if errorlevel 1 goto :failed
    echo.
    echo Local changes were pushed to GitHub.
    goto :success
)

if "%LOCAL_COMMITS%" GTR "0" (
    echo Local commits found. Pushing them to GitHub...
    git push origin main
    if errorlevel 1 goto :failed
    echo.
    echo Local commits were pushed to GitHub.
    goto :success
)

echo Local files and GitHub are already synchronized.
goto :success

:conflict
echo.
echo WARNING: Both this computer and GitHub have changes.
echo No files were changed and nothing was pushed.
echo Resolve the differences manually, then run this file again.
goto :failed

:success
echo.
echo Sync completed.
pause
exit /b 0

:failed
echo.
echo Sync was not completed.
pause
exit /b 1
