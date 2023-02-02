-- DB scheme for ELRHistory 1.0
-- syntax is valid for PostgreSQL
-- last revision: 2023-02-02

BEGIN TRANSACTION;

DROP TABLE IF EXISTS "elrh_book";
DROP TABLE IF EXISTS "elrh_contact";
DROP TABLE IF EXISTS "elrh_link";
DROP TABLE IF EXISTS "elrh_news";
DROP TABLE IF EXISTS "elrh_image";
DROP TABLE IF EXISTS "elrh_article";
DROP TABLE IF EXISTS "elrh_gallery";
DROP TABLE IF EXISTS "elrh_category";
DROP TABLE IF EXISTS "elrh_author";
DROP TABLE IF EXISTS "elrh_text";

CREATE TABLE "elrh_article" (
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

CREATE TABLE "elrh_author" (
	"authorId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"email"	varchar(100) NOT NULL,
	"name"	varchar(50) NOT NULL
);

CREATE TABLE "elrh_book" (
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

CREATE TABLE "elrh_category" (
	"categoryId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"name"	varchar(50) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"type"	varchar(1) NOT NULL
);

CREATE TABLE "elrh_contact" (
	"contactId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"name"	varchar(50) NOT NULL,
	"email"	varchar(255) NOT NULL,
	"phone"	varchar(16) NOT NULL,
	"fb"	varchar(100) NOT NULL
);

CREATE TABLE "elrh_link" (
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

CREATE TABLE "elrh_news" (
	"newsId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"content"	text NOT NULL,
	"authorId"	integer NOT NULL,
	"dateCreated"	timestamp NOT NULL
);

CREATE TABLE "elrh_gallery" (
	"galleryId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"dateCreated"	timestamp NOT NULL,
	"dateEdited"	timestamp NOT NULL,
	"name"	varchar(50) NOT NULL,
	"dscr"	text,
	"authorId"	integer NOT NULL,
	"parentId"	integer
);

CREATE TABLE "elrh_image" (
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

CREATE TABLE "elrh_text" (
	"key"	text NOT NULL,
	"value"	text NOT NULL,
	PRIMARY KEY ("key")
);

ALTER TABLE "elrh_article" ADD CONSTRAINT "fk_article_author" FOREIGN KEY ("authorId") REFERENCES "elrh_author"("authorId");
ALTER TABLE "elrh_article" ADD CONSTRAINT "fk_article_category" FOREIGN KEY ("categoryId") REFERENCES "elrh_category"("categoryId");
ALTER TABLE "elrh_article" ADD CONSTRAINT "fk_article_gallery" FOREIGN KEY ("galleryId") REFERENCES "elrh_gallery"("galleryId");
ALTER TABLE "elrh_book" ADD CONSTRAINT "fk_book_author" FOREIGN KEY ("authorId") REFERENCES "elrh_author"("authorId");
ALTER TABLE "elrh_book" ADD CONSTRAINT "fk_book_category" FOREIGN KEY ("categoryId") REFERENCES "elrh_category"("categoryId");
ALTER TABLE "elrh_link" ADD CONSTRAINT "fk_link_author" FOREIGN KEY ("authorId") REFERENCES "elrh_author"("authorId");
ALTER TABLE "elrh_link" ADD CONSTRAINT "fk_link_category" FOREIGN KEY ("categoryId") REFERENCES "elrh_category"("categoryId");
ALTER TABLE "elrh_news" ADD CONSTRAINT "fk_news_author" FOREIGN KEY ("authorId") REFERENCES "elrh_author"("authorId");
ALTER TABLE "elrh_gallery" ADD CONSTRAINT "fk_gallery_parent" FOREIGN KEY ("parentId") REFERENCES "elrh_gallery"("galleryId");
ALTER TABLE "elrh_gallery" ADD CONSTRAINT "fk_gallery_author" FOREIGN KEY ("authorId") REFERENCES "elrh_author"("authorId");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_author" FOREIGN KEY ("authorId") REFERENCES "elrh_author"("authorId");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_gallery" FOREIGN KEY ("galleryId") REFERENCES "elrh_gallery"("galleryId");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_prev" FOREIGN KEY ("prevId") REFERENCES "elrh_image"("imageId");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_next" FOREIGN KEY ("nextId") REFERENCES "elrh_image"("imageId");

COMMIT;
