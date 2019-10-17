<template>
  <nav class="flex">
    <nuxt-link class="text-gray-700 text-sm mr-4" :to="{name: key}" v-for="(value, key) in links" :key="key">{{value.text}}</nuxt-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: {
        imprint: {
          text: 'Impressum'
        },
        dataprotection: {
          text: 'Datenschutz'
        }
      }
    }
  }
}
</script>

<style>

</style>
