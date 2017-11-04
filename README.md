# Protractor test framework testing an AngularJS application

Tested and developed together with the following software bundle: https://github.com/mdrocan/Dockerized-testenv

### About

- Simple demo to web application testing with Protractor.
- Utilizing directConnect:true feature.
- Testreports created with jasmine-reporters and protractor-jasmine2-html-reporter.

### Configuration

- If tested utilizing the previously mentioned Jenkins project, the the following commands in the build steps are helpful
```
npm install --save-dev
./node_modules/protractor/bin/webdriver-manager update
npm run all-tests
```

## Author

Designed by Mikko Drocan.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
