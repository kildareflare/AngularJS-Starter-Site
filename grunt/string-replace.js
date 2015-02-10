module.exports = function (grunt) {

    /* this task removes anything between '  <!-- devfiles -->' and '<!-- enddevfiles -->'
       see Index.html*/
    
    grunt.config('string-replace', {

        prod: {
            src: 'dist/site/index.html',
            dest: 'dist/site/index.html',
            options: {
                replacements: [{
                    pattern: /<!-- devfiles(.|\r|\n)*?enddevfiles -->/g,
                    replacement: ''
     }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-string-replace');
};