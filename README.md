# E-Commerce_Backend

## Table of contents
​
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Instructions](#instructions)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
​
​
## Overview
​
### The challenge
​
The E-Commerce Backend project is a sample backend for ecommerce solutions.  It utilizes NodeJs, express, sequelize, and mysql2 to implement routes that can interact with a SQL database.
​
### User Story
​
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
​
### Acceptance Criteria
​
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

​
​
### Instructions

- App Demo Video: [https://watch.screencastify.com/v/MrLMUnyMMuIOjuaFXUkJ](https://watch.screencastify.com/v/MrLMUnyMMuIOjuaFXUkJ)
<br>

## My process
​
### Built with
​
- JavaScript
- NodeJS
- NPM express
- NPM sequelize
- MySQL2
- SQL
​
### What I learned
​
In this challenge, I leanred how to successfully build my own API that interacts with a database.  I required me to broaden my knowledge of sequelize Object Relational Mapping so that I could successfully create, read, update, and delete data from a dtabase using routes that I created.  One challenge that I had to work through was learning how to create associations using sequelize.  Below are my association definitions:

```js
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  },
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },
  foreignKey: 'tag_id',
});
```
This was the first time that I had to interact with a database that had many to many associations.  At first, I couldn't figure out why my ProductTag model was creating new foreign key when I already had mine defined for that junction table.  After reading through sequelize documentation, it was apparrent I had to specify a `foreignKey` value, or sequelize would automatically create them for me.  As seen above, I defined `foreignKey:` as the existing keys in the junction table that I wanted it use.
​
### Continued development
​
By working through this project, it inspired me to think of way to connect a model instance to a javascript class.  More specifically, I want to develop a webapp game and will need game character stats saved in a database, and I will want to retrieve that data to create a new character class instance for gameplay.  I look forward to using my new database skills to implement this type of function.
​
### Useful resources
​
- [Sequelize DOCS associations](https://sequelize.org/docs/v6/core-concepts/assocs/) - The seqeulize docs were great at breaking down how to use their association methods.

​
## Author
​
Nolan Spence
- Website - [Nolan Spence](https://unicorn-barf.github.io/Portfolio_Website_HTML_CSS/)
- LinkedIn - [https://www.linkedin.com/in/aerospence/](https://www.linkedin.com/in/aerospence/)
​
## Acknowledgments

Thank you to my TA Matthew Klausson for talking about associations with me to better understand what was happening with sequelize joins!