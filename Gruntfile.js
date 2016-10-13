module.exports = function(grunt) {
    const package = require('./package.json');

    var getElectronOptions = function(platform, arch) {
        return {
            name: package.name,
            dir: '.',
            out: './release',
            version: package.dependencies.electron.slice(1), // eleminate first
            platform: platform,
            arch: arch,
            asar: true,
            overwrite: true
        }
    };
    grunt.initConfig({
        electron: {
            'osx': {
                options: getElectronOptions('darwin', 'x64')
            },
            'win32-x64': {
                options: getElectronOptions('win32', 'x64')
            },
            'win32-x86': {
                options: getElectronOptions('win32', 'ia32')
            },
            'linux-x64': {
                options: getElectronOptions('linux', 'x64')
            },
            'linux-x86': {
                options: getElectronOptions('linux', 'ia32')
            }
        },

        clean: {
            build: [ './release' ] // to be deleted
        }
    });

    grunt.loadNpmTasks('grunt-electron');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [ 'electron' ]);
};
