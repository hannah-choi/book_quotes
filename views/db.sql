CREATE TABLE `bookquotes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(20) NOT NULL,
  `title` varchar(20) NOT NULL,
  `contents` text NOT NULL,
  `like` tinyint(1) DEFAULT '0',
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES (34, 'sdfsdf', 'asdasd', 'sdfsdfsdf', 0, null);
INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES (35, 'ㄴㄹㅎㄹㅎㅇ', 'ㅁㄴㅇㅁㄴㅇ', 'ㅁㅇㄹㅇㄴㅎㄴㅇㅎ', 1, null);
INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES (36, 'asdasdasd', 'dsfsdf', 'sfgdfgdfgdf', 0, null);
INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES (39, '88888', '99999', '777777', 0, null);
INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES (40, 'abcde', 'abcde', 'a

b











sdfdf', 0, null);
INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES (41, 'dfsdfsd', 'bcdeasd', 'asdasdasdasd', 0, '2020-08-19 20:46:03');