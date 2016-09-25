module.exports = function(grunt) {
    grunt.initConfig({
        electron: {
            macosBuild: {
                options: {
                    name: 'ferret',
                    dir: '.',
                    out: './build',
                    version: '1.4.1', //electron version
                    platform: 'darwin',
                    arch: 'x64'
                }
            }
        },

        clean: {
            build: [ './build' ] // to be deleted
        }
    });

    grunt.loadNpmTasks('grunt-electron');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('default', [ 'electron' ]);
    grunt.registerTask('fastbuild', [ 'electron' ]);
    grunt.registerTask('cleanbuild', [ 'clean', 'electron' ]);
};
