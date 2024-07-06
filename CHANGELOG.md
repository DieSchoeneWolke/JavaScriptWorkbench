# Changelog

## 0.7.0

Released on TBD, 2024.

### Added
    - Security

Folder:
    - 

Files:
    - 

### Changed

Folder:
    - 

Files:
    - 

## 0.6.0

Released on TBD, 2024.

### Added
    - Shop

Folder:
    - 

Files:
    - 

### Changed

Folder:
    - 

Files:
    - 

## 0.5.1

Released on July 6, 2024.

### Added
    - Functionality to the `dotenv` module.
    - Compatibility with `Yarn`.
    - A `Docker Compose` template for a `MySQL` container.

Folder:
    - `/init`

Files:
    - `/yarn.lock`
    - `/docker-compose.yml`
    - `/init/01-databases.sql`

Packages:
    - `http-server` in `devDependencies`

### Changed
    - Versioning scheme to allow smaller additions.
    - `package.json` to include a Linux version of the installation script. 
	##### The command to start the scripts on Windows has been appended by `-win` e.g. `start-win`!
    - `README.md` with a proper introduction text and instructions to install the project.
    - `CHANGELOG.md` has improved wording and now includes the used `npm` packages.
    - The `api-dev` script in `package.json` now includes the argument `--trace-deprecation`.

Files:
    - `/src/db/db_user.js`
    - `/src/db/db_form.js`
    - `/src/server/app.js`
    - `/src/services/db_user.js`
    - `/src/services/db_form.js`

## 0.5.0

Released on June 19, 2024.

### Added
    - A user management system using an `HTML` table and forms connected to a `MySQL` database including a dynamic search function with the ability to add, update and remove users using the `Fetch API` in the browser.

Folder:
    - `/public/pages/user`

Files:
    - `/public/pages/user/adduser.html`
    - `/public/pages/user/dashboard.html`
    - `/public/pages/user/updateuser.html`
    - `/public/pages/scripts/adduser.js`
    - `/public/pages/scripts/dashboard.js`
    - `/public/pages/scripts/updateuser.js`
    - `/src/db/db_user.js`
    - `/src/routes/user.js`
    - `/src/services/db_user.js`
    - `/src/services/user.js`
    - `/public/assets/searchicon.png`

### Changed
    - `/stylesheet.css` to style the table, search bar and forms.
    - `/src/validations/user.validation.js` is now `/src/validations/uservalidation.js`.
    - `/public/pages/contact.html` is now `/public/pages/form.html`.
    - `/public/scripts/contact.js` is now `/public/scripts/form.js`.
    - `/src/db/db_connect.js` is now `/src/db/db_form.js`.
    - `/src/services/form.js` imports and message bodies.
    - `package.json` from not used Packages.
    - `/src/server/app.js` to include the user management system.
    - `/public/pages/promises.html` has an appropriate text now.
    - `/public/pages/functions.html` has an appropriate text now.
    - `/public/pages/control-flow.html` has an appropriate text now.
    - `/public/pages/classes` has an appropriate text now.

### Fixed
    - `/public/pages/arrays.html` had no reference to `/public/assets/favicon.ico`.
    - `/public/pages/control-flow.html` had no reference to `/public/assets/favicon.ico`.
    - `/public/pages/errors.html` had no reference to `/public/assets/favicon.ico`.
    - `/public/pages/functions.html` had no reference to `/public/assets/favicon.ico`.
    - `/public/pages/promises.html` had no reference to `/public/assets/favicon.ico`.

## 0.4.0

Released on June 12, 2024.

### Added
    - Implemented a logging system using `log4js`.

Folder:
    - `/src/public`
    - `/src/public/assets`
    - `/src/logging`
    - `/src/server`

Files:
    - `/src/logging/log4js.json`

Packages:
    - `log4js`

### Changed
    - Directory structure to a professional level.
    - Double quotes to single quotes where possible for less distraction in the code. If the user must be confronted with quotes in strings, double quotes are used for more attention.

Folder:
    - `/src/js/content` is now `/public/scripts`.
    - `/pages` is now `/public/pages`.
    - `/src/js/db` is now `/src/db`.
    - `/src/js/services` is now `/src/services`.
    - `/src/js/validations` is now `/src/validations`.
    - `/src/js/routes` is now `/src/routes`.
    
Files:
    - `/favicon.ico` is now `/public/assets/favicon.ico`.
    - `/index.html` is now `/public/index.html`.
    - `/stylesheet.css` is now `/public/stylesheet.css`.

## 0.3.0

Released on June 11, 2024.

### Added
    - A `MySQL` connection to store the contact form data from the`Fetch API` in a `MySQL` database.

Folder:
    - `/src/js/content/`
    - `/src/js/db/`
    - `/src/js/routes/`
    - `/src/js/services/`

Files:
    - `/src/js/db/db_connect.js`
    - `/src/js/db/helper.js`
    - `/src/js/db/.env`
    - `/src/js/routes/form.js`
    - `/src/js/services/db.js`
    - `/src/js/services/form.js`
   
Packages:
    - `mysql2`
    - `dotenv`

### Changed
    - `package.json` now includes combined scripts to start the environment easier.
    - The directory structure in which the `*.js` that are sourced in the pages are now located in `./src/js/content`.
    - The file `app.js` is now `home.js`.
    - The file `server.js` is `now app.js`.

## 0.2.0

Released on June 6, 2024.

### Added
    - Added a contact form that fetches the user input, validates it and routes it using the `Fetch API` in the browser.
    
Files:
    - `/pages/contact.html`
    - `/src/js/contact.js`
    - `/src/js/validations/user.validation.js`

Packages:
    - `cors`
    - `express`
    - `perfect-express-sanitizer`
    - `nodemon` in `devDependencies`

### Changed
    - Moved `*.js` files to a subfolder at path `/src/js/`.

## 0.1.0

Released on May 30, 2024.

### Added
    - A website with different `JavaScript` code blocks to interactively show case the opportunities of the language.

Files:
    - `/index.html`
    - `/favicon.ico`
    - `/package.json`
    - `/stylesheet.css`
    - `/pages/app.html`
    - `/pages/classes.html`
    - `/pages/control-flow.html`
    - `/pages/errors.html`
    - `/pages/functions.html`
    - `/pages/index.html`
    - `/pages/promises.html`
    - `/pages/server.html`
    - `/src/app.js`
    - `/src/classes.js`
    - `/src/control-flow.js`
    - `/src/errors.js`
    - `/src/functions.js`
    - `/src/index.js`
    - `/src/promises.js`
    - `/src/server.js`