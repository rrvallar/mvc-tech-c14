const { User } = require('../models');

const userData = [
    {
        username: "user1",
        twitter: "user1@twitter",
        github: "user1@github",
        email: "user1@gmail.com",
        password: "password1@"
    },
    {
      username: "user2",
      twitter: "user2@twitter",
      github: "user2@github",
      email: "user2@gmail.com",
      password: "password2@"
    },
    {
      username: "user3",
      twitter: "user3@twitter",
      github: "user3@github",
      email: "user3@gmail.com",
      password: "password3@"
    },
    {
      username: "user4",
      twitter: "user4@twitter",
      github: "user4@github",
      email: "user4@gmail.com",
      password: "password4@"
    },
    {
      username: "user5",
      twitter: "user5@twitter",
      github: "user5@github",
      email: "user5@gmail.com",
      password: "password5@"
    },
    {
      username: "user6",
      twitter: "user6@twitter",
      github: "user6@github",
      email: "user6@gmail.com",
      password: "password6@"
    }
]

const seedAllUsers = () => User.bulkCreate(userData);

module.exports = seedAllUsers;