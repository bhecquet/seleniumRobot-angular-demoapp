# Testapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
Application aims at being used inside seleniumRobot integration tests to check that specific angular material elements can be used

## Install

clone project

- install node (>= 6.11.5) + npm ( >= 3.10.10)
- install angular-cli (1.5.0 for angular 5) [https://cli.angular.io/](https://cli.angular.io/): `npm install -g @angular/cli@1.5.0`
- `cd <dir_where_app_is_cloned>`
- install dependencies: `npm install`: this will read packages.json and fetch the required dependencies
- go to `src/app/` and modify html. Doc for material components can be found here [https://material.angular.io/components/categories](https://material.angular.io/components/categories)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
