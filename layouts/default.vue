<template>
  <div class="flex h-full w-full">

    <header role="banner" class="flex-10auto flex justify-end lg:overflow-y-auto ">
      <div class="w-64">
        <Navigation/>
      </div>
    </header>

    <main class="flex-10auto flex justify-start">

      <div class="w-240">
        <div class="flex-1 flex justify-between">
          <div class="markdown w-160">
            <nuxt />
          </div>
          <footer class="w-80 pl-16">
            <FooterNavigation/>
          </footer>
         </div>
      </div>
    </main>

  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import FooterNavigation from '../components/FooterNavigation'

export default {
  components: {
    Navigation,
    FooterNavigation
  }
}
</script>

<style>
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
}

</style>
