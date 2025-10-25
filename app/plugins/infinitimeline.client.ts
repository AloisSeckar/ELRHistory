import { InfiniTimeline } from 'infinitimeline'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component('InfiniTimeline', InfiniTimeline)
})
