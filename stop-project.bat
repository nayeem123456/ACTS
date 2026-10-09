@echo off
for /f "tokens=5" %%p in ('netstat -ano ^| findstr /R /C:":5173 " /C:":5174 " 2^>nul') do (
    if not "%%p"=="" taskkill /PID %%p /F >nul 2>&1
)

echo Project stopped (if it was running).
