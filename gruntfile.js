module.exports = function (grunt) {

    require('time-grunt')(grunt);

    // **********************************************
    //
    // perform global initialisation
    //
    // *********************************************

    grunt.initConfig({
        //read in settings - we can access them below by name using <%= pkg.name %> 
        pkg: grunt.file.readJSON('package.json'),

    });

    // **********************************************
    //
    // Load tasks - See individual files for details
    //
    // **********************************************

    grunt.loadTasks('grunt');

    // **********************************************
    //
    // register tasks here as more discoverable
    //
    // **********************************************

    grunt.registerTask('build-less', ['less:compileCore', 'less:compileTheme']);
    
    grunt.registerTask('run', ['express', 'open']);

    grunt.registerTask('serveDev', ['express:dev', 'open', 'watch']);
    grunt.registerTask('serveProd', ['express:prod', 'open', 'watch']);

    //TODO why does css not work when minified using cssmin
    
    //perform a build WITH image optimization and deploy 
    grunt.registerTask('test', [
        'jasmine'
    ]);    

    grunt.registerTask('build', [
       // 'clean:dist',
        'clean:build',
        'less:compileCore',
        'less:compileTheme',
        'copy:build',
        'csslint:lax',
        'concat:maps',        
        'concat:vendor',
        'concat:angular',
        'concat:auth',
        'concat:app',
        'concat:css',
        'concat:bootstrapui',
        'cssmin',
        'uglify:vendor',
        'uglify:maps',        
        'uglify:angular',
        'uglify:auth',
        'uglify:bootstrapui',        
        'uglify:app'
    ]);

    //Adds optimising images to the buld above
    grunt.registerTask('buildi', [
        'build',
        'imagemin'
    ]);

    //deploys built files to the dist folder ready to be served
    grunt.registerTask('deploy', [
        'copy:dist',
        'string-replace',
        'injector',
        //'clean:build'
    ]);

    //perform a build, deploy and serve without image optimization
    grunt.registerTask('dev', [
        'build',
        'deploy',
        'serveDev'
    ]);

    //perform a build, deploy and serve WITH image optimization
    grunt.registerTask('prod', [
        'buildi',
        'deploy',
        'serveProd'
    ]);

    //perform a build WITH image optimization and deploy 
    grunt.registerTask('package', [
        'buildi',
        'deploy'
    ]);
};