DROP DATABASE IF EXISTS `meal-sharing`;
CREATE DATABASE `meal-sharing`;
USE `meal-sharing`;

DROP TABLE IF EXISTS `meal`;
CREATE TABLE `meal` (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(80) NOT NULL,
  description varchar(255) DEFAULT '',
  location varchar (255) NOT NULL,
  meal_date datetime NOT NULL,
  max_reservations int DEFAULT 2,
  price decimal DEFAULT 1,
  created_date date NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE `reservation` (
  id int NOT NULL AUTO_INCREMENT,
  number_of_guests int DEFAULT 1,
  created_date date NOT NULL,
  contact_phonenumber varchar(20) NOT NULL,
  contact_name varchar(255) NOT NULL,
  contact_email varchar(255) NOT NULL,
  meal_id int NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_reservation_to_meal FOREIGN KEY (meal_id) REFERENCES meal(id)
);

DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(80) NOT NULL,
  description text NOT NULL,
  stars int DEFAULT 1,
  created_date date NOT NULL,
  meal_id int NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_review_to_meal FOREIGN KEY (meal_id) REFERENCES meal(id)
);

LOCK TABLES `meal` WRITE, `reservation` WRITE, `review` WRITE;

INSERT INTO `meal` (`title`, `description`, `location`, `meal_date`, `max_reservations`, `price`, `created_date`)
VALUES 
  ('Homemade carbonara', 'My wife makes the best carbonara, come try it!', 'My home', date_add(now(), INTERVAL 7 DAY), 4, 0, current_date()),
  ('Zucchini and bacon pasta', 'Great and simple comfort food to make you healthy', 'My home', date_add(now(), INTERVAL 14 DAY), 6, 0, current_date()),
  ('Swedish tacos', 'Nothing says Sweden like tacos, am I right?', 'My home', date_add(now(), INTERVAL 21 DAY), 8, 0, current_date());

INSERT INTO `reservation` (`number_of_guests`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`, `meal_id`)
VALUES 
  (2, current_date(), '+336 12 83 81 45', 'Milton', 'milton.hultgren@elastic.co', 1),
  (2, current_date(), '+336 12 83 81 45', 'Milton', 'milton.hultgren@elastic.co', 2),
  (2, current_date(), '+336 12 83 81 45', 'Milton', 'milton.hultgren@elastic.co', 3);

INSERT INTO `review` (`title`, `description`, `stars`, `created_date`, `meal_id`)
VALUES 
  ('I love this carbonara', 'If I was stuck on an island and could only choose one meal to eat until I die, I would pick this.', 5, current_date(), 1),
  ('Feeling healthier already', 'The zucchini pieces were just the right size and crispy, the tomato sauce very sweet and you can sense the bacon flavor in the background.', 4, current_date(), 2),
  ('My belly is exploding', 'I did not expect this when I heard Swedish tacos, it was messy but very tasty!', 4, current_date(), 3);

UNLOCK TABLES;
