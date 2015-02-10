module.exports = function (grunt) {

    grunt.config('copy', {

        //copy working files to build
        build: {
            files: [
                {
                    expand: true,
                    src: ['site/assets/css/**/*.css'],
                    dest: 'build/css',
                    filter: 'isFile',
                    flatten: true
                },
                {
                    //copy boostrap files to concat
                    expand: true,
                    src: ['site/assets/css/bootstrap/*.css'],
                    dest: 'build/concat',
                    filter: 'isFile',
                    flatten: true
                },                
                {
                    expand: true,
                    src: ['site/js/**/*.js'],
                    dest: 'build/js',
                    filter: 'isFile',
                    flatten: true
                },
                {
                    expand: true,
                    src: ['site/assets/img/*.jpg', 'site/assets/img/*.png'],
                    dest: 'build/img',
                    filter: 'isFile',
                    flatten: true
                },                
                    ]
        },
        dist: {
            
            //TODO copy favicon and other supporting files
            files: [
                {
                    expand: true,
                    src: ['site/**/**/*.html'],
                    dest: 'dist',
                    filter: 'isFile',
                    flatten: false
                },
                {
                    expand: true,
                    src: ['build/img/*.jpg', 'build/img/*.png'],
                    dest: 'dist/site/assets/img',
                    filter: 'isFile',
                    flatten: true
                },
                {
                    expand: true,
                    src: ['js/vendor/*.js'],
                    dest: 'dist/site/js/vendor',
                    filter: 'isFile',
                    flatten: true
                },
                {
                    //copy any css files that were already min
                    expand: true,
                    src: ['build/css/*.min.css'],
                    dest: 'dist/site/assets/css',
                    filter: 'isFile',
                    flatten: true
                }                
  ]
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};