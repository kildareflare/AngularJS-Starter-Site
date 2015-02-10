module.exports = function (grunt) {

    grunt.config('injector', {

        options: {
            ignorePath: 'dist/site/',
            addRootSlash: false
        },
        local_dependencies: {
            files: {
                'dist/site/index.html': ['dist/site/js/*.min.js', 'dist/site/assets/css/*.min.css']
            }
        }

    });

    grunt.loadNpmTasks('grunt-injector');
};