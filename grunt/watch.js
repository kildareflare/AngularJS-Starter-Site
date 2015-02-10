module.exports = function (grunt) {
    grunt.config('watch', {
        js: {
            files: ['js/*.js'],
        },
        css: {
            files: ['css/*.css']
        },
        livereload: {
            //to improve performance we only reload these files.
            
            files: ['css/*.css', 'js/app/*.js'],
            options: {
                livereload: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};
