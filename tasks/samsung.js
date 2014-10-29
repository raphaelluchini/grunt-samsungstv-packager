/*
 * grunt-samsung
 * https://github.com/raphaelluchini/grunt-samsungstv-packager
 *
 * Copyright (c) 2014 raphaelluchini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var samsungPackager = require('samsungstv-packager');

  grunt.registerMultiTask('samsung', 'The best Grunt plugin ever.', function() {
    var done = this.async();
    /**
    2 = Folder to be package
    3 = Folder that the server will run (Optional) Default:./packages
    4 = App ID (Optional)
    5 = App Title (Optional)
    6 = Port that the server will run (Optional) Default:80
    **/
    var options = this.options({
      samsungApp: './',
      serverRoot: null,
      appId: null,
      appTitle: null,
      serverPort:null
    });
    samsungPackager.run(options.samsungApp, options.serverRoot, options.appId, options.appTitle, options.serverPort);
  });
};