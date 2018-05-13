-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema cyclingdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cyclingdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cyclingdb` DEFAULT CHARACTER SET utf8 ;
USE `cyclingdb` ;

-- -----------------------------------------------------
-- Table `cyclingdb`.`cycling`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cyclingdb`.`cycling` ;

CREATE TABLE IF NOT EXISTS `cyclingdb`.`cycling` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `time` DECIMAL NULL,
  `date` DATE NULL,
  `distance` DECIMAL NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO cycling@localhost;
 DROP USER cycling@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'cycling'@'localhost' IDENTIFIED BY 'mycycling';

GRANT SELECT, INSERT, TRIGGER ON TABLE `cyclingdb`.* TO 'cycling'@'localhost';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `cyclingdb`.* TO 'cycling'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `cyclingdb`.`cycling`
-- -----------------------------------------------------
START TRANSACTION;
USE `cyclingdb`;
INSERT INTO `cyclingdb`.`cycling` (`id`, `time`, `date`, `distance`) VALUES (1, 1, '2018-05-01', 20);
INSERT INTO `cyclingdb`.`cycling` (`id`, `time`, `date`, `distance`) VALUES (2, 1, '2018-05-02', 20);
INSERT INTO `cyclingdb`.`cycling` (`id`, `time`, `date`, `distance`) VALUES (3, 0.5, '2018-05-03', 10);
INSERT INTO `cyclingdb`.`cycling` (`id`, `time`, `date`, `distance`) VALUES (4, 2, '2018-05-04', 30);
INSERT INTO `cyclingdb`.`cycling` (`id`, `time`, `date`, `distance`) VALUES (5, 3, '2018-05-05', 40);

COMMIT;
