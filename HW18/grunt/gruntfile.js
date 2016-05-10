module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: 'js/src/*.js',
                dest: 'js/dist/script.main.js'
            },
            css: {
                src: 'css/src/*.css',
                dest: 'css/dist/main.css'
            }
        },
        uglify: {
            js: {
                src: ['js/dist/script.main.js'],
                dest: 'js/dist/script.min.js'
            },
            css: {
                src: ['css/dist/main.css'],
                dest: 'css/dist/min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);

};
