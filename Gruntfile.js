
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : [
        'lib/underscore.js',
        'lib/json2.js',
        'lib/backbone.js',
        'examples/**/src/*.js'
      ],
      options : {
        specs : 'examples/**/spec/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', 'jasmine');

  grunt.registerTask('default', ['test']);

};