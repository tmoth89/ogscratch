db = require('./server/db')
constants = require('./server/DB_TEST_CONSTANTS/constants')

function dropTable(tableName) {
  return new Promise((resolve, reject) => {
    db.query(`drop table ${tableName};`, (err, result) => {
      if (err) console.log(err);
      console.log('table dropped or non existant');
      resolve();
    })
  })
}

function createTable(tableName, columns) {
  return new Promise((resolve, reject) => {
    let query = `create table ${tableName} (` + columns.join(',') + ');';
    console.log(`create query: ${query}`);
    db.query(query, (err, result) => { //no error handling
      if (err) console.log(err);
      resolve();
    })
  })
}

async function insertIntoTable(tableName, row) {
  return new Promise((resolve, reject) => {
    let queryValues = '';

    let account = row;
    const values = [];
    const columnNames = [];
    const dollars = [];
    let count = 1;
    for (const key in account) {
      if (account.hasOwnProperty(key)) {
        const element = account[key];
        values.push(element);
        columnNames.push(key);
        dollars.push(`$${count++}`);
      }
    }

    let query = `INSERT INTO ${tableName} (${columnNames.join(',')} ) VALUES (${dollars.join(',')}) RETURNING *;`;

    db.query(query, values, (err, result) => {
      console.log("Query Done");
      if (err) console.log(err);
      resolve() //error checking is for chumps
    })

  });
}


module.exports = async () => {
  console.log("Jest SetUP-------------------------");

  let tables = ['test_art', 'test_accounts']
  let columnsNames = [constants.accountColumns, constants.artColumns]
  let columnValues = [constants.accounts, constants.arts]

  //drop all tables
  for (let i = 0; i < tables.length; i++) {
    let currentTable = tables[i];
    console.log(`Dropping: ${currentTable}`);
    await dropTable(currentTable);
    console.log(`${currentTable} dropped`);

  }
  //create tables - order is important here
  //must create accounts before arts
  for (let i = 0; i < columnsNames.length; i++) {
    const columns = columnsNames[i];
    console.log(`Creating: ${currentTable} ===================`);
    await createTable(currentTable, columns);
  }

  // let currentTable = 'test_art'
  // await dropTable(currentTable);
  // console.log(`${currentTable} dropped`);

  // currentTable = 'test_accounts'
  // await dropTable(currentTable);
  // console.log(`${currentTable} dropped`);
  // await createTable(currentTable, constants.accountColumns);
  // console.log(`${currentTable} created`);

  // let insertValues = constants.accounts;

  // console.log("Insert begin");
  // for (let i = 0; i < constants.accounts.length; i++) {
  //   const account = constants.accounts[i];
  //   await insertIntoTable(currentTable, account);
  //   console.log("-------------------");
  // }
  // console.log(`Insert End`);

  // console.log(`Create Test Art Table`);
  // currentTable = 'test_art'

  // await createTable(currentTable, constants.artColumns);
  // console.log(`${currentTable} created`);

  // insertValues = constants.accounts;

  // console.log("Insert begin");
  // for (let i = 0; i < constants.arts.length; i++) {
  //   const art = constants.arts[i];
  //   await insertIntoTable(currentTable, art);
  //   console.log("-------------------");
  // }
  // console.log(`Insert End`);




  global.testServer = await require('./server/server.js');

  // function resolveAfter2Seconds(x) { 
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(x);
  //     }, 5000);
  //   });
  // }

  //   var x = await resolveAfter2Seconds(10);
  //   console.log(x); // 10


  console.log("Jest SetUP-------------------------END");

};
