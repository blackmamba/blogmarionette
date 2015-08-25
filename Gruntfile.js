module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        bowerRequirejs: {
            target: {
                rjsConfig: 'client/requireconfig.js'
            }
        } 
    });

    grunt.loadNpmTasks('grunt-bower-requirejs');

    grunt.registerTask('default', ['bowerRequirejs']);
};
