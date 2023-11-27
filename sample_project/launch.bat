@echo off
setlocal
pushd "%~dp0"
source ./../test_env/bin/activate
python3 ./back/debug.py
popd
endlocal
pause
