# NeoUsers - CRUD React Application

### Installation
- create react app
    - `npx create-react-app neo-users`
- install bootstrap
    - ``
- install react router V6
    - ``
- install JSON server for API
    - `npm install -g json-server`
- make db.json file
    - insert fake json data (here taken from jsonplaceholder.typicode/users)
- make changes in package.json file - put it in the scripts tag
    - `"json-server": "json-server --watch db.json --port 4000",`
- now to start json-server
    -  `npm run json-server`
    - this will run in port 4000 and we get our data in the route: /users

- to run our react app and our json server separately   
    - `npm run start` in one terminal - PORT 3000
    - `npm run json-server` in another terminal - PORT 4000

- to run our react app and json-server at the same time
    - we install Concurrently (a npm package) 
    - it helps us to run multiple commands concurrently
    - `npm install concurrently`
    - in package.json file in the scripts-tag
        - `"devStart": "concurrently \"npm run start\" \"npm run json-server\"",`
    - now to run both servers
    - `npm run devStart`

- 

