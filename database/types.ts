import { SupabaseClient } from '@supabase/supabase-js'
import type { definitions } from './_api'

export type ArticleRaw = definitions['elrhArticle']
export type BookRaw = definitions['elrhBook']
export type GalleryRaw = definitions['elrhGallery']
export type ImageRaw = definitions['elrhImage']
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

export type GalleryDB = Omit<GalleryRaw, 'galleryId'>
export type Gallery = GalleryRaw & {
  elrhArticle?: Article[]
  elrhAuthor: Author
  parentId?: Gallery
}

export type ImageDB = Omit<ImageRaw, 'galleryId'>
export type Image = ImageRaw & {
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

export type SupabaseStoreData = Article[] | Author[] | Book[] | Category[] | Contact[] | Gallery[] | Image[] | Link[] | News[]
export type SupabaseUpdateData = ArticleDB | BookDB | GalleryDB | Image | LinkDB | NewsDB
export type SupabaseItemType = 'article' | 'book' | 'gallery' | 'image' | 'link' | 'news'

export type SupabaseStoreClient = SupabaseClient<Article> | SupabaseClient<Book> | SupabaseClient<Gallery> | SupabaseClient<Image> | SupabaseClient<Link> | SupabaseClient<News>
export type SupabaseUpdateClient = SupabaseClient<ArticleDB> | SupabaseClient<BookDB> | SupabaseClient<GalleryDB> | SupabaseClient<ImageDB> | SupabaseClient<LinkDB> | SupabaseClient<NewsDB>
