import type { definitions } from './_api';

export type Article = definitions['elrh_article'] & {
	elrh_author?: Pick<Author, 'author_id' | 'name'>;
	elrh_category?: Pick<Category, 'category_id' | 'name'>;
	elrh_gallery?: Pick<Gallery, 'gallery_id' | 'name'>;
}
export type ArticleDB = Omit<Article, 'article_id'>

export type Author = definitions['elrh_author'];

export type Book = definitions['elrh_book'] & {
	elrh_author: Author;
	elrh_category: Category;
}

export type Category = definitions['elrh_category'];

export type Contact = definitions['elrh_contact'];

export type Gallery = definitions['elrh_gallery'] & {
	elrh_article?: Article[];
	elrh_author: Author;
	parent_id?: Gallery;
}

export type Image = definitions['elrh_image'] & {
	elrh_author: Author;
	gallery_id: Gallery;
}

export type Link = definitions['elrh_link'] & {
	elrh_author: Author;
	elrh_category: Category;
}

export type News = definitions['elrh_news'] & {
	elrh_author: Author;
}

export type Text = definitions['elrh_text'];
