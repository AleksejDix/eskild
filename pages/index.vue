<template>
  <section>
    <h1 class="title">Podologische Praxis E. Sörensen</h1>
    <hr class="border-t-4 border-teal-500 rounded my-6">

    <ul v-if="posts.length > 0" class="owl-y">
      <li v-for="post in posts" :key="post.slug" class="py-6">
        <PostPreview :post="post"/>
      </li>
    </ul>
  </section>
</template>

<script>

import Logo from '~/components/Logo'
import PostPreview from '~/components/PostPreview'

export default {
  components: {
    Logo,
    PostPreview
  },
  async asyncData() {
    const files = await require.context('~/content/blog/posts/', false, /\.json$/)
    const posts = files
      .keys()
      .map(key => {
        const res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });
    return {
      posts
    }
  }
}
</script>

<style>

</style>
