--Don't need this sequelize builds db if not already there 
-- CREATE DATABASE IF NOT EXISTS adoptions_;
-- USE pets;


# Create the burgers table
CREATE TABLE adoptablepets (
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
sex enum('M','F') NOT NULL,
age integer NOT NULL,
size enum("small", "medium", "large") NOT NULL,
animal enum("dog", "cat") NOT NULL,
contact varchar(255) NOT NULL,
breeds varchar(255) NOT NULL,
media varchar(255) NOT NULL,
description text NOT NULL,
PRIMARY KEY (id)
);



