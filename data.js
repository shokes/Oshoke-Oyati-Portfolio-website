import country from './public/country rest.png';
import omuwa from './public/omuwa-photography.png';
import countryInfo from './public/countryInfo.jpg';
import photography from './public/photography.jpg';
import country2 from './public/country2.png';
import nextglass from './public/nextglass.png';
import nextglass2 from './public/nextglass2.png';
import nextGlass from './public/nextGlass.jpg';
import omuwa2 from './public/omuwa2.png';
import BGKICKS from './public/30BGKICKS.jpg';
import bgkicks1 from './public/bgkicks1.png';
import bgkicks2 from './public/bgkicks2.png';
import netflix1 from './public/netflix-clone.png';
import netflix2 from './public/netlifx-clone2.png';
import netflixmain from './public/netflixmain.jpg';

const projects = [
  {
    id: 1,
    title: 'Netflix Clone',
    image: netflix1,
    image2: netflix2,
    desc: 'A clone of Netflix.',
    website: 'https://netflix-ts-phi.vercel.app/',
    github: 'https://github.com/shokes/Netflix-ts',
    stack: [
      'NextJS',
      'ReactJS',
      'TypeScript',
      'Redux TK',
      'TailwindCSS',
      'API',
    ],
    role: 'Frontend development.',
    mainImage: netflixmain,
    year: 2022,
    para1:
      'After learning the fundamentals of TypeScript, I wanted to put that knowledge into use. I worked on this project integrating NextJS and TypeScript. I wanted to use a state management I had not used before so I went with Redux TK.',
    para2:
      'CSS in JS is my go-to for styling in React applications and my preferred tool for that is TailwindCSS',
    para3:
      'I was able to appreciate and understand how TypeScript minimizes potential bugs in middle - large scale JavaScript applications.',
  },
  {
    id: 2,
    title: '30BG KICKS',
    image: bgkicks1,
    image2: bgkicks2,
    desc: 'An E-commerce web app with authentication and payment integration.',
    website: 'https://30bgkicks.vercel.app/',
    github: 'https://github.com/shokes/30BGKICKS',
    stack: ['ReactJS', 'TailwindCSS', 'Paystack API', 'React-router', 'Auth0'],
    role: 'Frontend development.',
    mainImage: BGKICKS,
    year: 2022,
    para1:
      'Building this web app was complex. I had some difficulties, i could not get a free api to use for this application  so i came up with a database of my own.',
    para2:
      'Another difficulty was while sorting the array, it kept on mutating the original so i had to spread out before sorting to prevent mutating. A simple fix it might seem, but it took me sometime to figure the root of the issue. ',
    para3:
      'The process was mostly enjoyable as I had fun playing around with some new stuff like payment integration using the paystack api, tailwind css for styling and authentication with auth0.',
  },
  {
    id: 3,
    title: 'Country Info',
    image: country,
    image2: country2,
    desc: 'A web app that displays info of a country as requested with a theme switcher.',
    website: 'https://countries-infoo.vercel.app/',
    github: 'https://github.com/shokes/Country-rest-API',
    stack: ['ReactJS', 'CSS 3', 'API', 'React-router'],
    role: 'Frontend development.',
    mainImage: countryInfo,
    year: 2022,
    para1:
      'This was the first application I built when I was learning about accessing data from an API. Country Info is a web application showing basic information about a country searched for by the user. ',
    para2:
      'The original idea for this project came from Frontend Mentors but I was able to build upon the idea by adding a few more functionalities, a preloader and a theme switcher. I managed the states with the context API and useReducer. ',

    para3:
      'This project made me better at destructuring as well as accessing data dynamically from an API.',
  },

  {
    id: 4,
    title: 'Next Glass',
    image: nextglass,
    image2: nextglass2,
    desc: 'A minimal and beautiful NextJS personal blog with a nice glassmorphism ui coupled with sanity cms for content management.',
    website: 'https://next-glass-gamma.vercel.app/',
    github: 'https://github.com/shokes/Next-Glass',
    stack: ['NextJS', 'ReactJS', 'TailwindCSS', 'Sanity CMS'],
    role: 'Frontend development. ',
    mainImage: nextGlass,
    year: 2022,
    para1:
      'After getting a basic understanding of NextJS and a headless CMS, I wanted to build something with it and this was the result. I wanted the user interface to be minimal and beautiful and use the Glassmorphism design trend. I also wanted non-technical users to be able to add and update the site content easily. ',
    para2:
      'After checking several headless cms, I decided to choose Sanity because it is simple, has an intuitive content editor and generous pricing.',
    para3:
      'NextJS did not take long to get hold of because of its great docs, kudos to the team at vercel. After some googling, i was able to figure out connecting a CMS to it.',
  },

  {
    id: 5,
    title: 'Omuwa Photography',
    image: omuwa,
    image2: omuwa2,
    desc: 'A portfolio website for a photographer.',
    website: 'https://omuwa-photography.vercel.app/',
    github: 'https://github.com/shokes/Omuwa-Photography',
    stack: ['ReactJS', 'CSS 3', 'React-router'],

    role: 'Frontend development. ',
    mainImage: photography,
    year: 2022,
    para1:
      'This is a simple and minimal portfolio website for a photographer. ',
    para2:
      'After my understanding of the fundamentals of React, I wanted to apply that knowledge immediately into something simple but beautiful and this was the result. ',
    para3:
      'I wanted the site to have some simple animation too, I used React awesome reveal for that. CSS 3 is my go to for styling. ',
  },
];

export default projects;
