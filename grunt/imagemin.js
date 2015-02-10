module.exports = function (grunt) {

    grunt.config('imagemin', {

        jpgs: {
            options: {
                progressive: true
            },
            files: [{
                expand: true,
                cwd: 'site/assets/img',
                src: ['*.{png,jpg,gif}'], //case sensitive!
                dest: 'build/img'
            }]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};