My Angular Seed
========

This project is my version of an application skeleton for a typical AngularJS web app with a passing unit and a passing feature test set up and bootstrap for styling.

How to clone this repo
----
```sh
git clone https://github.com/kevinlanzon/my-angular-seed
```

Setup
-----
```sh
$ cd my-angular-seed
$ npm install
$ bower install
$ npm start
Visit http//localhost:8000
```

How to run tests
----
```sh
$ npm start (to start the server)
$ npm test (to run the unit tests)
$ npm run protractor (to run the e2e tests)
```

Technologies used
----
- AngularJS
- Node.js
- Karma for unit testing
- Protractor for feature testing
- HTML5
- CSS3
- Bootstrap


File Structure
----------------
```
- app
  - css
    - app.css
  - js
    - app.js: Contains angular module
    - controller.js: Contains the controller
  - partials
    - view1.html: Contains the homepage layout
  - index.html: Contains the main html
- test
  - e2e
    - homepageFeature.js: Contains end to end tests
  - unit
    - controllerSpec.js: Contains unit tests
```