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
  
  </style>