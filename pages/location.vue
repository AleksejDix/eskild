<template>
  <div>
    <h1 class="title"> {{title}}</h1>
    {{workingdays}}
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
