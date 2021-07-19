import planner from './assets/images/planner.jpeg';
import password from './assets/images/password.jpeg';
import movie from './assets/images/movie.jpeg';
import employees from './assets/images/prompts.png';
import weather from './assets/images/weather.png';
import ecommerce from './assets/images/cupcakes.jpeg';


const projects = [
  {
    title: 'Weather On the Dash',
    github: 'https://github.com/mandellbutler/Weather-on-the-Dash',
    live: 'https://mandellbutler.github.io/Weather-on-the-Dash/',
    image: {
      src: weather,
      alt: 'A homepage view of a weather dashboard.'
    },
    description: 'A convenient and responsive web application that allows users to search city-based weather forecasts.'
  },
  {
    title: 'Movie Logger',
    github: 'https://github.com/mandellbutler/Movie-Logger',
    live: 'https://movie-logger2021.herokuapp.com/',
    image: {
      src: movie,
      alt: 'Image of a movie logger application, displaying old movie posters.'
    },
    description: 'Log, rate, and share your favorite movies with friends and family!'
  },
  {
    title: 'Ecommerce Backend Support',
    github: 'https://github.com/mandellbutler/E-Commerce_Back_End',
    live: '#',
    image: {
      src: ecommerce,
      alt: 'Image of gourmet cupcakes on display'
    },
    description: 'Giving retailers a competitive edge in the vastly growing online marketplace.'
  },
  {
    title: 'Work Day Scheduler',
    github: 'https://github.com/mandellbutler/Day-Planner',
    live: 'https://mandellbutler.github.io/Day-Planner/',
    image: {
      src: planner,
      alt: 'Image of a work day scheduler with organized rows.'
    },
    description: 'A simple, yet efficient, mobile application to help organize your work day.'
  },
  {
    title: 'Password Generator',
    github: 'https://github.com/mandellbutler/Password-Genie',
    live: 'https://mandellbutler.github.io/Password-Genie/',
    image: {
      src: password,
      alt: 'Image of a password generating application'
    },
    description: 'Quickly generate safe and unique online passwords with this Password Generator.'
  },
  {
    title: 'Employee Management System',
    github: 'https://github.com/mandellbutler/Employee-Management-System',
    live: '#',
    image: {
      src: employees,
      alt: 'Image of Employee management system prompt'
    },
    description: 'Facilitate the employee-management process, allowing for increased workflow and business functionality.'
  },
]

export default projects;