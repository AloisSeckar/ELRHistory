-- DB mock data for ELRHistory 1.0
-- use to populate your DB with some values for testing
-- last revision: 2023-12-29

INSERT INTO "elrhAuthor"("email", "name") VALUES ('alois.seckar@gmail.com', 'ELRHistory');
INSERT INTO "elrhAuthor"("email", "name") VALUES ('ellrohir@seznam.com', 'ELRHistory2');

INSERT INTO "elrhContact"("name", "email", "phone", "fb") VALUES ('ELRHistory', 'alois.seckar@gmail.com', '123 456 789', 'https://www.facebook.com/');
INSERT INTO "elrhContact"("name", "email", "phone") VALUES ('ELRHistory2', 'alois.seckar@gmail.com', '987 654 321');

INSERT INTO "elrhNews"("dateCreated", "dateEdited", "title", "content", "authorId") VALUES (now() - INTERVAL '6 hour', now() - INTERVAL '6 hour', 'Test news #1', 'Some text of the news', 1);
INSERT INTO "elrhNews"("dateCreated", "dateEdited", "title", "content", "authorId") VALUES (now() - INTERVAL '5 hour', now() - INTERVAL '5 hour', 'Test news #2', 'Some text of the news', 1);
INSERT INTO "elrhNews"("dateCreated", "dateEdited", "title", "content", "authorId") VALUES (now() - INTERVAL '4 hour', now() - INTERVAL '4 hour', 'Test news #3', 'Some text of the news', 1);
INSERT INTO "elrhNews"("dateCreated", "dateEdited", "title", "content", "authorId") VALUES (now() - INTERVAL '3 hour', now() - INTERVAL '3 hour', 'Test news #4', 'Some text of the news', 2);
INSERT INTO "elrhNews"("dateCreated", "dateEdited", "title", "content", "authorId") VALUES (now() - INTERVAL '2 hour', now() - INTERVAL '2 hour', 'Test news #5', 'Some text of the news', 2);
INSERT INTO "elrhNews"("dateCreated", "dateEdited", "title", "content", "authorId") VALUES (now() - INTERVAL '1 hour', now() - INTERVAL '1 hour', 'Test news #6', 'Some text of the news', 2);

INSERT INTO "elrhCategory"("ord", "name", "dscr", "type") VALUES (1, 'Good links', 'Links I like', 'l');
INSERT INTO "elrhCategory"("ord", "name", "dscr", "type") VALUES (2, 'Bad links', 'Links I dont like', 'l');

INSERT INTO "elrhLink"("categoryId", "ord", "dateCreated", "dateEdited", "name", "dscr", "url", "thumb", "authorId") VALUES 
    (1, 1, now(), now(), 'Homepage', 'Link to my hompeage', 'http://alois-seckar.cz', '/link/01.jpg', 1),
    (1, 2, now(), now(), 'GitHub', 'Link to my github', 'https://github.com/AloisSeckar', '/link/02.jpg', 1);

    
INSERT INTO "elrhCategory"("ord", "name", "dscr", "type") VALUES (1, 'Good books', 'Books I like', 'b');
INSERT INTO "elrhCategory"("ord", "name", "dscr", "type") VALUES (2, 'Bad books', 'Books I dont like', 'b');

INSERT INTO "elrhBook"("categoryId", "ord", "dateCreated", "dateEdited", "writer", "name", "dscr", "url", "thumb", "review", "year", "authorId")
    VALUES (3, 1, now(), now(), 'Test author', 'Test book', 'Test description of the book', 'http://www.google.com', '/book/01.jpg', 'http://www.google.com', '2022', 1);

INSERT INTO "elrhCategory"("ord", "name", "dscr", "type") VALUES (1, 'Good articles', 'Articles I like', 'a');
INSERT INTO "elrhCategory"("ord", "name", "dscr", "type") VALUES (2, 'Bad articles', 'Articles I dont like', 'a');

INSERT INTO "elrhArticle"("categoryId", "dateCreated", "dateEdited", "name", "dscr", "content", "thumb", "authorId", "galleryId") 
    VALUES (5, now(), now(),'Test article title', 'Brief cescription of the article',
'<p style="text-align: justify;">Carca carcaras narmo yénië aista talta móri sanyë ringil aulëonnar. Tollo ló wán nirwa. Emerwen voronda apanónar aini. Alasaila umpano ecet handa ampenda. Caila olor loita ngo. Nís yaxë tancil sarquindi hrón lenca mer tavaro nyellë. Ostar angamando cuivëa ilcorin uswevandë osamnar lohtë rinda. Yarra nápat oiencarmë ñona.</p>
<p style="text-align: justify;">Ap avanwa vala cotya lor avánië valatar háno. Walmë laurë vilya orto oa andórë silmeráno vehtequentalë ahtar. Sil rambë orontë ambal cua ostoher funda. Vilissë cuivië lócë coa ossa lassë nótië tarmen. Emya hela palla langë nolwë ilumírë alamanya. Yunquesta irin atsa tihta lassecanta hrai nierwes.</p>
<p style="text-align: justify;">Heldo urus ócom lótë sindë randa lohtë ilweran fárëa tancë. Orróna melin huiva lav mitya. Mandulómi quimellë cantil lunca minga. Túrëa sanya ertuilë antil mintya namma nahámë imbit cúma tuo finya melko. Nieninquëa singollo talas uinen vaiaro walta estel singwa voronda lepsë yúyal. Tangwa quentaro tyalangan hrón quesset nelci senna númëa orma mindo valto porë úfanwa. ósanwë lor coivienéni ettë lepecan marina. <a title="coivienéni ettë lepecan marina" href="http://google.com">coivienéni ettë lepecan marina</a>.</p>',
'/article/01.jpg', 1, null);

