CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(30),
    DEVOURED BOOLEAN NOT NULL default 0,
    PRIMARY KEY (id)
)