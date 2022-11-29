-- DB scheme for ELRHistory 1.0
-- syntax is valid for PostgreSQL
-- last revision: 2022-11-19

BEGIN TRANSACTION;

DROP TABLE IF EXISTS "elrh_article";
CREATE TABLE "elrh_article" (
	"article_id"	SERIAL PRIMARY KEY,
	"category_id"	integer NOT NULL,
	"date_created"	timestamp NOT NULL,
	"date_edited"	timestamp NOT NULL,
	"name"	varchar(50) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"content"	text NOT NULL,
	"thumb"	varchar(100) NOT NULL,
	"author_id"	integer NOT NULL,
	"gallery_id"	integer
);

DROP TABLE IF EXISTS "elrh_author";
CREATE TABLE "elrh_author" (
	"author_id"	SERIAL PRIMARY KEY,
	"email"	varchar(100) NOT NULL,
	"name"	varchar(50) NOT NULL
);

DROP TABLE IF EXISTS "elrh_book";
CREATE TABLE "elrh_book" (
	"book_id"	SERIAL PRIMARY KEY,
	"category_id"	integer NOT NULL,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"date_created"	timestamp NOT NULL,
	"date_edited"	timestamp NOT NULL,
	"name"	varchar(100) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"url"	varchar(255) NOT NULL,
	"thumb"	varchar(100) NOT NULL,
	"author_id"	integer NOT NULL,
	"writer"	varchar(100) NOT NULL,
	"review"	varchar(255),
	"year"	varchar(4) NOT NULL
);

DROP TABLE IF EXISTS "elrh_category";
CREATE TABLE "elrh_category" (
	"category_id"	SERIAL PRIMARY KEY,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"name"	varchar(50) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"type"	varchar(1) NOT NULL
);

DROP TABLE IF EXISTS "elrh_link";
CREATE TABLE "elrh_link" (
	"link_id"	SERIAL PRIMARY KEY,
	"category_id"	integer NOT NULL,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"date_created"	timestamp NOT NULL,
	"date_edited"	timestamp NOT NULL,
	"name"	varchar(100) NOT NULL,
	"dscr"	varchar(255) NOT NULL,
	"url"	varchar(255) NOT NULL,
	"thumb"	varchar(100) NOT NULL,
	"author_id"	integer NOT NULL
);

DROP TABLE IF EXISTS "elrh_news";
CREATE TABLE "elrh_news" (
	"news_id"	SERIAL PRIMARY KEY,
	"content"	text NOT NULL,
	"author_id"	integer NOT NULL,
	"date_created"	timestamp NOT NULL
);

DROP TABLE IF EXISTS "elrh_gallery";
CREATE TABLE "elrh_gallery" (
	"gallery_id"	SERIAL PRIMARY KEY,
	"date_created"	timestamp NOT NULL,
	"date_edited"	timestamp NOT NULL,
	"name"	varchar(50) NOT NULL,
	"dscr"	text,
	"author_id"	integer NOT NULL,
	"parent_id"	integer
);

DROP TABLE IF EXISTS "elrh_image";
CREATE TABLE "elrh_image" (
	"image_id"	SERIAL PRIMARY KEY,
	"date_created"	timestamp NOT NULL,
	"date_edited"	timestamp NOT NULL,
	"name"	varchar(50) NOT NULL,
	"dscr"	text,
	"author_id"	integer NOT NULL,
	"image"	varchar(100) NOT NULL,
	"gallery_id"	integer NOT NULL,
	"ord"	integer NOT NULL CHECK("ord" >= 0),
	"prev_id"	integer,
	"next_id"	integer
);


ALTER TABLE "elrh_article" ADD CONSTRAINT "fk_article_author" FOREIGN KEY ("author_id") REFERENCES "elrh_author"("author_id");
ALTER TABLE "elrh_article" ADD CONSTRAINT "fk_article_category" FOREIGN KEY ("category_id") REFERENCES "elrh_category"("category_id");
ALTER TABLE "elrh_article" ADD CONSTRAINT "fk_article_gallery" FOREIGN KEY ("gallery_id") REFERENCES "elrh_gallery"("gallery_id");
ALTER TABLE "elrh_book" ADD CONSTRAINT "fk_book_author" FOREIGN KEY ("author_id") REFERENCES "elrh_author"("author_id");
ALTER TABLE "elrh_book" ADD CONSTRAINT "fk_book_category" FOREIGN KEY ("category_id") REFERENCES "elrh_category"("category_id");
ALTER TABLE "elrh_link" ADD CONSTRAINT "fk_link_author" FOREIGN KEY ("author_id") REFERENCES "elrh_author"("author_id");
ALTER TABLE "elrh_link" ADD CONSTRAINT "fk_link_category" FOREIGN KEY ("category_id") REFERENCES "elrh_category"("category_id");
ALTER TABLE "elrh_news" ADD CONSTRAINT "fk_news_author" FOREIGN KEY ("author_id") REFERENCES "elrh_author"("author_id");
ALTER TABLE "elrh_gallery" ADD CONSTRAINT "fk_gallery_parent" FOREIGN KEY ("parent_id") REFERENCES "elrh_gallery"("gallery_id");
ALTER TABLE "elrh_gallery" ADD CONSTRAINT "fk_gallery_author" FOREIGN KEY ("author_id") REFERENCES "elrh_author"("author_id");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_author" FOREIGN KEY ("author_id") REFERENCES "elrh_author"("author_id");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_gallery" FOREIGN KEY ("gallery_id") REFERENCES "elrh_gallery"("gallery_id");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_prev" FOREIGN KEY ("prev_id") REFERENCES "elrh_image"("image_id");
ALTER TABLE "elrh_image" ADD CONSTRAINT "fk_image_next" FOREIGN KEY ("next_id") REFERENCES "elrh_image"("image_id");

COMMIT;
