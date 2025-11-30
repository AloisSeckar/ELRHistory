<template>
  <div class="flex flex-row gap-2 mt-2 pt-2 border-t-2">
    <SocialShare
      v-for="network in ['facebook', 'x', 'email']"
      :key="network"
      :network="network"
      :styled="true"
      class="text-white! text-sm px-3 py-1.5 border border-navy hover:bg-sky-500 hover:text-amber-300!"
      :aria-label="network === 'email' ? `Poslat emailem`: `Sdílet na ${network}`"
      :title="network === 'email' ? `Poslat emailem` : `Sdílet na ${network}`">
      <template #label>
        {{ network === 'email' ? `Email` : `Sdílet` }}
      </template>
    </SocialShare>
  </div>
</template>
