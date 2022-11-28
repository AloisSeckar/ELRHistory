# ELRHistory
Website designed for photos/pictures and information about random historical topic (e.g. history of a town).

Originally a new version of [StaraKrc Python project](https://github.com/AloisSeckar/StaraKrc), this time in [Nuxt3](https://v3.nuxtjs.org/). However, my current goal is to make it customizable for possible re-use for other city parts etc.

## Attributions
- Nuxt 3 framework
- Tailwind CSS
- Supabase DB
- Icons made possible by [FortAwesome](https://github.com/FortAwesome/vue-fontawesome)
- Test images by [Unsplash](https://unsplash.com/)

## Setting up

Right now you can just clone the repo and follow [Nuxt 3 deployment instructions](https://v3.nuxtjs.org/getting-started/deployment/).

Later I plan to optimize the project for Netlify auto-deployment via GitHub Actions.

## Re-branding

### Text

Site-related texts are currently defined as [Nuxt 3 runtime config](https://v3.nuxtjs.org/guide/going-further/runtime-config) variables. To tailor them the to your needs, use `.env` file.

List of customizable texts:
* **NUXT_PUBLIC_TEXT_TITLE** - displayed as page title in browser tab + H1 on index page + in footer
* **NUXT_PUBLIC_TEXT_AUTHOR_NAME** - displayed in footer
* **NUXT_PUBLIC_TEXT_AUTHOR_WEBSITE** - (optional) link to author's personal website

### Images

Replace following images in `/public` directory with your own content.

List of customizable images:
* **header.png** - displayed in top page ribbon, set up to be 120px high, centered and repeating along x-axis
* **favicon.png** - favicon displayed in browser tab

### CSS

TODO

