# JavaScript Workbench

## This repository contains sample projects for learning front-end and back-end JavaScript.

### Prerequisites

#### `Node.js` with `npm` or `Yarn`

Refer to the [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on how to install `Node.js` and `npm`.

My personal setup on `GNU/Linux` involves using [mise](https://mise.jdx.dev/getting-started.html) with the LTS version of `Node.js` and `Yarn`:

```
mise use -g node@lts
mise use -g yarn
```

On `Windows` I use [nvm-for-windows](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12) with the LTS version of `Node.js`:

```
nvm install lts && nvm use lts
```

The instructions for installing `Yarn` on `Windows` or without `mise` on `GNU/Linux` can be found [here](https://yarnpkg.com/getting-started/install).
Note: You may run into permission issues if you are using the **official** `Node.js` installer on `Windows` and want to use `Yarn`! You may also want to remove the `package-lock.json` file from the root directory of the project if you tend to use `Yarn` on any operating system.

#### `MySQL`

This project is using the `MySQL Community Server 8.4.1 LTS`.
Read the official instructions on how to install and configure `MySQL` for your operating system [here](https://dev.mysql.com/doc/refman/8.4/en/installing.html).
Alternatively you can run `MySQL` in a `Docker` container using the provided `docker-compose.yml` in the root directory of this project.
I recommend using [DBeaver](https://dbeaver.com/docs/dbeaver/Getting-started/) as a free cross-platform GUI tool to work with many databases!

The `form` database is created using the following SQL Query, which is not necessary when you are using the provided `docker-compose.yml`:

`` CREATE DATABASE IF NOT EXISTS `form`; ``

Create the `form` table in the `form` database:

```
CREATE TABLE form.form (
    id INT PRIMARY KEY,
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(100),
    department VARCHAR(50),
    subject VARCHAR(100)
);
```

Insert some sample data into the `form` table:

```
INSERT INTO form.form (id, fname, lname, email, department, subject)
VALUES (1, 'Maria', 'Fisher', 'mariafisher@example.com', 'sales', 'Inquiry about your services');
```

The `user` database is created using the following SQL Query, which is not necessary when you are using the provided `docker-compose.yml`:

`` CREATE DATABASE IF NOT EXISTS `user`; ``

Create the `user` table in the `user` database:

```
CREATE TABLE user.user (
    id INT PRIMARY KEY,
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(100),
    department VARCHAR(50)
);
```

Insert some sample data into the `user` table:

```
INSERT INTO user.user (id, fname, lname, email, department)
VALUES (1, 'James', 'Smith', 'jamessmith@example.com', 'hr');
```

You will also need to create an `.env` file in the root directory of this project with the following key-value pairs:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=!1234567890-The-Password-You-Decided-To-Choose-While-Creating-The-Database-?0987654321
DB_1=form
DB_2=user
```

### Installation

#### GNU/Linux

- Clone the repository and change the current working directory in the terminal to it and install the dependencies with `npm i` or `yarn install`.

- After successful installation run the startup script with `npm run start` or `yarn run start`.

- To hack on the project you may want to install the development dependencies with `npm i --include=dev` or `yarn install --include=dev` and then execute the script with `npm run start-dev` or `yarn run start-dev`.

#### Windows

- Clone the repository, change the current working directory in `Powershell` or the `Command Prompt` to it and install the dependencies with `npm i` or `yarn install`.

- After successful installation run the startup script with `npm run start-win` or `yarn run start-win`.

- To hack on the project you may want to install the development dependencies with `npm i --include=dev` or `yarn install --include=dev` and then execute the script with `npm run start-dev-win` or `yarn run start-dev-win`.
