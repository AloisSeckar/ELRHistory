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
--INSERT INTO "elrh_article" VALUES (1,now(), now(),'Brief cescription of the article','<p style="text-align: justify;">Carca carcaras narmo y??ni?? aista talta m??ri sany?? ringil aul??onnar. Tollo l?? w??n nirwa. Emerwen voronda apan??nar aini. Alasaila umpano ecet handa ampenda. Caila olor loita ngo. N??s yax?? tancil sarquindi hr??n lenca mer tavaro nyell??. Ostar angamando cuiv??a ilcorin uswevand?? osamnar loht?? rinda. Yarra n??pat oiencarm?? ??ona.</p>
--
--<p style="text-align: justify;">Ap avanwa vala cotya lor av??ni?? valatar h??no. Walm?? laur?? vilya orto oa and??r?? silmer??no vehtequental?? ahtar. Sil ramb?? oront?? ambal cua ostoher funda. Viliss?? cuivi?? l??c?? coa ossa lass?? n??ti?? tarmen. Emya hela palla lang?? nolw?? ilum??r?? alamanya. Yunquesta irin atsa tihta lassecanta hrai nierwes.</p>
--
--<p style="text-align: justify;">Heldo urus ??com l??t?? sind?? randa loht?? ilweran f??r??a tanc??. Orr??na melin huiva lav mitya. Mandul??mi quimell?? cantil lunca minga. T??r??a sanya ertuil?? antil mintya namma nah??m?? imbit c??ma tuo finya melko. Nieninqu??a singollo talas uinen vaiaro walta estel singwa voronda leps?? y??yal. Tangwa quentaro tyalangan hr??n quesset nelci senna n??m??a orma mindo valto por?? ??fanwa. ??sanw?? lor coivien??ni ett?? lepecan marina. <a title="coivien??ni ett?? lepecan marina" href="http://google.com">coivien??ni ett?? lepecan marina</a>.</p>
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


INSERT INTO "elrh_text" VALUES ('web-author', '<a href="http://alois-seckar.cz/">Alois Se??k??r</a>');

INSERT INTO "elrh_text" VALUES ('menu-index', 'Index');
INSERT INTO "elrh_text" VALUES ('menu-articles', 'Articles');
INSERT INTO "elrh_text" VALUES ('menu-galleries', 'Galleries');
INSERT INTO "elrh_text" VALUES ('menu-books', 'Books');
INSERT INTO "elrh_text" VALUES ('menu-links', 'Links');

INSERT INTO "elrh_text" VALUES ('index-welcome', 'This is a welcome text displayed on the index page.<br /><br />
It can be <strong>HTML <span style="color: red">formatted</span></strong>.');
INSERT INTO "elrh_text" VALUES ('index-about', 'About');
INSERT INTO "elrh_text" VALUES ('index-contacts', 'Contacts');
INSERT INTO "elrh_text" VALUES ('index-news', 'News');
INSERT INTO "elrh_text" VALUES ('index-news-all', 'All news');

INSERT INTO "elrh_text" VALUES ('articles-total', 'Total articles');

INSERT INTO "elrh_text" VALUES ('article-read', 'Read article');
INSERT INTO "elrh_text" VALUES ('article-gallery', 'View gallery');

INSERT INTO "elrh_text" VALUES ('galleries-total', 'Total galleries');

INSERT INTO "elrh_text" VALUES ('gallery-read-more', 'Read more...');
INSERT INTO "elrh_text" VALUES ('gallery-see-more', 'See more...');
INSERT INTO "elrh_text" VALUES ('gallery-images', 'Images in gallery:');
INSERT INTO "elrh_text" VALUES ('gallery-images-1', 'This gallery contains');
INSERT INTO "elrh_text" VALUES ('gallery-images-2', 'images in total');
INSERT INTO "elrh_text" VALUES ('gallery-images-none', 'This gallery has no images');
INSERT INTO "elrh_text" VALUES ('gallery-images-view', 'View gallery');
INSERT INTO "elrh_text" VALUES ('gallery-parent', 'Parent gallery:');
INSERT INTO "elrh_text" VALUES ('gallery-parent-index', 'Index');
INSERT INTO "elrh_text" VALUES ('gallery-sub', 'Sub-galleries:');
INSERT INTO "elrh_text" VALUES ('gallery-sub-none', 'No sub-galleries');
INSERT INTO "elrh_text" VALUES ('gallery-articles', 'Related articles:');
INSERT INTO "elrh_text" VALUES ('gallery-articles-none', 'No related articles');

INSERT INTO "elrh_text" VALUES ('images-total', 'Total images');

INSERT INTO "elrh_text" VALUES ('books-total', 'Total books');
INSERT INTO "elrh_text" VALUES ('books-none', 'No books yet');

INSERT INTO "elrh_text" VALUES ('book-review', 'Review');

INSERT INTO "elrh_text" VALUES ('links-total', 'Total links');
INSERT INTO "elrh_text" VALUES ('links-none', 'No links yet');

INSERT INTO "elrh_text" VALUES ('news-title', 'News');
INSERT INTO "elrh_text" VALUES ('news-total', 'Total news');
INSERT INTO "elrh_text" VALUES ('news-none', 'No news yet');

INSERT INTO "elrh_text" VALUES ('invalid-content', 'Data doesn''t exist or cannot be loaded');
INSERT INTO "elrh_text" VALUES ('invalid-article', 'Invalid article ID');
INSERT INTO "elrh_text" VALUES ('invalid-gallery', 'Invalid gallery ID');
INSERT INTO "elrh_text" VALUES ('invalid-image', 'Invalid image ID');
