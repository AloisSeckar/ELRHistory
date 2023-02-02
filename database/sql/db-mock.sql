-- DB mock data for ELRHistory 1.0
-- use to populate your DB with some values for testing
-- last revision: 2023-02-02

INSERT INTO "elrh_author"("email", "name") VALUES ('alois.seckar@gmail.com', 'ELRHistory');
INSERT INTO "elrh_author"("email", "name") VALUES ('ellrohir@seznam.com', 'ELRHistory2');

INSERT INTO "elrh_contact"("name", "email", "phone", "fb") VALUES ('ELRHistory', 'alois.seckar@gmail.com', '123 456 789', 'https://www.facebook.com/');

INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #1', 1, now() - INTERVAL '6 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #2', 1, now() - INTERVAL '5 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #3', 1, now() - INTERVAL '4 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #4', 1, now() - INTERVAL '3 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #5', 1, now() - INTERVAL '2 hour');
INSERT INTO "elrh_news"("content", "author_id", "date_created") VALUES ('Test news #6', 1, now() - INTERVAL '1 hour');

INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (1, 'Good links', 'Links I like', 'l');
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (2, 'Bad links', 'Links I dont like', 'l');

INSERT INTO "elrh_link"("category_id", "ord", "date_created", "date_edited", "name", "dscr", "url", "thumb", "author_id") VALUES 
    (1, 1, now(), now(), 'Homepage', 'Link to my hompeage', 'http://alois-seckar.cz', '/link/01.jpg', 1),
    (1, 2, now(), now(), 'GitHub', 'Link to my github', 'https://github.com/AloisSeckar', '/link/02.jpg', 1);

    
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (1, 'Good books', 'Books I like', 'b');
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (2, 'Bad books', 'Books I dont like', 'b');

INSERT INTO "elrh_book"("category_id", "ord", "date_created", "date_edited", "writer", "name", "dscr", "url", "thumb", "review", "year", "author_id")
    VALUES (3, 1, now(), now(), 'Test author', 'Test book', 'Test description of the book', 'http://www.google.com', '/book/01.jpg', 'http://www.google.com', '2022', 1);

INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (1, 'Good articles', 'Articles I like', 'a');
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (2, 'Bad articles', 'Articles I dont like', 'a');

INSERT INTO "elrh_article"("category_id", "date_created", "date_edited", "name", "dscr", "content", "thumb", "author_id", "gallery_id") 
    VALUES (5, now(), now(),'Test article title', 'Brief cescription of the article',
'<p style="text-align: justify;">Carca carcaras narmo yénië aista talta móri sanyë ringil aulëonnar. Tollo ló wán nirwa. Emerwen voronda apanónar aini. Alasaila umpano ecet handa ampenda. Caila olor loita ngo. Nís yaxë tancil sarquindi hrón lenca mer tavaro nyellë. Ostar angamando cuivëa ilcorin uswevandë osamnar lohtë rinda. Yarra nápat oiencarmë ñona.</p>
<p style="text-align: justify;">Ap avanwa vala cotya lor avánië valatar háno. Walmë laurë vilya orto oa andórë silmeráno vehtequentalë ahtar. Sil rambë orontë ambal cua ostoher funda. Vilissë cuivië lócë coa ossa lassë nótië tarmen. Emya hela palla langë nolwë ilumírë alamanya. Yunquesta irin atsa tihta lassecanta hrai nierwes.</p>
<p style="text-align: justify;">Heldo urus ócom lótë sindë randa lohtë ilweran fárëa tancë. Orróna melin huiva lav mitya. Mandulómi quimellë cantil lunca minga. Túrëa sanya ertuilë antil mintya namma nahámë imbit cúma tuo finya melko. Nieninquëa singollo talas uinen vaiaro walta estel singwa voronda lepsë yúyal. Tangwa quentaro tyalangan hrón quesset nelci senna númëa orma mindo valto porë úfanwa. ósanwë lor coivienéni ettë lepecan marina. <a title="coivienéni ettë lepecan marina" href="http://google.com">coivienéni ettë lepecan marina</a>.</p>',
'/article/01.jpg', 1, null);

INSERT INTO "elrh_gallery"("date_created", "date_edited", "name", "dscr", "author_id", "parent_id") VALUES
     (now(), now(), '01 - Test gallery', 'Gallery contains some images and a sub-gallery', 1, null),
     (now(), now(), 'Test sub-gallery', 'Gallery inside the main one', 1, 1),
     (now(), now(), '02 - Test empty gallery', 'This one will contain no images, but it has long description,
so we can test the text trimming feature set to cut off descriptions longer than 200 characters in the main overview and only allow
to display them inside gallery detail.', 1, null),
    (now(), now(), '03 - Test gallery with no dscr', null, 1, null);

INSERT INTO "elrh_article"("category_id", "date_created", "date_edited", "name", "dscr", "content", "thumb", "author_id", "gallery_id") 
    VALUES (5, now(), now(), 'Test article with gallery', 'This article links to a gallery',
'<p style="text-align: justify;">Just a little mock text</p>', '/article/02.jpg', 1, 1);

INSERT INTO "elrh_image"("date_created", "date_edited", "name", "dscr", "author_id", "image", "gallery_id", "ord") VALUES 
    (now(), now(),'Image 01','This is a test image',1,'/image/01.jpg',1,1),
    (now(), now(),'Image 02','This is a test image',1,'/image/02.jpg',1,1),
    (now(), now(),'Image 03','This is a test image',1,'/image/03.jpg',1,1),
    (now(), now(),'Image 04','This is a test image',1,'/image/04.jpg',1,1),
    (now(), now(),'Image 05','This is a test image',1,'/image/05.jpg',1,1),
    (now(), now(),'Image 06','This is a test image',1,'/image/06.jpg',1,1),
    (now(), now(),'Image 07','This is a test image',1,'/image/07.jpg',1,1),
    (now(), now(),'Image 08','This is a test image',1,'/image/08.jpg',1,1);

UPDATE "elrh_image" SET "next_id" = 2 WHERE "image_id" = 1;
UPDATE "elrh_image" SET "prev_id" = 1, "next_id" = 3 WHERE "image_id" = 2;
UPDATE "elrh_image" SET "prev_id" = 2, "next_id" = 4 WHERE "image_id" = 3;
UPDATE "elrh_image" SET "prev_id" = 3, "next_id" = 5 WHERE "image_id" = 4;
UPDATE "elrh_image" SET "prev_id" = 4, "next_id" = 6 WHERE "image_id" = 5;
UPDATE "elrh_image" SET "prev_id" = 5, "next_id" = 7 WHERE "image_id" = 6;
UPDATE "elrh_image" SET "prev_id" = 6, "next_id" = 8 WHERE "image_id" = 7;
UPDATE "elrh_image" SET "prev_id" = 7 WHERE "image_id" = 8;

INSERT INTO "elrh_image"("date_created", "date_edited", "name", "dscr", "author_id", "image", "gallery_id", "ord") VALUES  
    (now(), now(),'Image 09','This is a test image',1,'/image/09.jpg',2,1),
    (now(), now(),'Image 10','This is a test image',1,'/image/10.jpg',4,1);
