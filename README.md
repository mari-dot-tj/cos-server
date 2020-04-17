# Coffe Ordering System
This is a serverside api for coffee ordering built with [node] and using the [express] framework. 

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
- `TEST_EMAIL` specifies the gmail account the mails are sent from
- `TEST_PWD` specifies the password for the gmail account
- `DB_HOST` specifies the host for the database
- `DB_USER` specifies the database username
- `DB_NAME` specifies the name of the actual database
- `DB_PASSWORD` specifies the password for the database
- `TEST_SERVICE` specifies the service your use for nodemailer (here gmail)

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
TEST_SERVICE=
```

## Open application
http://localhost:PORT

## License
[MIT](LICENSE)

[//]: #
[node]: <http://nodejs.org>
[express]: <http://expressjs.com>

Copyright 2020 Mari Teiler-Johnsen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.