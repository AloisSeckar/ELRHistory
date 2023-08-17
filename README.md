# ELRHistory
Website designed for photos/pictures and information about random historical topic (e.g. history of a town).

Originally a new version of [StaraKrc Python project](https://github.com/AloisSeckar/StaraKrc), this time in [Nuxt3](https://v3.nuxtjs.org/). However, my current goal is to make it customizable for possible re-use for other city parts etc.

## Tech stack
- Nuxt 3 framework + VueUse + nuxt/i18n
- Tailwind CSS
- Supabase DB
- Formkit
- Icons made possible by [FortAwesome](https://github.com/FortAwesome/vue-fontawesome)
- Test images by [Unsplash](https://unsplash.com/)

## Setting up

Right now you can just clone the repo and follow [Nuxt 3 deployment instructions](https://v3.nuxtjs.org/getting-started/deployment/).

Later I plan to optimize the project for Netlify auto-deployment via GitHub Actions.

## Re-branding

### Configuration

Some site-related values are defined as [Nuxt 3 runtime config](https://v3.nuxtjs.org/guide/going-further/runtime-config) variables. To tailor them the to your needs, use `.env` file.

List of variables:
* **NUXT_PUBLIC_TEXT_TITLE** - displayed as page title in browser tab + H1 on index page + in footer

### Database

All site-specific data are being stored in Supabase database. DB schema is described in `db-init.sql` file and some initial data are provided in `db-mock.sql`. 

To connect the application to your own Supabase, you need to provide unique `SUPABASE_URL` and `SUPABASE_KEY` via `.env` file. The rest is automatic.

### Text

Static texts are served via [nuxt/i18n](https://v8.i18n.nuxtjs.org/). TODO

List of texts, that also allow HTML:
* `web-author` - name and possible link to author's website
* `index-welcome` - text to be displayed at the index page to describe the site and greet the visitors

### Form validation

To change the language used in form validation messages, change default `locale` in `formkit.config.ts` on line 7. You may also need to import the corresponding source from `@formkit/i18n` on line 2.

### Images

Replace following images in `/public` directory with your own content.

List of customizable images:
* **header.png** - displayed in top page ribbon, set up to be 120px high, centered and repeating along x-axis
* **favicon.png** - favicon displayed in browser tab

### CSS

TODO

