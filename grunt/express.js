module.exports = function (grunt) {

    //http://stackoverflow.com/questions/16569841/angularjs-html5-mode-reloading-the-page-gives-wrong-get-request
    //http://stackoverflow.com/questions/17080494/using-grunt-server-how-can-i-redirect-all-requests-to-root-url
    //http://ericduran.io/2013/05/31/angular-html5Mode-with-yeoman/
    grunt.config('express', {

        dev: {
            options: {
                // on windows you need to use \\
                bases: ['D:\\Path\\To\\site'],
                port: 9000,
                hostname: "0.0.0.0",
                livereload: true
            }
        },
        prod: {
            options: {
                // on windows you need to use \\
                bases: ['D:\\Path\\To\\dist\\site'],
                port: 9000,
                hostname: "0.0.0.0",
                livereload: true
            }
        }        

    });
    
    grunt.loadNpmTasks('grunt-express');
};