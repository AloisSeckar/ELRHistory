-- DB scheme for ELRHistory 1.0
-- syntax is valid for PostgreSQL
-- last revision: 2023-12-29

BEGIN TRANSACTION;

DROP TABLE IF EXISTS "elrhBook";
DROP TABLE IF EXISTS "elrhContact";
DROP TABLE IF EXISTS "elrhLink";
DROP TABLE IF EXISTS "elrhNews";
DROP TABLE IF EXISTS "elrhImage";
DROP TABLE IF EXISTS "elrhArticle";
DROP TABLE IF EXISTS "elrhGallery";
DROP TABLE IF EXISTS "elrhCategory";
DROP TABLE IF EXISTS "elrhAuthor";

CREATE TABLE "elrhArticle" (
	"articleId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"categoryId"	integer NOT NULL,
	"dateCreated"	timestamp NOT NULL,
	"dateEdited"	timestamp NOT NULL,
	"name"	varchar(50) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"content"	text NOT NULL,
	"thumb"	varchar(100) NOT NULL,
	"authorId"	integer NOT NULL,
	"galleryId"	integer
);

CREATE TABLE "elrhAuthor" (
	"authorId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"email"	varchar(100) NOT NULL,
	"name"	varchar(50) NOT NULL
);

CREATE TABLE "elrhBook" (
	"bookId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"categoryId"	integer NOT NULL,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"dateCreated"	timestamp NOT NULL,
	"dateEdited"	timestamp NOT NULL,
	"writer"	varchar(100) NOT NULL,
	"name"	varchar(100) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"url"	varchar(255) NOT NULL,
	"thumb"	varchar(100) NOT NULL,
	"review"	varchar(255),
	"year"	varchar(4) NOT NULL,
	"authorId"	integer NOT NULL
);

CREATE TABLE "elrhCategory" (
	"categoryId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"name"	varchar(50) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"type"	varchar(1) NOT NULL
);

CREATE TABLE "elrhContact" (
	"contactId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"name"	varchar(50) NOT NULL,
	"email"	varchar(255) NOT NULL,
	"phone"	varchar(16) NOT NULL,
	"fb"	varchar(100)
);

CREATE TABLE "elrhLink" (
	"linkId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"categoryId"	integer NOT NULL,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"dateCreated"	timestamp NOT NULL,
	"dateEdited"	timestamp NOT NULL,
	"name"	varchar(100) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"url"	varchar(255) NOT NULL,
	"thumb"	varchar(100) NOT NULL,
	"authorId"	integer NOT NULL
);

CREATE TABLE "elrhNews" (
	"newsId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"dateCreated"	timestamp NOT NULL,
	"dateEdited"	timestamp NOT NULL,
	"title"	varchar(100) NOT NULL,
	"content"	text NOT NULL,
	"authorId"	integer NOT NULL
);

CREATE TABLE "elrhGallery" (
	"galleryId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"dateCreated"	timestamp NOT NULL,
	"dateEdited"	timestamp NOT NULL,
	"name"	varchar(50) NOT NULL,
	"dscr"	text,
	"authorId"	integer NOT NULL,
	"parentId"	integer
);

CREATE TABLE "elrhImage" (
	"imageId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"dateCreated"	timestamp NOT NULL,
	"dateEdited"	timestamp NOT NULL,
	"name"	varchar(50) NOT NULL,
	"dscr"	text,
	"authorId"	integer NOT NULL,
	"image"	varchar(100) NOT NULL,
	"galleryId"	integer NOT NULL,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"prevId"	integer,
	"nextId"	integer
);

CREATE TABLE "elrhTimeline" (
	"timelineId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"title"	varchar(100) NOT NULL,
	"content"	varchar(255) NOT NULL,
	"tooltip"	text,
	"authorId"	integer NOT NULL
);

ALTER TABLE "elrhArticle" ADD CONSTRAINT "fk_article_author" FOREIGN KEY ("authorId") REFERENCES "elrhAuthor"("authorId");
ALTER TABLE "elrhArticle" ADD CONSTRAINT "fk_article_category" FOREIGN KEY ("categoryId") REFERENCES "elrhCategory"("categoryId");
ALTER TABLE "elrhArticle" ADD CONSTRAINT "fk_article_gallery" FOREIGN KEY ("galleryId") REFERENCES "elrhGallery"("galleryId");
ALTER TABLE "elrhBook" ADD CONSTRAINT "fk_book_author" FOREIGN KEY ("authorId") REFERENCES "elrhAuthor"("authorId");
ALTER TABLE "elrhBook" ADD CONSTRAINT "fk_book_category" FOREIGN KEY ("categoryId") REFERENCES "elrhCategory"("categoryId");
ALTER TABLE "elrhLink" ADD CONSTRAINT "fk_link_author" FOREIGN KEY ("authorId") REFERENCES "elrhAuthor"("authorId");
ALTER TABLE "elrhLink" ADD CONSTRAINT "fk_link_category" FOREIGN KEY ("categoryId") REFERENCES "elrhCategory"("categoryId");
ALTER TABLE "elrhNews" ADD CONSTRAINT "fk_news_author" FOREIGN KEY ("authorId") REFERENCES "elrhAuthor"("authorId");
ALTER TABLE "elrhGallery" ADD CONSTRAINT "fk_gallery_parent" FOREIGN KEY ("parentId") REFERENCES "elrhGallery"("galleryId");
ALTER TABLE "elrhGallery" ADD CONSTRAINT "fk_gallery_author" FOREIGN KEY ("authorId") REFERENCES "elrhAuthor"("authorId");
ALTER TABLE "elrhImage" ADD CONSTRAINT "fk_image_author" FOREIGN KEY ("authorId") REFERENCES "elrhAuthor"("authorId");
ALTER TABLE "elrhImage" ADD CONSTRAINT "fk_image_gallery" FOREIGN KEY ("galleryId") REFERENCES "elrhGallery"("galleryId");
ALTER TABLE "elrhImage" ADD CONSTRAINT "fk_image_prev" FOREIGN KEY ("prevId") REFERENCES "elrhImage"("imageId");
ALTER TABLE "elrhImage" ADD CONSTRAINT "fk_image_next" FOREIGN KEY ("nextId") REFERENCES "elrhImage"("imageId");
ALTER TABLE "elrhTimeline" ADD CONSTRAINT "fk_timeline_author" FOREIGN KEY ("authorId") REFERENCES "elrhAuthor"("authorId");

COMMIT;
