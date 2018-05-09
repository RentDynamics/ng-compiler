#!/bin/bash

# declaration(s)
GULP="node node_modules/.bin/gulp"
KARMA="node node_modules/.bin/karma"
NGC="node node_modules/.bin/ngc"
TSC="node node_modules/.bin/tsc"

# clean up previous distributions
rm -rf ./build ./coverage ./dist

# run gulp inline-templates
$GULP inline-templates --gulpfile ./.gulpfile.js

# run typescript compiler
$TSC -p ./tsconfig-spec.json

# copy assets to ./dist directory for testing purposes
mkdir ./dist/assets/
cp ./src/assets/auto-email-template.html ./dist/assets/auto-email-template.html
cp ./src/assets/complex-style-tag.html ./dist/assets/complex-style-tag.html

# start karma
$KARMA start ./.karma.conf.js $1 $2 $3 $4 $5 $6 $7 $8 $9
