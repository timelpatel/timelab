module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'src/assets/css/timelab.css': 'sass/base.scss'
                }
            }
        },
        watch: {
            sass: {
                options: {
                    sourcemap: 'none'
                },
                files: 'sass/{,*/}*.{scss,sass}',
                tasks: ['sass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

};
