# Travel Smart Ireland

This project utilises RTPI's public API and display real-time in a dashboard style view.

Real-time Passenger Information (RTPI) for Dublin Bus, Bus Eireann, Luas and Irish rail: 
https://data.gov.ie/dataset/real-time-passenger-information-rtpi-for-dublin-bus-bus-eireann-luas-and-irish-rail 

The project is undergoing at the moment. Currently displayed is real-time information of the next bus/luas/train based on a specified Stop Number.

The idea will be to give a user a dashboard that they may build up. It would be used to decide their fastest route from one location to another, be it bus, train, Luas or even Dublin Bike. 

Future development will include the following:
- Search by Address
- Retrieve Route information
- Retrieve Timetable for a Route
- As RTPI only supports Commuter trains for Irish Rail, future development will also include Irish Rails API: http://api.irishrail.ie/realtime/ 
- A bonus feature would be getting Dublin Bikes location and tell how many spaces are free, etc. https://data.dublinked.ie/dataset/dublinbikes



## Installation

Run `npm install` to get going.

You may need to install the CLI globally:
`npm install -g @angular/cli`

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
