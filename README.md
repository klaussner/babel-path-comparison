# Babel path comparison

Some Babel plugins need to know the path of the file they are processing.
Depending on the build tool that runs Babel, file paths can be absolute or relative to the current working directory.
This repository contains example configurations for browserify, Grunt, gulp, Meteor, Rollup, and webpack that output the paths of the processed modules.

## Results

browserify, gulp, Rollup, webpack: `/<project path>/module.js`  
Grunt: `module.js`  
Meteor: `/module.js`
