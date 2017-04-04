const babel = {
  options: {
    plugins: ['../../path-reporter-plugin.js']
  },

  dist: {
    files: {
      'main.js': 'module.js'
    }
  }
};

module.exports = (grunt) => {
  // Loading an npm package from a parent's node_modules folder:
  // https://github.com/gruntjs/grunt/issues/696#issuecomment-63192649
  grunt.file
    .expand('../../node_modules/grunt-*/tasks')
    .forEach(grunt.loadTasks);

  // 🙈
  console.log = grunt.log.write;

  grunt.initConfig({
    babel
  });

  grunt.registerTask('default', ['babel']);
};
