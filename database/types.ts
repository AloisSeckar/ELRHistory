export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      elrh_article: {
        Row: {
          article_id: number
          author_id: number
          category_id: number
          content: string
          date_created: string
          date_edited: string
          dscr: string
          gallery_id: number | null
          name: string
          thumb: string
        }
        Insert: {
          article_id?: never
          author_id: number
          category_id: number
          content: string
          date_created: string
          date_edited: string
          dscr: string
          gallery_id?: number | null
          name: string
          thumb: string
        }
        Update: {
          article_id?: never
          author_id?: number
          category_id?: number
          content?: string
          date_created?: string
          date_edited?: string
          dscr?: string
          gallery_id?: number | null
          name?: string
          thumb?: string
        }
      }
      elrh_author: {
        Row: {
          author_id: number
          email: string
          name: string
        }
        Insert: {
          author_id?: never
          email: string
          name: string
        }
        Update: {
          author_id?: never
          email?: string
          name?: string
        }
      }
      elrh_book: {
        Row: {
          author_id: number
          book_id: number
          category_id: number
          date_created: string
          date_edited: string
          dscr: string
          name: string
          ord: number
          review: string | null
          thumb: string
          url: string
          writer: string
          year: string
        }
        Insert: {
          author_id: number
          book_id?: never
          category_id: number
          date_created: string
          date_edited: string
          dscr: string
          name: string
          ord: number
          review?: string | null
          thumb: string
          url: string
          writer: string
          year: string
        }
        Update: {
          author_id?: number
          book_id?: never
          category_id?: number
          date_created?: string
          date_edited?: string
          dscr?: string
          name?: string
          ord?: number
          review?: string | null
          thumb?: string
          url?: string
          writer?: string
          year?: string
        }
      }
      elrh_category: {
        Row: {
          category_id: number
          dscr: string
          name: string
          ord: number
          type: string
        }
        Insert: {
          category_id?: never
          dscr: string
          name: string
          ord: number
          type: string
        }
        Update: {
          category_id?: never
          dscr?: string
          name?: string
          ord?: number
          type?: string
        }
      }
      elrh_contact: {
        Row: {
          contact_id: number
          email: string
          fb: string
          name: string
          phone: string
        }
        Insert: {
          contact_id?: never
          email: string
          fb: string
          name: string
          phone: string
        }
        Update: {
          contact_id?: never
          email?: string
          fb?: string
          name?: string
          phone?: string
        }
      }
      elrh_gallery: {
        Row: {
          author_id: number
          date_created: string
          date_edited: string
          dscr: string | null
          gallery_id: number
          name: string
          parent_id: number | null
        }
        Insert: {
          author_id: number
          date_created: string
          date_edited: string
          dscr?: string | null
          gallery_id?: never
          name: string
          parent_id?: number | null
        }
        Update: {
          author_id?: number
          date_created?: string
          date_edited?: string
          dscr?: string | null
          gallery_id?: never
          name?: string
          parent_id?: number | null
        }
      }
      elrh_image: {
        Row: {
          author_id: number
          date_created: string
          date_edited: string
          dscr: string | null
          gallery_id: number
          image: string
          image_id: number
          name: string
          next_id: number | null
          ord: number
          prev_id: number | null
        }
        Insert: {
          author_id: number
          date_created: string
          date_edited: string
          dscr?: string | null
          gallery_id: number
          image: string
          image_id?: never
          name: string
          next_id?: number | null
          ord: number
          prev_id?: number | null
        }
        Update: {
          author_id?: number
          date_created?: string
          date_edited?: string
          dscr?: string | null
          gallery_id?: number
          image?: string
          image_id?: never
          name?: string
          next_id?: number | null
          ord?: number
          prev_id?: number | null
        }
      }
      elrh_link: {
        Row: {
          author_id: number
          category_id: number
          date_created: string
          date_edited: string
          dscr: string
          link_id: number
          name: string
          ord: number
          thumb: string
          url: string
        }
        Insert: {
          author_id: number
          category_id: number
          date_created: string
          date_edited: string
          dscr: string
          link_id?: never
          name: string
          ord: number
          thumb: string
          url: string
        }
        Update: {
          author_id?: number
          category_id?: number
          date_created?: string
          date_edited?: string
          dscr?: string
          link_id?: never
          name?: string
          ord?: number
          thumb?: string
          url?: string
        }
      }
      elrh_news: {
        Row: {
          author_id: number
          content: string
          date_created: string
          news_id: number
        }
        Insert: {
          author_id: number
          content: string
          date_created: string
          news_id?: never
        }
        Update: {
          author_id?: number
          content?: string
          date_created?: string
          news_id?: never
        }
      }
      elrh_text: {
        Row: {
          key: string
          value: string
        }
        Insert: {
          key: string
          value: string
        }
        Update: {
          key?: string
          value?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
