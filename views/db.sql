CREATE TABLE `bookquotes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(30) NOT NULL,
  `title` varchar(60) NOT NULL,
  `contents` text NOT NULL,
  `like` tinyint(1) DEFAULT '0',
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES
(42, 'John Edward Williams', 'Stoner', '“Nothing had changed. Their lives had been expended in the cheerless labor, their wills broken, their intelligences numbed. Now they were in the earth to which they had given their lives; and slowly, year by year, the earth would take them. Slowly the damp and rot would infest the pine boxes which held their bodies, and slowly it would touch their flesh and finally it would consume the last vestiges of their substances. And they would become a meaningless part of that stubborn earth to which they had long ago given themselves.”

“The love of literature, of language, of the mystery of the mind and heart showing themselves in the minute, strange, and unexpected combinations of letters and words, in the blackest and coldest print—the love which he had hidden as if it were illicit and dangerous, he began to display, tentatively at first, and then boldly, and then proudly.”

”As he worked on the room, and as it began slowly to take a shape, he realized that for many years, unknown to himself, he had had an image locked somewhere within him like a shamed secret, an image that was ostensibly of a place but which was actually of himself. So it was himself that he was attempting to define as he worked on his study. As he sanded the old boards for his bookcases, and saw the surface roughnesses disappear, the gray weathering flake away to the essential wood and finally to a rich purity of grain and texture—as he repaired his furniture and arranged it in the room, it was himself that he was slowly shaping, it was himself that he was putting into a kind of order, it was himself that he was making possible.”', 1, '2020-08-20 14:06:52'),
(44, 'Alice Munro', 'Hateship, Friendship, Courtship, Loveship, Marriage', '
“She got the box open and put her hand into the cooling ashes and tossed or dropped them—with other tiny recalcitrant bits of the body—among those roadside plants. Doing this was like wading and then throwing yourself into the lake for the first icy swim, in June. A sickening shock at first, then amazement that you were still moving, lifted up on a stream of steely devotion—calm above the surface of your life, surviving, though the pain of the cold continued to wash into your body.”

“There was a danger whenever I was on home ground. It was the danger of seeing my life through other eyes than my own.
Seeing it as an ever-increasing roll of words like barbed wire, intricate, bewildering, uncomforting—set against the rich productions, the food, flowers, and knitted garments, of other women’s domesticity. It became harder to say that it was worth the trouble.”

“In my feelings for Mike the localized demon was transformed into a diffuse excitement and tenderness spread everywhere under the skin, a pleasure of the eyes and ears and a tingling contentment, in the presence of the other person.”', 1, '2020-08-20 14:10:56'),
(45, 'Chimamanda Ngozi Adichie', 'Americanah', '“The world was wrapped in gauze; she could see the shapes of things but not clearly enough, never enough. She told Obinze that there were things she should know how to do, but didn’t, details she should have corralled into her space but hadn’t.”

“He was already looking at their relationship through the lens of the past tense. It puzzled her, the ability of romantic love to mutate, how quickly a loved one could become a stranger. Where did the love go? Perhaps real love was familial, somehow, linked to blood, since love for children did not die as romantic love did.”', 0, '2020-08-20 14:12:21');











sdfdf', 0, null);
INSERT INTO study.bookquotes (id, author, title, contents, `like`, date) VALUES (41, 'dfsdfsd', 'bcdeasd', 'asdasdasdasd', 0, '2020-08-19 20:46:03');