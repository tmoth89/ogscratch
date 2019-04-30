# ogscratch

The goal of this project was to find a way to make it easier to connect local artists to potential buyers. To do this, we wrote a fullstack application that allows users to create an account, submit art, and browse art relative to their location. 

<h1>
Database
</h1>

The database is hosted on an Elephant SQL database which should be interchangable by those who fork this project so the querys used to create the tables can be provided upon request

There are a total of 4 tables used:
  <ul>
  <li>testauth: basic account creation table for the testAPI included</li>
  <li>Sessions: used to send data relative to the user (no way to automatically delete sessions as of now)</li>
  <li>accounts: similar to testauth but with added rows relevant to the site</li>
  <li>art: stores all art and required info including coordinates</li>
  </ul>
  

<h1>TestAPI</h1>

In order to get more familiar with the code, we included a basic tool to test authentication.

There are three routes that are used, two being POST and one being a GET
  <ul>
  <h3>POST</h3>
  <li>testauth - used to store an account into the database, creates a JWT cookie, then creates a session which is stored in the sesssions table</li>
  <li>testsignin - verifies username and password, creates a JWT cookie (if it's not in the client's cookies), then makes a session(unless a session is in the DB already)</li>
  <h3>GET</h3>
  <li>getallart - querys DB to send all rows in the art table</li>
  </ul>
  
  in the test api, post requests should be in the form of a JSON object like to:
  
  ```
  {
    "username": "example_string",
    "password": "plaintext_string"
  }
  ```
  
  password will be encrypted in the backend before being stored into the DB so make sure to use simple passwords while testing
  
When logging in, errors relative to the error will be send back in the form of a json object (example):
```
{
  "error": "invalid username" 
}
```

When successfully logging in/creating an account, an object will be sent with the row of the new user as well as other extras relating to SQL

<h1>Important details</h1>

In the "productionAPI," some of the controllers look similar but behave differently

<h3>`queryController.testSignIn`</h3>

