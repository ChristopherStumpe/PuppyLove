const axios = require('axios');
// const config = require('../config');
// const testData = require('../data.json');
// const mysql = require('mysql');
const util = require('util')

const getReposByUsername = (username) => {
  // TODO: Use the axios module to get repos for a specific user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log('USERNAME!', username);

  const options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      // https://developer.github.com/v3/#user-agent-required
      'User-Agent': 'request',
      Authorization: `token ${config.GITHUB_TOKEN}`,
    },
  };
  // return axios(options);
  return axios.get(options.url, options.headers)
    .then(data => data)
    .catch(error => error);
};

module.exports.getReposByUsername = getReposByUsername;


// As a user I expect to be able to be able to filter by 
// - [ ] Breed
// - [ ] Age
// - [ ] Weight
// - [ ] Fixed
// - [ ] Search Description
// - [ ] Location (radius)




const connection = mysql.createConnection(mysqlConfig);

const query = util.promisify(connection.query).bind(connection)
const getAllPhrases = () => {
  // TODO - your code here!

  return query('SELECT * FROM phrases');
};
const updatePhrase = (id, newStatus) => {
  // which will locate a phrase in the database by its `id` property, then update its status.
  // debugger;
  return query(`UPDATE phrases SET status = '${newStatus}' WHERE id = ${id}`);
};
module.exports = {
  getAllPhrases,
  updatePhrase,
};
