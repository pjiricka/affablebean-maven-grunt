'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help optimize build times.
    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        webroot: 'public_html',
        dist: 'dist'
    };

    grunt.initConfig({

        // Project settings
        config: config,

        clean: {
          build: {
            files: [{
              dot: true,
              src: [
                '<%= config.dist %>/*',
                '!<%= config.dist %>/.git*'
              ]
            }]
          }
        },
     
        htmlmin: {
          build: {
            options: {
              collapseBooleanAttributes: true,
              removeAttributeQuotes: true,
              removeRedundantAttributes: true,
              removeEmptyAttributes: true
            },
            files: [{
              expand: true,
              cwd: '<%= config.webroot %>',
              src: '{,*/}*.html',
              dest: '<%= config.dist %>'
            }]
          }
        },
  
        useminPrepare: {
          options: {
            dest: '<%= config.dist %>'
          },
          html: '<%= config.webroot %>/index.html'
        },

        usemin : {
          options: {
            dirs: ['<%= config.dist %>']
          },
          html: ['<%= config.dist %>/{,*/}*.html']
        },
    
        concat : {
            options: {
              separator: ';'
            },
            dist: {
              src: ['<%= config.webroot %>/js/{,*/}*.js'],
              dest: '<%= config.dist %>/built.js'
            }
        },

        uglify : {
          options: {
            mangle: false
          }
        },
    
        rev : {
          files: {
            src: [
              '<%= config.dist %>/js/{,*/}*.js',
            ]
          }
        }
    });
    
    var tasks = [
      'clean',
      'useminPrepare',
      'htmlmin',
      'concat',
      'uglify',
      'rev',
      'usemin'
    ];

    grunt.registerTask('build', tasks);

    grunt.registerTask('default', ['build']);

};
