const { AuthenticationError } = require('apollo-server');

// Access the request using the Context
const context = ({ req, res }) => {

  let reqAuthHeaders = req.headers.authorization;

  if (!reqAuthHeaders || reqAuthHeaders !== process.env.AUTH_TOKEN) {
    throw new AuthenticationError('You must be authorized! Check credentials and try again!');  
  }
}

module.exports = context;