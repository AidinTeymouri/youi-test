# YouiTest - by Aidin Teymouri - Version 1 - 9/08/2017

Live demo: (http://youi-test.s3-website-ap-southeast-2.amazonaws.com)

## Install and run the application 


Run "npm install" inside this project folder to install all dependencies.

Make sure you use the latest version of the CLI (upgrade guide below)

Run "ng serve" to see the app in action.

Feel free to compare it with your project code to spot any errors you might have.


How to upgrade the CLI
-----------------------

Run the below commands - only use "sudo" on Mac/ Linux.

sudo npm uninstall -g angular-cli @angular/cli
npm cache clean
sudo npm install -g @angular/cli


------------------------------------------------------------------------------------------------------

#About this test: 

The challenge of this project is connecting to the Stack Overflow API and list the data and not to spend more than a few hours on it.

## View:
I developed the project based on Angular style guide (https://angular.io/guide/styleguide) 

I used bootstrap 3.0 framework.

The project has different layouts in specific components such as header, footer, home and result component. 

In the result component, there is list-item component which shows list of results and inside it, there is list-item component which is developed to show one item.

## Model: 
In the shared folder, there are 3 folders. The model folder holds the structure (blueprint) of the data and if I had more time I would define all of the objects one by one.

## Services: The Services folder is located in the shared folder and I developed the Http connection settings in there.

-------------------------------------------------------------------------------------
## What did I learn? 
This challenge was easy for me and although in every project I can learn new things, because of time limitation I just finished it as soon as I could to meet the timeframe.

## What did I do if I had more time? 
Well, in short answer many things, such as define a better model with more details, design and developed better and prettier UI and last but not least my favorite part  Angular Animations.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
