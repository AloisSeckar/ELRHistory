import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft, faArrowRight, faBackward, faBook, faBullhorn, faEnvelope, faForward, 
    faGlobe, faGraduationCap, faHome, faImage, faKey, faPlus, faSquare, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faBackward)
library.add(faBook)
library.add(faBullhorn)
library.add(faEnvelope)
library.add(faForward)
library.add(faGlobe)
library.add(faGraduationCap)
library.add(faHome)
library.add(faImage)
library.add(faKey)
library.add(faPlus)
library.add(faSquare)
library.add(faSquareFacebook)
library.add(faWrench)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})