# create databases
CREATE DATABASE IF NOT EXISTS `form`;
CREATE DATABASE IF NOT EXISTS `user`;

# create root user and grant rights
CREATE USER 'root'@'localhost' IDENTIFIED BY 'local';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
