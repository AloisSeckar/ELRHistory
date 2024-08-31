-- DB scheme for ELRHistory 1.0 - administration part
-- syntax is valid for PostgreSQL
-- last revision: 2024-08-31

BEGIN TRANSACTION;

-- setting config values
DROP TABLE IF EXISTS "elrhAdminConfig";

CREATE TABLE "elrhAdminConfig" (
	"configId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"config"	varchar(100) NOT NULL,
	"value"	text NOT NULL
);

INSERT INTO "elrhAdminConfig"("config", "value") VALUES ('webTitle', 'ELRHistory');
INSERT INTO "elrhAdminConfig"("config", "value") VALUES ('webAbout', 'This is a welcome text displayed on the index page.<br /><br />It can be <strong>HTML <span style="color: red">formatted</span></strong>.');
INSERT INTO "elrhAdminConfig"("config", "value") VALUES ('webAuthor', 'Alois Sečkár');
INSERT INTO "elrhAdminConfig"("config", "value") VALUES ('webLink', 'https://alois-seckar.cz/');
INSERT INTO "elrhAdminConfig"("config", "value") VALUES ('displayContacts', 'true');
INSERT INTO "elrhAdminConfig"("config", "value") VALUES ('displayNews', 'true');

-- enable/disable content sections
DROP TABLE IF EXISTS "elrhAdminPages";

CREATE TABLE "elrhAdminPages" (
	"pageId"	integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"page"	varchar(50) NOT NULL,
	"enabled"	boolean NOT NULL
);

INSERT INTO "elrhAdminPages"("page", "enabled") VALUES ('articles', true);
INSERT INTO "elrhAdminPages"("page", "enabled") VALUES ('books', true);
INSERT INTO "elrhAdminPages"("page", "enabled") VALUES ('gallery', true);
INSERT INTO "elrhAdminPages"("page", "enabled") VALUES ('links', true);
INSERT INTO "elrhAdminPages"("page", "enabled") VALUES ('timeline', true);
