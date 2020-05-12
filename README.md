# Coffe Ordering System
This is a serverside api for coffee ordering built with [node] and using the [express] framework.
See [client] for the frontend. 

## Insallation
Prerequisite: mysql-server installed either locally or hosted online

Create the mysql database used by server locally:
```sh
echo "CREATE DATABASE [your-database-name]" | mysql -uroot
```

From the top-level repository folder:
```sh
$ npm install
$ npm start
```
For hot reload on server when saving file, install [nodemon](https://www.npmjs.com/package/nodemon):
```sh
$ npm install --save-dev nodemon
```
...then run the following from the top-level repository (script in `package.json`):
```sh
$ npm run dev
```

## Setting environment variables:

Create a `dev.env`-file located at the top-level repository (remeber to ignore this in the `.gitignore`-file). Advise using [env-cmd](https://www.npmjs.com/package/env-cmd), a simple program for executing commands using an environment from an env file.


- `PORT` specifies the port when in devolopment enviornment for `localhost`
- `JWT_SECRET` specifies the string to hash the passwords saved in the database
- `TEST_EMAIL` specifies the account the mails are sent from
- `TEST_PWD` specifies the password for the gmail account
- `DB_HOST` specifies the host for the database
- `DB_USER` specifies the database username
- `DB_NAME` specifies the name of the actual database
- `DB_PASSWORD` specifies the password for the database
- `TEST_HOST` specifies the host of your mail, ex.: smtp.gmail.com
- `TEST_PORT` specifies the port
- `TEST_ORIGIN` specifies the origin that the server allowes

Following are the `key:value` pairs to fill in the file (remember no spaces):
```sh
PORT=
JWT_SECRET=
TEST_EMAIL=
TEST_PWD=
DB_HOST=
DB_USER=
DB_NAME=
DB_PASSWORD=
TEST_HOST=
TEST_PORT=
TEST_ORIGIN=
```

## Open application
http://localhost:PORT

## License
[MIT](LICENSE)

[//]: #
[node]: <http://nodejs.org>
[express]: <http://expressjs.com>
[client]: <https://github.com/mari-dot-tj/cos-client>
