# Personality Test Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the web application](#running-the-web-application)
  - [Running tests](#running-test)
  - [Running Docker](#run-docker)
- [Rest API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Personality test appliaction

A fullstack appliaction(MERN) that helps users discover their personality type through a series of questions

Technologies used

- Frontend: ReactJS with Material UI
- Backend: NodeJS & RestAPI & Expressjs using Javascript
- Database: MongoDB
- REST API documentation: Postman Collection
- Testing: Jest, msw
- CI - Github Actions
- Containerization - Docker

## Features

The service has four major endpoints implemented

- GET "/api/questions": This endpoint returns all questions

- POST "/api/questions/question": This endpoint is used to retrieve a question

- POST "/api/questions/addquestion": This endpoint is used to add a question

- PUT "/api/questions/updatequestion/:questionId": This endpoint is used to update a question

- DELETE "/api/questions/:questionId": This endpoint is used to delete a question

security mechanisms in use (cors)

## Getting Started

To run this web application on your local machine, follow the steps below:

### Prerequisites

Before getting started, ensure that you have the following software installed on your machine:

- Node.js: Download and install Node.js from the official website: https://nodejs.org

Before you start the application, you need to set up an environment variable to with the MongoURI within the express-backend directory. Here's how you can do it:

```bash

MONGO_URI="YOUR KEY"
```

Create a file called `.env` in express-backend folder of the project with the environmental variables above.

### Installation

Step-by-step guide on how to install the project and its dependencies.

1. Clone the repository to your local machine using Git:

```bash
git clone https://github.com/ayofalo/simpersonality.git
```

2. Navigate to the project directory

```bash
cd packages
cd express-backend
cd react-frontend
```

3. Install the project dependencies using NPM(Node Package Manager):

```bash
npm install
```

### Running the web application

Once you have installed the dependencies, you can start the web application from the root directory using the command below

```bash
npm run start:both
```

### Running Tests

Once you have installed the dependencies, you can run test within the react-frontend directory

```bash
cd react-frontend
npm run test
```

### Run docker

navigate to the root directory

```bash
cd simpersonality
docker-compose up

```

To stop the containers

```bash
docker-compose stop
```

### API documentation

Access API documentation within documentation folder (Postman collection)

```

### Usage

- Troubleshooting
  If you encounter any issues or have questions, please feel free to reach out to us by creating an issue on our GitHub repository: https://github.com/ayofalo/weather-data/issues.

### License

This project is licensed under the MIT License.

### Authors

Contributors names and contact info

Ayo Folami
```
