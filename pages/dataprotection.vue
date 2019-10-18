<template>
  <div>
    <h1 class="title">{{title}}</h1>
      <hr class="border-t-4 border-teal-500 rounded my-6">
    <div class="markdown" v-html="$md.render(body)"></div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { route } = context
    const file = await require(`~/content/${route.name}.json`);
    return {
      ...file
    }
  }
}
</script>
