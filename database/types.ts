import type { definitions } from './_api'

export type Category = definitions['elrhCategory'];
export type Author = definitions['elrhAuthor'];

export type ArticleRaw = definitions['elrhArticle'];
export type ArticleDB = Omit<ArticleRaw, 'articleId'>
export type Article = ArticleRaw & {
  elrhAuthor?: Pick<Author, 'authorId' | 'name'>;
  elrhCategory?: Pick<Category, 'categoryId' | 'name'>;
  elrhGallery?: Pick<Gallery, 'galleryId' | 'name'>;
}

export type Book = definitions['elrhBook'] & {
  elrhAuthor: Author;
  elrhCategory: Category;
}

export type Contact = definitions['elrhContact'];

export type Gallery = definitions['elrhGallery'] & {
  elrhArticle?: Article[];
  elrhAuthor: Author;
  parentId?: Gallery;
}

export type Image = definitions['elrhImage'] & {
  elrhAuthor: Author;
  galleryId: Gallery;
}

export type Link = definitions['elrhLink'] & {
  elrhAuthor: Author;
  elrhCategory: Category;
}

export type News = definitions['elrhNews'] & {
  elrhAuthor: Author;
}

export type Text = definitions['elrhText'];
