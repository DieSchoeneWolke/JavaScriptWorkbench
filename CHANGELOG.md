# Changelog

## 0.0.7

Released on June TBD, 2024.

### Added
* Fourth version of the project
    - Security

Folder:
    - 

Files:
    - 

### Changed
    - 

## 0.0.6

Released on June TBD, 2024.

### Added
* Fourth version of the project
    - Shop

Folder:
    - 

Files:
    - 

### Changed
    - 

## 0.0.5

Released on June 19, 2024.


### Added
* Fourth version of the project
    - User management system using an HTML table and forms connected to a MySQL database including a dynamic search function with adding and updating user functionality using the `Fetch API`.

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
    - `/stylesheet.css` to style the table, search bar and forms
    - `/src/validations/user.validation.js` is now `/src/validations/uservalidation.js`
    - `/public/pages/contact.html` is now `/public/pages/form.html`
    - `/public/scripts/contact.js` is now `/public/scripts/form.js`
    - `/src/db/db_connect.js` is now `/src/db/db_form.js`
    - `/src/services/form.js` imports and message bodies
    - `package.json` from not used packages
    - `/src/server/app.js` to include the user management system
    - `/public/pages/promises.html` has an appropriate text now
    - `/public/pages/functions.html` has an appropriate text now
    - `/public/pages/control-flow.html` has an appropriate text now
    - `/public/pages/classes` has an appropriate text now

### Fixed
    - `/public/pages/arrays.html` had no reference to `/public/assets/favicon.ico`
    - `/public/pages/control-flow.html` had no reference to `/public/assets/favicon.ico`
    - `/public/pages/errors.html` had no reference to `/public/assets/favicon.ico`
    - `/public/pages/functions.html` had no reference to `/public/assets/favicon.ico`
    - `/public/pages/promises.html` had no reference to `/public/assets/favicon.ico`

## 0.0.4

Released on June 12, 2024.

### Added
* Fourth version of the project
    - Implemented a logging system using log4js.

Folder:
    - `/src/public`
    - `/src/public/assets`
    - `/src/logging`
    - `/src/server`

Files:
    - `/src/logging/log4js.json`

### Changed
    - Directory structure to a professional level.
    - Double quotes to single quotes where possible for less distraction in the code. If the user must be confronted with quotes in strings, double quotes are used for more attention.

Folder:
    - `/src/js/content` is now `/public/scripts`
    - `/pages` is now `/public/pages`
    - `/src/js/db` is now `/src/db`
    - `/src/js/services` is now `/src/services`
    - `/src/js/validations` is now `/src/validations`
    - `/src/js/routes` is now `/src/routes`
    
Files:
    - `/favicon.ico` is now `/public/assets/favicon.ico`
    - `/index.html` is now `/public/index.html`
    - `/stylesheet.css` is now `/public/stylesheet.css`
    - `/package.json` includes the npm module `log4js`

## 0.0.3

Released on June 11, 2024.

### Added
* Third version of the project
    - Contact form data coming from the API is now stored in a MySQL database.

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
   

### Changed
    - `package.json` now includes combined scripts to start the environment easier.
    - The directory structure in which the `*.js` that are sourced in the pages are now located in `./src/js/content`.
    - The file `app.js` is now `home.js`.
    - The file `server.js` is `now app.js`.

## 0.0.2

Released on June 6, 2024.

### Added
* Second version of the project
    - Added a Contact Form that fetches the user input, validates it and routes it through an API.
    
Files:
    - `/pages/contact.html`
    - `/src/js/contact.js`
    - `/src/js/validations/user.validation.js`

### Changed
    - Moved `*.js` files to a subfolder at path `/src/js/`

## 0.0.1

Released on May 30, 2024.

### Added

* First version of the project

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