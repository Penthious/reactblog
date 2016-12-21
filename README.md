## Requirements
* homestead or other dev enviorment

## Getting Started

If homestead is istalled and you already cloned this project and updated your Homestead.yaml and /etc/hosts file.
All you have to do now is ssh into homestead and navigate to your project and run:
```
composer install                    # installs laravel dependencys

php artisan migrate --seed          # Sets up the database tables

npm install                         # installs sites node dependencys

npm run build                       # runs webpack watch to keep building the main.js file
```

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)
* [axios](https://github.com/mzabriskie/axios)

## Application Structure


```
├── app                                     # Main laravel folder
|      Http                                 # Contains the functionality of the website
|        └── Controllers                    # Holds the controllers
|               ├── Auth                    # Holds all the auth controllers
|               ├── Controller.php          # The base controller that others extend off of
|               ├── HomeController.php      # How the site is being routed
|               └── PostController.php      # How the posts are being handled and routed
├── bootstrap                   
├── config             
├── database  
├── public                                  # Where the images and compiled javascript is held
├── resources                               # Default storage for all pulled in files
|     └── assets                            # Where the sites assets are stored
|           ├── js                          # Where the Main.jsx and all its sub components are stored
|           |    ├── actions                # Where redux actions are stored
|           |    ├── components             # Where all main layout components are stored
|           |    ├── projects               # Where all project files are stored IE: Calculator
|           |    ├── reducers               # Where redux reducers are stored
|           |    └── store                  # Where redux store is storde
|           └── sass                        # Where sites styles are stored
├── routes                                   
|     └── web.php                           # How the sites url is formated
├── storage 
└── tests


```
