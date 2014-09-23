'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {};

    config['clean'] = {
      build: {
        files: [{
          dot: true,
          src: [
            'dist/*',
            '!dist/.git*'
          ]
        }]
      }
    };
     
  
    config['htmlmin'] = {
      build: {
        options: {
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true
        },
        files: [{
          expand: true,
          cwd: 'public_html',
          src: '{,*/}*.html',
          dest: 'dist'
        }]
      }
    };
  
  
    config['useminPrepare'] = {
      options: {
        dest: 'dist'
      },
      html: 'public_html/index.html'
    };

    config['usemin'] = {
      options: {
        dirs: ['dist']
      },
      html: ['dist/{,*/}*.html']
    };
    
    config['concat'] = {
        options: {
          separator: ';',
        },
        dist: {
          src: ['public_html/js/{,*/}*.js'],
          dest: 'dist/built.js',
        },
      };

    config['uglify'] = {
      options: {
        mangle: false
      }
    };    
    
    config['rev'] = {
      files: {
        src: [
          'dist/js/{,*/}*.js',
        ]
      }
    };
    
    grunt.initConfig(config);

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
};
