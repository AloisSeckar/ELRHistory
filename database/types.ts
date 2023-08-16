import { SupabaseClient } from '@supabase/supabase-js'
import type { definitions } from './_api'

export type ArticleRaw = definitions['elrhArticle']
export type BookRaw = definitions['elrhBook']
export type GalleryRaw = definitions['elrhGallery']
export type NewsRaw = definitions['elrhNews']
export type LinkRaw = definitions['elrhLink']

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

export type LinkDB = Omit<LinkRaw, 'linkId'>
export type Link = LinkRaw & {
  elrhAuthor: Author
  elrhCategory: Category
}

export type NewsDB = Omit<NewsRaw, 'newsId'>
export type News = NewsRaw & {
  elrhAuthor: Author
}

export type Text = definitions['elrhText']

export type SupabaseStoreClient = SupabaseClient<Article> | SupabaseClient<Book> | SupabaseClient<News> | SupabaseClient<Link>
export type SupabaseUpdateClient = SupabaseClient<ArticleDB> | SupabaseClient<BookDB> | SupabaseClient<NewsDB> | SupabaseClient<LinkDB>

export type SupabaseStoreData = Article[] | Author[] | BookDB[] | Category[] | Contact[] | Gallery[] | Image[] | Link[] | News[] | Text[]
export type SupabaseUpdateData = ArticleDB | BookDB | NewsDB | LinkDB
