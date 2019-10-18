<template>
  <router-link class="group" :to="{ name: 'blog-slug', params: {slug: post.slug}}">
    <article>
      <header>
        <h2 class="font-display text-4xl font-semibold leading-none text-teal-600 underline group-hover:text-black">{{post.title}}</h2>
        <aside class="py-2 text-black font-bold">
          {{post.date}}
        </aside>
        <p class="text-gray-600">{{post.body}}</p>
      </header>
    </article>
  </router-link>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>

</style>
