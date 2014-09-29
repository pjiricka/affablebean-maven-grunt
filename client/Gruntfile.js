'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help optimize build times.
    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        webroot: 'public_html',
        dist: 'dist',
        bower_src: 'bower_components',
        bower_dist: 'public_html/libs/vendor'
    };

    grunt.initConfig({

        // Project settings
        config: config,

        clean: {
          build: {
            files: [{
              dot: true,
              src: [
                '.tmp',
                '<%= config.dist %>/*',
                '!<%= config.dist %>/.git*',
                '<%= config.bower_dist %>/*'
              ]
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
              dest: '<%= config.dist %>/js/built.js'
            }
        },

        uglify : {
          options: {
            mangle: false
          }
        },
        
        cssmin: {
          combine: {
            files: {
              '<%= config.dist %>/css/output.css': ['<%= config.webroot %>/css/app.css',
                                                    '<%= config.webroot %>/css/bootstrap.css',
                                                    '<%= config.webroot %>/css/bootstrap-responsive.css']
            }
          }
        },
    
        copy: {
          main: {
            files: [{
              expand: true,
              dot: true,
              cwd: '<%= config.webroot %>',
              dest: '<%= config.dist %>',
              src: [
                '{,*/}*.{ico,png,gif,txt,json}',
                '{,*/}*.html',
                'libs/**'
              ]
            }]
          }
        },
        
        rev : {
          files: {
            src: [
              '<%= config.dist %>/js/{,*/}*.js',
              '<%= config.dist %>/css/{,*/}*.css'
            ]
          }
        },
        
        bowercopy : {
            options: {
                srcPrefix: '<%= config.bower_src %>',
                destPrefix: '<%= config.bower_dist %>'
            },
            scripts: {
                files: {
                    "jquery": "jquery/dist/jquery.js",
                    "bootstrap" : "bootstrap/dist/*",
                    "angular" : "angular/angular.js",
                    "angular-resource" : "angular-resource/angular-resource.js"
                }
            }
        },
        
        karma: {
          unit: {
            configFile: 'karma.conf.js',
            singleRun: true
          }
        }
        
    });
    
    grunt.registerTask('build', [
      'clean',
      'bowercopy'
    ]);

    grunt.registerTask('release', [
      'build',
      'useminPrepare',
      'concat',
      'uglify',
      'cssmin',
      'copy',
      'rev',
      'usemin'
    ]);

    grunt.registerTask('default', ['build']);

};
