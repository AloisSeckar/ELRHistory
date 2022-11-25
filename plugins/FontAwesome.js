import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBook, faBullhorn, faEnvelope, faGlobe, faGraduationCap, faHome, faImage, faKey } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faBook)
library.add(faBullhorn)
library.add(faEnvelope)
library.add(faGlobe)
library.add(faGraduationCap)
library.add(faHome)
library.add(faImage)
library.add(faKey)
library.add(faSquareFacebook)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})