module.exports = function (grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {
              files: [{
                expand: true,
                cwd: 'css/src',
                src: ['*.scss'],
                dest: 'css/src',
                ext: '.css'
              }]
            }
        },
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
        },
        watch: {
            sass: {
              // We watch and compile sass files as normal but don't live reload here
              files: ['css/src/style.scss'],
              tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['sass']);

};
