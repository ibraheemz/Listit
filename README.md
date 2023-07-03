# LISTIT
LISTIT is a web application that allows users to convert a YouTube playlist to a Spotify playlist.
This repository contains the frontend and the backend code for the LISTIT application.

## Features
+ You can transfer your youtube playlist and name it through the home page with a "Let's Start" button that opens a modal with two inputs: a YouTube playlist link and a name for the new Spotify playlist.
+ Authentication with Spotify using the "Login with Spotify" button on the top right of the page.
+ A Node.js backend with CORS and Express is used to securely store sensitive information such as the Spotify API client ID and client secret.
+ React Router DOM, Axios, React Icons, and Framer Motion are used to create a smooth user experience and animations between pages.
+ The app is styled with CSS3 and uses Flexbox for layout. It is also **responsive** on all screens and uses **Media queries** to adapt to different screen sizes.

## Installation
To get started with LISTIT, first clone this repository:

``` 
git clone https://github.com/ibraheemz/Listit.git
```

Next, navigate to the listit directory and install the dependencies:

```
cd Listit
npm install
```
Next, you need to clone the [backend](https://github.com/ibraheemz/Listit-Backend) of the application:

```
git clone https://github.com/ibraheemz/Listit-Backend.git
```
Now, navigate to the Listit-Backend directory and install the dependencies:

```
cd Listit-Backend
npm install
```


***Note: you need to create a .env file in the Listit-Backend directory and set your environment variables: CLIENT_ID with your Spotify client_id, CLIENT_SECRET with your Spotify client_secret, and your GOOGLE_TOKEN with yours.***


## Usage
To start the application, 
First, navigate to the frontend folder and run the following command:

```
npm start
```
This will start the development server on http://localhost:3000.

Then, move to the backend folder and run
```
nodemon start
```
This will start the server on http://localhost:8888

## Tech Stack
LISTIT is built using the following technologies:

+ Frontend is built using **React.js**
+ Routing with **React router dom**
+ Animations with **Framer motion**
+ Async API calls with **Axios**
+ Styling with **CSS3, Media queries, Bootstrap, react-icons**
+ Backend with **Node.js** , **Express**, **Cors**
+ **REST API**
+ **Spotify API**
+ **Google OAuth2.0**
