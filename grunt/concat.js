module.exports = function (grunt) {
    
    grunt.config('concat', {

        angular: {
            src: ['site/js/vendor/angular/*.js'],
            dest: 'build/js/angular.js',
        },
        
        app: {
            src: ['site/js/app/*.js', 
                  'site/js/app/moduleOne/*.js'],
            dest: 'build/js/app.js',
    
        },
                 
        css: {
            files: {
                'build/concat/site.css': ['build/css/site.css'],
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};