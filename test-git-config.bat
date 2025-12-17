@echo off
echo Checking Git Configuration...
echo ------------------------
git config --global user.name
git config --global user.email
echo ------------------------
echo Git Version:
git --version
echo ------------------------
echo Press any key to exit...
pause >nul