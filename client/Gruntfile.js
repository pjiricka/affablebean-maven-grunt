module.exports = function(grunt) {

    // load all NPM modules from the parent project
    grunt.file.expand(['node_modules/grunt-*/tasks'])
            .concat(grunt.file.expand(['build/grunt/custom_modules']))
            .forEach(grunt.loadTasks);

    require('time-grunt')(grunt);

    // Initialize configurations.
    grunt.initConfig({
      'pkg': require('./package.json'),
      'cfg': require('./config/public.json')
    }); 
    
    // Load all per-task configs from the folder.
    grunt.loadTasks('build/grunt');
 
};
