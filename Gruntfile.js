/*
 * My little Gruntfile.js – Task runnin' is magic.
 */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    application: {
      package: grunt.file.readJSON('package.json'),
      bower: grunt.file.readJSON('bower.json')
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      server: {}
    },
    jshint: {
      options: {
        node: true
      },
      files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js', '!app/bower_components/**/*.js']
    },
    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      'bower-install': {
        files: ['<%= wiredep.task.src %>', 'bower.json'],
        tasks: ['wiredep']
      }
    },
    wiredep: {
      task: {
        src: ['app/**/*.html', '!app/bower_components/**/*.html'],
        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['test']);
  grunt.registerTask('serve', ['connect:server:keepalive']);
};
