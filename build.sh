#!/bin/sh -ex

# Prepare the library folder(s)
rm -rf ./build && mkdir -p build
rm -rf ./lib-ts && mkdir -p lib-ts
rm -rf ./lib && mkdir -p lib

# Copy files from ./src into ./lib-ts
cp -a src/. lib-ts/

# Compile the generator into ./build
tsc -p tsconfig-generator.json ; echo Generator compiled to JavaScript with tsc

# Run the generator to produce js in ./lib-ts
node --experimental-json-modules ./build/generate.js ; echo TypeScript generated

# compile typescript into js using babel
babel lib-ts --out-dir lib --extensions ".ts" --config-file './.babelrc'

# compile the typings to .d.ts files using tsc
tsc -p tsconfig-lib.json ; echo TypeScript typings transpiled to .d.ts files with tsc

#remove empty js files
#count=0
#find ./lib -type f |
#(echo 'Cleaned' &&
#while
#  read file;
#execute
#  value=$(cat "$file")
#  # if there are only typings in a file, tsc will leave a blank file as such
#  if [ "$value" = "export {};" ]
#  then
#    rm "$file"
#    count=$((count+1))
#    echo $count
#  fi
#done | tail -n 1 &&
#echo 'empty files') | tr '\n' " " | sed 's/ $/\n/'

# move the info files into the lib
mv ./lib-ts/bungie-api-LICENSE ./lib/bungie-api-LICENSE
mv ./lib-ts/package.json ./lib/package.json
mv ./lib-ts/README.md ./lib/README.md





