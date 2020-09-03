<template>
  <div>
    <h1 class="page-title">{{ page.title }}</h1>
    <hr class="border-t-4 border-teal-500 rounded my-6" />
    <ul class="text-gray-700">
      <li v-for="(item, index) in classic" :key="index" class="mt-2">
        <Icon name="icon-check" class="mr-2" /> <span>{{ item }}</span>
      </li>
    </ul>
    <div class="markdown" v-html="$md.render(page.body)"></div>
  </div>
</template>

<script>
import Icon from "./../components/Icon";
export default {
  components: {
    Icon
  },
  data() {
    return {
      classic: [
        "Fußbad mit med. Zusätzen",
        "Befunderhebung und Erstellung eines Behandlungsplanes",
        "Beratung über die Problematik des Fußes",
        "Entfernung von Hyperkeratose / Hornhaut und von Hühneraugen",
        "Kürzen der Nägel und fräsen",
        "ggf. Sonderformen der Behandlung",
        "Pflegeprodukte, welche auf die Haut abgestimmt sind, auftragen"
      ]
    };
  },
  async asyncData({ $content, route }) {
    const page = await $content(route.name).fetch();
    return {
      page
    };
  },
  head() {
    return {
      title: this.page.title
    };
  }
};
</script>
