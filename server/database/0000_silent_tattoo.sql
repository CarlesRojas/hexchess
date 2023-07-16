CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"rating" integer DEFAULT 1200 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
