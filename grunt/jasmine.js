module.exports = function (grunt) {

    grunt.config('jasmine', {

    pivotal: {
          src: 'site/js/app/**/*.js',
          options: {
            specs: 'tests/*Spec.js',
            helpers: 'tests/*Helper.js',
            vendor: [   
                //order is important
                "site/js/vendor/angular/*.js", 
                "https://maps.googleapis.com/maps/api/js?libraries=places",
                "site/js/vendor/**/*.js"
            ]              
          }
        }        

    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};