<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" v-html="icon">

  </svg>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    icon() {
      let icon = ''
      switch (this.name) {
        case 'icon-home':
          icon = `<path class="primary" d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path class="secondary" d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"/>`
          break;

        case 'icon-work':
          icon = `<path class="primary" d="M10 14.92V16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.08c2.83-.24 5.53-.96 8-2.1V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.18a23.85 23.85 0 0 0 8 2.1z"/><path class="secondary" d="M14 12.92V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.92a23.85 23.85 0 0 1-8-2.1V8c0-1.1.9-2 2-2h3V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h3a2 2 0 0 1 2 2v2.82a23.85 23.85 0 0 1-8 2.1zM15 6V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6z"/>`
          break;

        case 'icon-chat-group':
          icon = `<path class="primary" d="M20.3 12.04l1.01 3a1 1 0 0 1-1.26 1.27l-3.01-1a7 7 0 1 1 3.27-3.27zM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path class="secondary" d="M15.88 17.8a7 7 0 0 1-8.92 2.5l-3 1.01a1 1 0 0 1-1.27-1.26l1-3.01A6.97 6.97 0 0 1 5 9.1a9 9 0 0 0 10.88 8.7z"/>`
          break;

        case 'icon-location-pin':
          icon = `<path class="secondary" d="M12 1v6a3 3 0 0 0 0 6v9.31a1 1 0 0 1-.7-.29l-5.66-5.66A9 9 0 0 1 12 1z"/><path class="primary" d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"/>`
          break;

        case 'icon-certificate':
          icon = `<path class="primary" d="M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm16 12V7a2 2 0 0 1-2-2H6a2 2 0 0 1-2 2v8a2 2 0 0 1 2 2h12c0-1.1.9-2 2-2zM8 7h8a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z"/><path class="secondary" d="M11.65 18.23a4 4 0 1 1 4.7 0l2.5 3.44-2.23-.18-1.48 1.68-.59-4.2a4.04 4.04 0 0 1-1.1 0l-.6 4.2-1.47-1.68-2.23.18 2.5-3.44zM14 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>`
          break;

        case 'icon-click-target':
          icon = `<path class="primary" d="M21.97 12.73c-.25-.22-.56-.4-.92-.54L20 11.8a8 8 0 1 0-8.2 8.2l.4 1.06c.12.36.3.67.53.92a10 10 0 1 1 9.25-9.25zm-10.95 5.19a6 6 0 1 1 6.9-6.9l-2.39-.9a4 4 0 1 0-5.41 5.41l.9 2.39z"/><path class="secondary" d="M17.96 16.54l3.75 3.75a1 1 0 0 1-1.42 1.42l-3.75-3.75-.57 2.28a1 1 0 0 1-1.9.11l-3-8a1 1 0 0 1 1.28-1.29l8 3a1 1 0 0 1-.1 1.91l-2.3.57z"/>`
          break;

        default:
          break;
      }
      return icon
    }
  }
}
</script>

<style>

</style>
