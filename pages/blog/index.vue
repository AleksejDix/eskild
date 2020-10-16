<template>
  <section v-if="page">
    <h1 class="page-title">{{ page.title }}</h1>
    <hr class="border-t-4 border-teal-500 rounded my-6" />
    <nuxt-content class="prose" :document="page"></nuxt-content>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, route, params }) {
    console.log(route.name)
    const page = await $content(route.name).fetch();
    return {
      page
    };
  },
  head() {
    return {
      title: this.page && this.page.title
    };
  }
};
</script>
