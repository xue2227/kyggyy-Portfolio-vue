<template>
    <img :src="src" :alt="alt" :class="class" />
  </template>
  
  <script>
  export default {
    name: 'GifImage',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      },
      class: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  /* 你可以在這裡添加任何特定於這個組件的樣式 */
  </style>