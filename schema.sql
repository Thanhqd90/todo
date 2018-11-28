-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS todolist;
-- Creates the "todolist" database --
CREATE DATABASE todolist;
USE todolist;
CREATE TABLE todo (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    todo VARCHAR(80) NOT NULL,
    accomplished BOOLEAN DEFAULT false,
    createdAt DATETIME,
    updatedAt DATETIME
);
INSERT INTO todo (todo, accomplished, createdAt, updatedAt) 
VALUES ('Make dinner', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO todo (todo, accomplished, createdAt, updatedAt) 
VALUES ('Dishes', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO todo (todo, accomplished, createdAt, updatedAt) 
VALUES ('Eat', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
