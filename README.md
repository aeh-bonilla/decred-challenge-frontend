# DecredMemoriesApp

## Prerequisites

Before you begin developing with DecredMemoriesApp, make sure your development environment includes [Node.js](http://www.nodejs.org/), npm and Angular CLI.

1. Node.js
To install Node.js, go to Node.js and install the active LTS version.

2. npm
To download and install npm packages, you must have the npm package manager. This guide uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run `npm -v` in a terminal/console window.

5. Run the installation command
Open a console/terminal window and navigate into your workspace proyect directory. You must be at the same folder with the file in order to run the commands. package.json.

To complete the installation, enter the following command: 

`npm install`

4. Angular CLI
You will use the [Angular CLI](http://www.cli.angular.io/) to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the CLI using npm, open a terminal/console window and enter the following command:

`npm install -g @angular/cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Alternate commands `npm start`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Directory Structure Overview

```none
./DecredMemoriesApp                 The memories of Decred.
├── node_modules/                   Dependencies are installed in this directory.
├── src/                     
|   ├── app/                        This directory contains all application related codes.      
│   │   ├── components/pages/       Directory of web application pages (2).
│   │   │   ├── home/               Homepage.    
│   │   │   └── result-search/      Search page.
│   │   │
│   │   ├── material/               This directory contains imports of material components.           
│   │   ├── services/               Here the api is consumed.
│   │   ├── shared/                 This directory contains shared resources.
│   │   │   ├── components/         Shared Components.
│   │   │   │   ├── filters/
│   │   │   │   ├── form-search/
│   │   │   │   ├── header/
│   │   │   │   ├── line-chart/
│   │   │   │   └── paginator/
│   │   │   │
│   │   │   └── interfaces/         Object interfaces.
│   │   └── ...
│   │       
│   ├── assets/                     Default Angular assets folder.        
│   ├── environments/               Default Angular environments folder.    
│   ├── favicon.png
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss                 This file is for adding/importing global styles to the app.
│   ├── test.ts             
│   ├── insight         
│   └── types           
└── ...
```
