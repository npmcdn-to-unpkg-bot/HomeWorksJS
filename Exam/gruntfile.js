module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },
        concat: {
            js: {
                src: 'src/js/*.js',
                dest: 'dest/js/script.main.js'
            },
            css: {
                src: 'src/css/*.css',
                dest: 'dest/css/main.css'
            }
        },
        uglify: {
            js: {
                src: ['dest/js/script.main.js'],
                dest: 'dest/js/script.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dest/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dest/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            sass: {
              // We watch and compile sass files as normal but don't live reload here
              files: ['src/scss/*.scss'],
              tasks: ['sass']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);

};
