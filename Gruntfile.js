module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerpkg: grunt.file.readJSON('bower.json'),
    connect: {
      server: {}
    },
    jshint: {
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
