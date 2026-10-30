You'll need to create a `.env` file with the following vars:

```
# api
PROJECT_NAME=// Your Project name here
NODE_ENV=development
PORT=5000

# database
DB_NAME=// pick a db name
MONGO_INITDB_ROOT_USERNAME=// pick a username
MONGO_INITDB_ROOT_PASSWORD=// pick a password
MONGO_INITDB_DATABASE=forge_theater_labs
DATABASE_CONNECTION_STRING=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/${MONGO_INITDB_DATABASE}?authSource=admin

# jwt/0Auth
JWT_SECRET=// add a secret here
GOOGLE_CLIENT_ID=// add your google client ID here
GOOGLE_CLIENT_SECRET=// add your google client secret here
GOOGLE_REDIRECT_URI=http://127.0.0.1:5000/oauth

```
