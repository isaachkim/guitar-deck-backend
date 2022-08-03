# Guitar-Deck

## Description

This is the backend for [guitar-deck](https://guitardeck.netlify.app/), a Full Stack (MERN) application that will teach users how to play the guitar. Inside, users will be able to access each individual chord, with an image and the sound of the chord.

## Technologies Used

- Express
- Node.js
- MongoDB
- Mongoose

## Installation Instructions

1. Clone this repository to your lessons folder and change directory into it.
2. Run `npm i` to download required dependencies.
3. Create a .env file and add your `DATABASE_URL` to it with your MongoDB Atlas connection string.

## Getting Started

1. Run `node db/seed.js` to populate your database with seed data.
2. Run `nodemon index.js` to start your development server.
   Happy coding!!!!

## API Endpoints

**chords**

- GET: guitardeck/:chord

_To see guitar-deck deployed backend API, click [here](https://guitar-deck-mern.herokuapp.com/guitardeck)_
