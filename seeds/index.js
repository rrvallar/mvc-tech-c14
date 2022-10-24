const seedPostData = require('./postSeed');
const seedUsers = require('./userSeed');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\nDATABASE SEEDED\n');
    
  await seedUsers();
    console.log('\nUSERS SEEDED\n');
  
  await seedPostData();
    console.log('\nPOSTS SEEDED\n');


  process.exit(0);
};

seedAll();
