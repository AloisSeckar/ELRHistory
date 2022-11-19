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