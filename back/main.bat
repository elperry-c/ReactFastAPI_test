@echo off
setlocal
pushd "%~dp0"
.\python-3.11.5-embed-amd64\python.exe debug.py
popd
endlocal
pause
