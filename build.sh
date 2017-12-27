#!/bin/sh
# This script automatically builds and aggregates Pogo's frontend files
if [ ! -d "dist" ]; then
	mkdir dist
fi
rm -rf dist/*
echo Building admin
cd admin
npm run build
echo Copying admin files
cp dist ../dist
cd ..
cd main
echo Building main
npm run build
echo Copying main files
cp dist ../dist
cd ..
echo Done