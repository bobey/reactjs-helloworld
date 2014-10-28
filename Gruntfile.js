module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            options: {
                debug: true,
                extensions: ['.jsx'],
                external: ['react']
            },
            hello: {
                src: 'src/jsx/app.jsx',
                dest: 'build/js/app.js'
            }
        },
        copy: {
            all: {
                expand: true,
                cwd: 'src/',
                src: ['index.html'],
                dest: 'build/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['browserify', 'copy']);
};
