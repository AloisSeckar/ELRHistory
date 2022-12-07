-- DB mock data for ELRHistory 1.0
-- use to populate your DB with some values for testing
-- last revision: 2022-12-07

INSERT INTO "elrh_author"("email", "name") VALUES ('alois.seckar@gmail.com', 'ELRHistory');

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
    (1, 1, now(), now(), 'Homepage', 'Link to my hompeage', 'http://alois-seckar.cz', 'link/01.jpg', 1),
    (1, 2, now(), now(), 'GitHub', 'Link to my github', 'https://github.com/AloisSeckar', 'link/02.jpg', 1);

    
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (1, 'Good books', 'Books I like', 'b');
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (2, 'Bad books', 'Books I dont like', 'b');

--TODO book data
--INSERT INTO "elrh_book" VALUES (1, 3, now(), now(),'Test book','Test author','Test description of the book','http://www.databazeknih.cz/knihy/130-let-zeleznicni-trate-nusle-modrany-1882-2012-195556','book/01.jpg',1,2,NULL,'2022');

INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (1, 'Good articles', 'Articles I like', 'a');
INSERT INTO "elrh_category"("ord", "name", "dscr", "type") VALUES (2, 'Bad articles', 'Articles I dont like', 'a');

-- TODO article data
--INSERT INTO "elrh_article" VALUES (1,now(), now(),'Brief cescription of the article','<p style="text-align: justify;">Carca carcaras narmo yénië aista talta móri sanyë ringil aulëonnar. Tollo ló wán nirwa. Emerwen voronda apanónar aini. Alasaila umpano ecet handa ampenda. Caila olor loita ngo. Nís yaxë tancil sarquindi hrón lenca mer tavaro nyellë. Ostar angamando cuivëa ilcorin uswevandë osamnar lohtë rinda. Yarra nápat oiencarmë ñona.</p>
--
--<p style="text-align: justify;">Ap avanwa vala cotya lor avánië valatar háno. Walmë laurë vilya orto oa andórë silmeráno vehtequentalë ahtar. Sil rambë orontë ambal cua ostoher funda. Vilissë cuivië lócë coa ossa lassë nótië tarmen. Emya hela palla langë nolwë ilumírë alamanya. Yunquesta irin atsa tihta lassecanta hrai nierwes.</p>
--
--<p style="text-align: justify;">Heldo urus ócom lótë sindë randa lohtë ilweran fárëa tancë. Orróna melin huiva lav mitya. Mandulómi quimellë cantil lunca minga. Túrëa sanya ertuilë antil mintya namma nahámë imbit cúma tuo finya melko. Nieninquëa singollo talas uinen vaiaro walta estel singwa voronda lepsë yúyal. Tangwa quentaro tyalangan hrón quesset nelci senna númëa orma mindo valto porë úfanwa. ósanwë lor coivienéni ettë lepecan marina. <a title="coivienéni ettë lepecan marina" href="http://google.com">coivienéni ettë lepecan marina</a>.</p>
--
--','article/01.jpg',1,5,null,'Test article title');

INSERT INTO "elrh_gallery" VALUES (1, now(), now(), '01 - Test gallery', 'Gallery contains some images and a sub-gallery', 1, null);
INSERT INTO "elrh_gallery" VALUES (2, now(), now(), 'Test sub-gallery', 'Gallery inside the main one', 1, 1);
INSERT INTO "elrh_gallery" VALUES (3, now(), now(), '02 - Test empty gallery', 'This one will contain no images, but it has long description,
so we can test the text trimming feature set to cut off descriptions longer than 200 characters in the main overview and only allow
to display them inside gallery detail.', 1, null);
INSERT INTO "elrh_gallery" VALUES (4, now(), now(), '03 - Test gallery with no dscr', null, 1, null);

-- TODO related article data
-- INSERT INTO "elrh_article" VALUES (2,now(), now(),'This article links to a gallery','<p style="text-align: justify;">Just a little mock text</p>','article/02.jpg',1,5,1,'Test article with gallery');

INSERT INTO "elrh_image" VALUES (1, now(), now(),'Image 01','This is a test image',1,'image/01.jpg',1,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (2, now(), now(),'Image 02','This is a test image',1,'image/02.jpg',1,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (3, now(), now(),'Image 03','This is a test image',1,'image/03.jpg',1,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (4, now(), now(),'Image 04','This is a test image',1,'image/04.jpg',1,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (5, now(), now(),'Image 05','This is a test image',1,'image/05.jpg',1,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (6, now(), now(),'Image 06','This is a test image',1,'image/06.jpg',1,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (7, now(), now(),'Image 07','This is a test image',1,'image/07.jpg',1,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (8, now(), now(),'Image 08','This is a test image',1,'image/08.jpg',1,1, NULL, NULL);

UPDATE "elrh_image" SET "next_id" = 2 WHERE "image_id" = 1;
UPDATE "elrh_image" SET "prev_id" = 1, "next_id" = 3 WHERE "image_id" = 2;
UPDATE "elrh_image" SET "prev_id" = 2, "next_id" = 4 WHERE "image_id" = 3;
UPDATE "elrh_image" SET "prev_id" = 3, "next_id" = 5 WHERE "image_id" = 4;
UPDATE "elrh_image" SET "prev_id" = 4, "next_id" = 6 WHERE "image_id" = 5;
UPDATE "elrh_image" SET "prev_id" = 5, "next_id" = 7 WHERE "image_id" = 6;
UPDATE "elrh_image" SET "prev_id" = 6, "next_id" = 8 WHERE "image_id" = 7;
UPDATE "elrh_image" SET "prev_id" = 7 WHERE "image_id" = 8;

INSERT INTO "elrh_image" VALUES (9, now(), now(),'Image 09','This is a test image',1,'image/09.jpg',2,1, NULL, NULL);
INSERT INTO "elrh_image" VALUES (10, now(), now(),'Image 10','This is a test image',1,'image/10.jpg',4,1, NULL, NULL);


INSERT INTO "elrh_text" VALUES ('welcome', 'This is a welcome text displayed on the index page.<br /><br />
It can be <strong>HTML <span style="color: red">formatted</span></strong>.');
