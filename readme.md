# React Internship backend

GQL Server backend for React Internship

## Requirements
Make sure you have Node installed;
Make sure you have MySQL installed on your machine;
Make sure you have yarn installed on your machine;

Open the Terminal app and type `brew update`. This updates Homebrew with a list of the latest version of Node.
node:  `brew install node`
yarn : `brew install yarn`

1.MySql 

  installation link: [MySql Instalation link](https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation-pkg.html)

2.Create a new database

    Database name: internship
    
    user : root
    
    Password: internship2020
    
3.Run migrations

    1. Run yarn migrate
    2. Run yarn seed
    To reset DB run yarn undo-all and run steps 1, 2 again;

For more information regarding migrations and seeds visit [Sequelize](http://docs.sequelizejs.com/manual/tutorial/migrations.html)



## Installation

Clone the repo
Run command `yarn install` to download and install dependencies;


## Usage

`yarn start` to start the server
Server starts at: [GQL SERVER](http://localhost:4001/gql)

####The main pages of our application:

  - **Login page**
  - **Register page** 
    - Only simple users can be created from this page
  - **Admin CRUD**
    - Accessible only for system admin's (user role id = 1);
    - Here the user has the possibility to CRUD , companies, etc
  - **Jobs CRUD and job details** 
    - Accessible only for company users (user role id = 2);
    - Here the user has the possibility to CRUD jobs, associated to their company
    - As a company user I can view who applied for any jobs created by me;
  - **My profile** page. 
    - Accessible only for simple users (user role id = 3);
    - Here the user has the possibility to CRUD CV related information (general info, list of educations, work experiences, skills, etc)
  - **Jobs list and job detail pages**
    - A list of opened jobs;
    - As a simple user I can apply for this job

