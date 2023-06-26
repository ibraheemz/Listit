# LISTIT
LISTIT is a web application that allows users to convert a YouTube playlist to a Spotify playlist.
This repository contains the frontend code for the LISTIT application.

## Features
+ You can transfer your youtube playlist and name it through the home page with a "Let's Start" button that opens a modal with two inputs: a YouTube playlist link and a name for the new Spotify playlist.
+ Authentication with Spotify using the "Login with Spotify" button on the top right of the page.
+ A Node.js backend with CORS and Express is used to securely store sensitive information such as the Spotify API client ID and client secret.
+ React Router DOM, Axios, React Icons, and Framer Motion are used to create a smooth user experience and animations between pages.
+ The app is styled with CSS3 and uses Flexbox for layout. It is also **responsive** on all screens and uses **Media queries** to adapt to different screen sizes.

## Installation
To get started with LISTIT, first clone this repository:

``` 
git clone https://github.com/ibraheemz/listit.git
```

Next, navigate to the listit directory and install the dependencies:

```
cd listit
npm install
```


***Note: For now, you would have to integrate the login with Spotify functions, which are made in the backend of the project which is not in this repo yet, as it requires some sensitive information like "client_id " and "clint_secret ", also you would have to get a google access token too.***


## Usage
To start the application, run the following command:

```
npm start
```
This will start the development server on http://localhost:3000.

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
