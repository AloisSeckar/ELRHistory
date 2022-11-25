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

INSERT INTO "elrh_gallery" VALUES (1, now(), now(), 'Test gallery', 'Gallery contains some images and a sub-gallery', 1, null);
INSERT INTO "elrh_gallery" VALUES (2, now(), now(), 'Test sub-gallery', 'Gallery inside the main one', 1, 1);
INSERT INTO "elrh_gallery" VALUES (3, now(), now(), 'Test empty gallery', 'This one will contain no images', 1, null);