@echo off
REM This script will build then aggregating the dist files for the two directories into one for release - WINDOWS
IF EXIST dist (
	echo Final dist folder found, clearing
	del dist\* /q /s
) ELSE (
	echo Creating dist folder
	mkdir dist
)
echo Building admin
cd admin
call npm run build
echo Copying admin files
xcopy dist ..\dist /s /e /y
cd ..
cd main
echo Building main
call npm run build
echo Copying main files
xcopy dist ..\dist /s /e /y
cd ..
echo Done