INSERT INTO "elrhGallery"("dateCreated", "dateEdited", "name", "dscr", "authorId", "parentId") VALUES
     (now(), now(), '01 - Test gallery', 'Gallery contains some images and a sub-gallery', 1, null),
     (now(), now(), 'Test sub-gallery', 'Gallery inside the main one', 1, 1),
     (now(), now(), '02 - Test empty gallery', 'This one will contain no images, but it has long description,
so we can test the text trimming feature set to cut off descriptions longer than 200 characters in the main overview and only allow
to display them inside gallery detail.', 1, null),
    (now(), now(), '03 - Test gallery with no dscr', null, 1, null);

INSERT INTO "elrhArticle"("categoryId", "dateCreated", "dateEdited", "name", "dscr", "content", "thumb", "authorId", "galleryId") 
    VALUES (5, now(), now(), 'Test article with gallery', 'This article links to a gallery',
'<p style="text-align: justify;">Just a little mock text</p>', '/article/02.jpg', 1, 1);

INSERT INTO "elrhImage"("dateCreated", "dateEdited", "name", "dscr", "authorId", "image", "galleryId", "ord") VALUES 
    (now(), now(),'Image 01','This is a test image',1,'/image/01.jpg',1,1),
    (now(), now(),'Image 02','This is a test image',1,'/image/02.jpg',1,1),
    (now(), now(),'Image 03','This is a test image',1,'/image/03.jpg',1,1),
    (now(), now(),'Image 04','This is a test image',1,'/image/04.jpg',1,1),
    (now(), now(),'Image 05','This is a test image',1,'/image/05.jpg',1,1),
    (now(), now(),'Image 06','This is a test image',1,'/image/06.jpg',1,1),
    (now(), now(),'Image 07','This is a test image',1,'/image/07.jpg',1,1),
    (now(), now(),'Image 08','This is a test image',1,'/image/08.jpg',1,1);

UPDATE "elrhImage" SET "nextId" = 2 WHERE "imageId" = 1;
UPDATE "elrhImage" SET "prevId" = 1, "nextId" = 3 WHERE "imageId" = 2;
UPDATE "elrhImage" SET "prevId" = 2, "nextId" = 4 WHERE "imageId" = 3;
UPDATE "elrhImage" SET "prevId" = 3, "nextId" = 5 WHERE "imageId" = 4;
UPDATE "elrhImage" SET "prevId" = 4, "nextId" = 6 WHERE "imageId" = 5;
UPDATE "elrhImage" SET "prevId" = 5, "nextId" = 7 WHERE "imageId" = 6;
UPDATE "elrhImage" SET "prevId" = 6, "nextId" = 8 WHERE "imageId" = 7;
UPDATE "elrhImage" SET "prevId" = 7 WHERE "imageId" = 8;

INSERT INTO "elrhImage"("dateCreated", "dateEdited", "name", "dscr", "authorId", "image", "galleryId", "ord") VALUES  
    (now(), now(),'Image 09','This is a test image',1,'/image/09.jpg',2,1),
    (now(), now(),'Image 10','This is a test image',1,'/image/10.jpg',4,1);

INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2023', 'Event #01', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2022', 'Event #02', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2021', 'Event #03', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2020', 'Event #04', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2019', 'Event #05', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2018', 'Event #06', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2017', 'Event #07', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2016', 'Event #08', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2015', 'Event #09', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2014', 'Event #10', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2013', 'Event #11', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2012', 'Event #12', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2011', 'Event #13', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2010', 'Event #14', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2009', 'Event #15', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2008', 'Event #16', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2007', 'Event #17', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2006', 'Event #18', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2005', 'Event #19', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2004', 'Event #20', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2003', 'Event #21', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2002', 'Event #22', 'Text appearing on hover', 1);
INSERT INTO "elrhTimeline"("title", "content", "tooltip", "authorId") VALUES ('2001', 'Event #23', 'Text appearing on hover', 1);
