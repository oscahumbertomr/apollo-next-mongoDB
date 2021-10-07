 const {
      ApolloServer,
      gql
 } = require('apollo-server');


 const Courses = [{
           title: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
           technology: 'JavaScript ES6',
      },
      {
           title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
           technology: 'React',
      },
      {
           title: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
           technology: 'Node.js'
      },
      {
           title: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
           technology: 'React'
      }
 ];


 const typeDefs = gql `
      type Course {
           title: String
           technology: String
      }
      type Titles {
           title: String
      }
      type Technology {
           technology: String
      }
      type Query {
           getCourses : [Course]
           getOnlyTechonolys: [Technology]
           getOnlyTitles: [Titles]
      } `;

 const resolvers = {
      Query: {
           getCourses: () => Courses,
           getOnlyTechonolys: () => Courses,
           getOnlyTitles: () => Courses,

      }
 }

 const server = new ApolloServer({
      typeDefs,
      resolvers
 });

 server.listen().then(({
      url
 }) => {
      console.log(`Servidor listo en la URL ${url}`);
 })