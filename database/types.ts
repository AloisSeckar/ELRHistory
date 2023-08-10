import type { definitions } from './_api'

export type ArticleRaw = definitions['elrhArticle']
export type BookRaw = definitions['elrhBook']
export type GalleryRaw = definitions['elrhGallery']
export type NewsRaw = definitions['elrhNews']

export type Category = definitions['elrhCategory']
export type Author = definitions['elrhAuthor']

export type ArticleDB = Omit<ArticleRaw, 'articleId'>
export type Article = ArticleRaw & {
  elrhAuthor?: Pick<Author, 'authorId' | 'name'>
  elrhCategory?: Pick<Category, 'categoryId' | 'name'>
  elrhGallery?: Pick<GalleryRaw, 'galleryId' | 'name'>
}

export type BookDB = Omit<BookRaw, 'bookId'>
export type Book = BookRaw & {
  elrhAuthor: Author
  elrhCategory: Category
}

export type Contact = definitions['elrhContact']

export type Gallery = GalleryRaw & {
  elrhArticle?: Article[]
  elrhAuthor: Author
  parentId?: Gallery
}

export type Image = definitions['elrhImage'] & {
  elrhAuthor: Author
  galleryId: Gallery
}

export type Link = definitions['elrhLink'] & {
  elrhAuthor: Author
  elrhCategory: Category
}

export type NewsDB = Omit<NewsRaw, 'newsId'>
export type News = NewsRaw & {
  elrhAuthor: Author
}

export type Text = definitions['elrhText']
