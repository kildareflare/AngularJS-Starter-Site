module.exports = function (grunt) {

    grunt.config('uglify', {

        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            mangle: false
        },
        angular: {

            files: {
                'dist/site/js/angular.min.js': ['build/js/angular.js']
            }
        },
        vendor: {

            files: {
                'dist/site/js/vendor.min.js': ['build/js/vendor.js']
            }
        },
        app: {
            /* until work out how else, rename with z so last in inject list */
            files: {
                'dist/site/js/zapp.min.js': ['build/js/app.js']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};