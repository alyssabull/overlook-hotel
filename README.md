# The OverLook Hotel

## Our Site

>[Deployed GitHub Pages Site](https://alyssabull.github.io/overlook-hotel/)

## Project Specs and Rubric

>[Overlook Hotel Solo Project](https://frontend.turing.io/projects/overlook.html)

## Project Team 

>[Alyssa Bull](https://github.com/alyssabull), contributor

>[Shawn Truesdale](https://github.com/shawntru), PR reviewer

## Overview

* In this project, I created a website application for a hotel - The Overlook. The website has a customer and manager interface where bookings can be viewed, added or deleted from an API. Customers can also browse available rooms and filter by room type. It provides a user friendly interface with and easy layout to provide maximum functionality.

## Project Goals

* Implement ES6 classes that communicate to each other as needed
* Implement a robust testing suite using TDD
* Work with an API to get, post and delete data
* Refactor CSS styles using SASS
* Separate code in separate files for readability
* Use object and array prototype methods to perform data manipulation
* Create a user interface that is easy to use and displays information in a clear way

## Functionality

#### Log In Page

* When the page is loaded, a log in page is displayed where the customer or manager can log in with a user name and password. If the credentials are correct, the corresponding page view is loaded, if the credentials are incorrect, an error message is displayed that prompts the user to try again.



#### Manager View

* When logged in as manager, there are options of information that can be viewed. The manager can select a date to see an overview of the hotel including the number of rooms occupied for a certain day as well as the rooms bookings for that current date. If the date is in the future, the manager has an option to delete that booking.



* A manager can search for customers from the drop down menu and view their information including total spent and their booking history. The manager can delete a customer's booking if the date is in the future.



* A manager is also able to add a booking for a customer. When they click the add booking button, a modal will pop up where a date can be selected to see the available rooms. A room can be booked by clicking the button where a confirmaiton message will show that the booking was successful.



#### Searching For Recipes

* The search section appears on the left hand side of the screen when the user is on the home page, favorite recipes page, or the recipes to cook page.
* The search results will change based on the page the user is on

![Screen Shot 2020-10-21 at 8 01 37 PM](https://user-images.githubusercontent.com/67242223/96809626-7dd66b80-13d8-11eb-9dfe-b9b143f2867c.png)

#### Recipe Page

* When a user clicks on a recipe, they are taken to that recipe's page.  They then can view the ingredients and instructions required for the recipe.
* A user can also click a 'Check Pantry Stock' button (described below)

![Screen Shot 2020-10-21 at 8 04 13 PM](https://user-images.githubusercontent.com/67242223/96809767-9ba3d080-13d8-11eb-956e-263eaa524f81.png)

#### Checking Pantry Stock

* After a recipe is selected, the user has the option to 'Check Pantry Stock'.  This will tell them which ingredients they are missing and how much of that ingredient they need.

![Screen Shot 2020-10-21 at 8 05 18 PM](https://user-images.githubusercontent.com/67242223/96810272-c42bca80-13d8-11eb-8ef9-cf57931e788a.png)

#### Favorited Recipes Page

* After a user has favorited some recipes, they may click the 'Favorites' button on the NAV to take them to their favorited recipes.

![Screen Shot 2020-10-21 at 8 06 27 PM](https://user-images.githubusercontent.com/67242223/96810819-ed4c5b00-13d8-11eb-97b1-6fc268360238.png)

#### Recipes To Cook Page

* After a user has selected some recipes to cook, they may click the 'Recipes To Cook' button on the NAV to take them to their recipes to cook.

![Screen Shot 2020-10-21 at 8 07 34 PM](https://user-images.githubusercontent.com/67242223/96811265-140a9180-13d9-11eb-9d08-26d64e7cc60f.png)

#### User Pantry

* A user can click on the 'Pantry' button on the NAV to view all of their ingredients, along with the amount that they have.

![Screen Shot 2020-10-21 at 8 08 27 PM](https://user-images.githubusercontent.com/67242223/96811888-43b99980-13d9-11eb-9859-d4b984a02eca.png)

#### Wins 
* Creating class structure and corresponding tests from scratch
* Using correct array iterator methods when needed
* Connecting our Class JS files to our main JS file
* Consistent Git workflow
* Solid collaboration methods

#### Challenges
* Writing useful sad path tests
* Having Class methods be useful/accurate before DOM manipulation
* Focusing on data model first
* Refactoring code right after it’s written (instead of waiting to do it later)
