module.exports = function (grunt) {

    grunt.config('csslint', {

        strict: {
            options: {
                import: 2,
                'star-property-hack': false,
                'adjoining-classes': false,
                'box-sizing': false,
                'outline-none': false,
                'underscore-property-hack': false,
                'unqualified-attributes': false,
                'regex-selectors': false,
                'unique-headings': false,
                'font-sizes': false
            },
            src: ['build/css/*.css']
        },
        lax: {
            /*just errors*/
            options: {
                import: false,
                'star-property-hack': false,
                'adjoining-classes': false,
                'box-sizing': false,
                'outline-none': false,
                'underscore-property-hack': false,
                'unqualified-attributes': false,
                'regex-selectors': false,
                'unique-headings': false,
                'font-sizes': false              ,
                'unique-headings': false,
                'fallback-colors': false,
                'overqualified-elements': false,
                'box-model': false,
                'display-property-grouping': false,
                'compatible-vendor-prefixes': false,
                'important':false,
                'duplicate-properties': false,
                'ids': false
                
            },
            src: ['build/css/*.css']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-csslint');
};