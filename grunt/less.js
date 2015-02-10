module.exports = function (grunt) {

    grunt.config('less', {


        compileCore: {
            options: {
                strictMath: true,
                sourceMap: true,
                outputSourceFiles: true,
                sourceMapURL: 'site/assets/css/bootstrap/bootstrap.css.map',
                sourceMapFilename: 'site/assets/css/bootstrap/bootstrap.css.map'
            },
            files: {
                'site/assets/css/bootstrap/bootstrap.css': 'site/assets/less/bootstrap/bootstrap.less'
            }
        },
        compileTheme: {
            options: {
                strictMath: true,
                sourceMap: true,
                outputSourceFiles: true,
                sourceMapURL: 'site/assets/css/bootstrap/bootstrap-theme.css.map',
                sourceMapFilename: 'site/assets/css/bootstrap/bootstrap-theme.css.map'
            },
            files: {
                'site/assets/css/bootstrap/bootstrap-theme.css': 'site/assets/less/bootstrap/theme.less'
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-less');
};