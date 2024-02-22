<template>
  <div class="flex flex-col">
    <div class="hidden sm:flex mb-2">
      <div class="w-32 font-bold">
        Posted
      </div>
      <div class="w-32 font-bold">
        Name
      </div>
      <div class="flex-1 font-bold">
        Content
      </div>
    </div>

    <!-- Repeat this section for each object in your array -->
    <div class="flex flex-col sm:flex-row mb-4">
      <div class="sm:hidden">
        2024-02-22 by John Doe
      </div>
      <div class="hidden sm:inline-block sm:w-32">
        2024-02-22
      </div>
      <div class="hidden sm:inline-block sm:w-32">
        John Doe
      </div>
      <div class="flex-1 mt-2 sm:mt-0">
        This is a longer piece of content that should take up the remaining space. On narrow screens, this will wrap onto a new row, ensuring that the layout adapts responsively.
      </div>
    </div>
    <div class="flex flex-col sm:flex-row mb-4">
      <div class="sm:hidden">
        2024-02-22 by John Doe
      </div>
      <div class="hidden sm:inline-block sm:w-32">
        2024-02-22
      </div>
      <div class="hidden sm:inline-block sm:w-32">
        John Doe
      </div>
      <div class="flex-1 mt-2 sm:mt-0">
        This is a longer piece of content that should take up the remaining space. On narrow screens, this will wrap onto a new row, ensuring that the layout adapts responsively.
      </div>
    </div>
  </div>
</template>
