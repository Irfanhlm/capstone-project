# Event Apps - Capstone Thrive Program BE

<br/>
<div align="center">

<h3 align="center">Event Apps</h3>

  <p align="center">
    Event Application
    <br />
    <a href="https://app.swaggerhub.com/home"><strong>» Open API »</strong></a>
    <br />
  </p>
</div>

## How to run
- Clone or fork this project on your local.
- Create file `.env`
```go
export DATABASE_USERNAME=<username-db>
export DATABASE_PASSWORD=<password-db>
export DATABASE_HOST=<host-db>
export DATABASE_NAME=<name-db>
```
- Run project
```go
$ npm start
$ npm run dev
```
- Install Express Package
```go
$ npm i express
```
- Install dotenv Package
```go
$ npm i dotenv
```
- Install Sequelize Package
```go
$ npm i sequelize
```
- Install mysql2 Package
```go
$ npm i mysql2
```
- Create an .env file in the same directory/folder as our project's entry point file (index.js) and assign sensitive data (port, username, mysql password, host and database name)

-create a database configuration in the config folder, we name the file db.js.

## ERD
![event-erd](erd-events/erd-events.png)
