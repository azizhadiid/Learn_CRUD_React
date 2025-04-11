CREATE DATABASE IF NOT EXISTS test_crud;
USE test_crud;

CREATE TABLE `test_crud`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  `cover` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `test_crud`.`books` (`id`, `title`, `desc`, `cover`) VALUES ('1', 'test title', 'desc', 'cover.png');
