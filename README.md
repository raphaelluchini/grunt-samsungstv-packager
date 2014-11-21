# grunt-samsung

> Task manager for package samsung smarttv apps, using: [samsungstv-packager](http://github.com/raphaelluchini/samsungstv-packager)

# Getting Started
    npm install grunt-samsungstv-packager --save
Add those lines in your grunt file
```
samsung: {
    default_options: {
        options:{
            samsungApp: './', //Diectory to be packaged
            serverRoot: null, //(Optional)Where the packager going to write the files and create the server. Defult:'./'
            appId: null, //(Optional) Samsaung AppId 
            appTitle: null, //(Optional) App Title
            serverPort:null //(Optional) Samsung smarttvs uses only port 80, but if for some reason you need to change, you can do it.
        }
    }
}
grunt.loadNpmTasks('grunt-samsungstv-packager');
```
Then run it(sudo is necessary to access the port 80)
```
    sudo grunt samsung
```