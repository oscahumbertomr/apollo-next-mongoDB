 const {
   gql
 } = require('apollo-server');

 const typeDefs = gql `
      type Course {
           title: String
           technology: String
      }
      input techonologyName {
           technology: String
      }
      type Query {
           getCoursesByTechnology(input: techonologyName!): [Course]
           getAllCourses: [Course]
      } `;

 module.exports = typeDefs;