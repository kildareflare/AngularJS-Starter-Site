module.exports = function (grunt) {

    grunt.config('clean', {

        build: {
            src: ["build"]
        },
        
        dist: {
            src: [ "dist"]
        }        

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};