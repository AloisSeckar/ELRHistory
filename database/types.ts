import { SupabaseClient } from '@supabase/supabase-js'
import type { definitions } from './_api'

export type Author = definitions['elrhAuthor']
export type AuthorLink = Pick<Author, 'authorId' | 'name'>

export type Category = definitions['elrhCategory']
export type CategoryLink = Pick<Category, 'categoryId' | 'name'>

export type ArticleRaw = definitions['elrhArticle']
export type ArticleLink = Pick<ArticleRaw, 'articleId' | 'name'>

export type GalleryRaw = definitions['elrhGallery']
export type GalleryLink = Pick<GalleryRaw, 'galleryId' | 'name'>

export type BookRaw = definitions['elrhBook']
export type ImageRaw = definitions['elrhImage']
export type NewsRaw = definitions['elrhNews']
export type LinkRaw = definitions['elrhLink']
export type TimelineRaw = definitions['elrhTimeline']

export type ArticleDB = Omit<ArticleRaw, 'articleId'>
export type Article = ArticleRaw & {
  elrhAuthor: AuthorLink
  elrhCategory: CategoryLink
  elrhGallery?: GalleryLink
}

export type BookDB = Omit<BookRaw, 'bookId'>
export type Book = BookRaw & {
  elrhAuthor: AuthorLink
  elrhCategory: Pick<Category, 'categoryId' | 'name'>
}

export type Contact = definitions['elrhContact']

export type GalleryDB = Omit<GalleryRaw, 'galleryId'>
export type Gallery = GalleryRaw & {
  elrhArticle?: Article[]
  elrhAuthor: AuthorLink
  parentId?: GalleryLink
}

export type ImageDB = Omit<ImageRaw, 'imageId'>
export type Image = ImageRaw & {
  elrhAuthor: AuthorLink
  galleryId: GalleryLink
}

export type LinkDB = Omit<LinkRaw, 'linkId'>
export type Link = LinkRaw & {
  elrhAuthor: AuthorLink
  elrhCategory: CategoryLink
}

export type NewsDB = Omit<NewsRaw, 'newsId'>
export type News = NewsRaw & {
  elrhAuthor: AuthorLink
}

export type TimelineDB = Omit<TimelineRaw, 'timelineId'>
export type Timeline = TimelineRaw & {
  elrhAuthor: AuthorLink
}

export type SupabaseStoreData = Article[] | Author[] | Book[] | Category[] | Contact[] | Gallery[] | Image[] | Link[] | News[] | Timeline[]
export type SupabaseUpdateData = ArticleDB | BookDB | GalleryDB | ImageDB | LinkDB | NewsDB | TimelineDB
export type SupabaseItemType = 'article' | 'book' | 'gallery' | 'image' | 'link' | 'news' | 'timeline'
export type SupabaseActionType = 'add' | 'edit'

export type SupabaseStoreClient = SupabaseClient<Article> | SupabaseClient<Book> | SupabaseClient<Gallery> | SupabaseClient<Image> | SupabaseClient<Link> | SupabaseClient<News> | SupabaseClient<Timeline>
export type SupabaseUpdateClient = SupabaseClient<ArticleDB> | SupabaseClient<BookDB> | SupabaseClient<GalleryDB> | SupabaseClient<ImageDB> | SupabaseClient<LinkDB> | SupabaseClient<NewsDB> | SupabaseClient<TimelineDB>
