-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS todolist;
-- Creates the "todolist" database --
CREATE DATABASE todolist;

USE todolist;

-- Create the table
CREATE TABLE todo
(
id int NOT NULL AUTO_INCREMENT,
todo varchar(30) NOT NULL,
accomplished boolean NOT NULL,
createdAt TIMESTAMP,
updatedAt TIMESTAMP,
PRIMARY KEY (id)
);

SELECT * FROM todo;