import estore from '../img/estore.png';
import memoryCards from '../img/memory-cards.jpeg';
import vinylStore from '../img/vinyl-store.jpg';
import userTable from '../img/user-table.jpeg';
import { technologies } from '../const';

const projects = [
  {
    title: 'Vinyl Store',
    desc: 'A backend vinyl store app with user authentication, role-based access control, vinyl management, payment integration and more.',
    techlonogies: [
      technologies.TypeScript,
      technologies.NestJS,
      technologies.MySQL,
      technologies.TypeORM,
      technologies.Passport,
      technologies.Nodemailer,
      technologies.Stripe,
      technologies.Winston,
    ],
    img: vinylStore,
    projectLink:
      'https://vinyl-store-awesome-app-ac28f998a426.herokuapp.com/api/',
    githubLink: 'https://github.com/pl0tka/vinyl-store',
  },
  {
    title: 'User Dashboard',
    desc: 'An app displaying a table of user data, with filtering options for each column.',
    techlonogies: [
      technologies.TypeScript,
      technologies.React,
      technologies.ReduxToolkit,
      technologies.RTKQuery,
      technologies.StyledComponents,
    ],
    img: userTable,
    projectLink: 'https://user-management-redux-app.netlify.app/',
    githubLink: 'https://github.com/pl0tka/user_dashboard',
  },
  {
    title: 'Online Store app',
    desc: 'An e-commerce platform with product display, cart management, detailed product views, and a responsive design.',
    techlonogies: [
      technologies.JavaScript,
      technologies.HTML,
      technologies.CSS,
      technologies.Sass,
    ],
    img: estore,
    projectLink: 'https://only-best-prices.netlify.app/',
    githubLink: 'https://github.com/pl0tka/eStore',
  },
  {
    title: 'Memory Cards Game',
    desc: 'A memory game with customizable card counts, persistent dark mode, and data fetched from an external API.',
    techlonogies: [technologies.React, technologies.HTML, technologies.CSS],
    img: memoryCards,
    projectLink: 'https://fun-memory-cards.netlify.app/',
    githubLink: 'https://github.com/pl0tka/memory-cards',
  },
];

export default projects;
