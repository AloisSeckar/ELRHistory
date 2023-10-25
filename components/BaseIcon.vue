<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="'inline ' + cssClass"
    :width="size"
    :height="size"
    :viewBox="viewBox"
  >
    <path
      v-for="path in svgDefinition.paths"
      :key="path"
      :d="path"
      :fill="fill"
    />
  </svg>
</template>

<script setup lang="ts">
import icones from '@/assets/icones.json'
const props = defineProps({
  icon: { type: String, required: true },
  size: { type: String, default: '2rem' },
  fill: { type: String, default: 'currentColor' },
  cssClass: { type: String, default: '' }
})

const svgDefinition = getSVGDef(props.icon)
const viewBox = `0 0 ${svgDefinition.dim} ${svgDefinition.dim}`

type IconDefinition = {
  id: string,
  dim: number,
  paths: string[]
}

function getSVGDef (icon: string): IconDefinition {
  switch (icon) {
    case 'arrow-left':
      return icones.arrowLeft
    case 'arrow-right':
      return icones.arrowRight
    case 'backward':
      return icones.backward
    case 'book':
      return icones.book
    case 'bullhorn':
      return icones.bullhorn
    case 'cap':
      return icones.cap
    case 'envelope':
      return icones.envelope
    case 'facebook':
      return icones.facebook
    case 'forward':
      return icones.forward
    case 'globe':
      return icones.globe
    case 'home':
      return icones.home
    case 'image':
      return icones.image
    case 'key':
      return icones.key
    case 'plus':
      return icones.plus
    case 'timeline':
      return icones.timeline
    case 'square':
      return icones.square
    case 'wrench':
      return icones.wrench
  }
  // bi:question-square
  return icones.undefined
}
</script>
