 const {
      ApolloServer,
      gql
 } = require('apollo-server');





 const courses = [{
           titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
           tecnologia: 'JavaScript ES6',
      },
      {
           titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
           tecnologia: 'React',
      },
      {
           titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
           tecnologia: 'Node.js'
      },
      {
           titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
           tecnologia: 'React'
      }
 ];


 const typeDefs = gql `
      type Course {
           title: String
           technology: String
      }
      type Query {
           getCourses : Course
      } `;

 const resolvers = {
      Query: {
           getCourses: () => courses[0]

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