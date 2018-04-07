# Top Five Web App

### Summary
Node/React web app for Top Five

## Local deploy
Add 'secrets.js' file to the server directory with the following formate:
```
const secrets = {};

secrets.spotify = {
  clientId: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
};

export default secrets
```

### Run it
To run this app follow these steps:
* From the root directory:
  * Run ```npm run build:client```
  * Run ```npm run build:server```
  * Run ```npm start```
* Navigate to the appropriate port on localhost

### Dev it
To run this app in dev-mode (i.e. hot loading changes to client and server) follow these steps:
* From the root directory:
  * Run ```npm run build:client:dev```
  * Run ```npm run build:server:dev```
  * Run ```npm run start:dev```
* Navigate to the appropriate port on localhost
