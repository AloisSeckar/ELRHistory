-- DB mock data for ELRHistory 1.0
-- use to populate your DB with some values for testing
-- last revision: 2022-11-19

INSERT INTO "elrh_author"("email", "name") VALUES ('alois.seckar@gmail.com', 'ELRHistory');

INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #1', 1, now() - INTERVAL '6 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #2', 1, now() - INTERVAL '5 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #3', 1, now() - INTERVAL '4 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #4', 1, now() - INTERVAL '3 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #5', 1, now() - INTERVAL '2 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #6', 1, now() - INTERVAL '1 hour');

INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (1, 'Good links', 'Links I like', 'l');
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (2, 'Bad links', 'Links I dont like', 'l');

INSERT INTO "elrh_link"("category_id", "ord", "date_created", "date_edited", "name", "dscr", "url", "thumb", "author_id") VALUES 
    (1, 1, now(), now(), 'Homepage', 'Link to my hompeage', 'http://alois-seckar.cz', 'link/01.jpg', 1),
    (1, 2, now(), now(), 'GitHub', 'Link to my github', 'https://github.com/AloisSeckar', 'link/02.jpg', 1);

    
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (1, 'Good books', 'Books I like', 'b');
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (2, 'Bad books', 'Books I dont like', 'b');

--TODO book data
--INSERT INTO "elrh_book" VALUES (1, 3, now(), now(),'Test book','Test author','Test description of the book','http://www.databazeknih.cz/knihy/130-let-zeleznicni-trate-nusle-modrany-1882-2012-195556','book/01.jpg',1,2,NULL,'2022');
