module.exports = function (grunt) {

    grunt.config('cssmin', {

        my_target: {
            files: [{
                expand: true,
                cwd: 'build/concat',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/site/assets/css',
                ext: '.min.css'
        }]
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};