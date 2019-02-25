# alc-book-meal
Book A Meal is an Ecommerce web app , for ordering food

[![Build Status](https://travis-ci.com/Preciousomonze/alc-book-meal.svg?branch=development)](https://travis-ci.com/Preciousomonze/alc-book-meal)
[![Coverage Status](https://coveralls.io/repos/github/Preciousomonze/alc-book-meal/badge.svg)](https://coveralls.io/github/Preciousomonze/alc-book-meal)
[![Maintainability](https://api.codeclimate.com/v1/badges/0ac02b550fac93eddfc4/maintainability)](https://codeclimate.com/github/Preciousomonze/alc-book-meal/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0ac02b550fac93eddfc4/test_coverage)](https://codeclimate.com/github/Preciousomonze/alc-book-meal/test_coverage)

## Trello board
[https://trello.com/b/D5Pfxoii/alc-meal-app](https://trello.com/b/D5Pfxoii/alc-meal-app)

## Endpoints
- GET **api/v1/meals/** Caterers can get all meals options they uploaded
- POST **api/v1/meals/** Catereres can add meal options linked to their account
- PUT **api/vi/meals/:mealId** Caterers can update their meal options
- DELETE **api/v1/meals/:mealId** Caterers can delete their meal options
- GET **api/v1/menu/** Caterers and Users can Get the menu for the day 
- POST **api/v1/menu/** Caterers can Set a menu for the day 
- GET **api/v1/orders** Get All Orders
- POST **api/v1/orders** Users can make orders
- PUT **api/v1/orders/:orderId** Users can modify their orders
## Installation
**On your Local Machine**
- Pull the [development](https://github.com/preciousomonze/alc-book-meal) branch off this repository
- Run `npm install` to install all dependencies
- Run npm start to start the app
- Access endpoints on **localhost:7000**

## Built With
* [Node.js](http://www.nodejs.org/) - Runtime-Enviroment
## Authors
* **Precious Omonzejele**

## Acknowledgments

* [stackoverflow.com](https://stackoverflow.com)
* The Andela Team
* [google.com](https://google.com)
* Daniel Andela
* TimzProf
* Sodiq
