module.exports = function (grunt) {

    grunt.config('open', {

        all: {
            path: 'http://localhost:9000/index.html'
        }

    });

    grunt.loadNpmTasks('grunt-open');

};