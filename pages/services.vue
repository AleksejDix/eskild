<template>
  <div>
    <h1 class="title"> {{title}}</h1>
    <hr class="border-t-4 border-teal-500 rounded my-6">
    <ul class="text-gray-700">
      <li v-for="item in classic" class="mt-2">
        <Icon name="icon-check" class="mr-2"/> <span>{{item}}</span>
      </li>
    </ul>
    <div class="markdown" v-html="$md.render(body)"></div>
  </div>
</template>

<script>
import Icon from './../components/Icon'
export default {
  components: {
    Icon
  },
  data() {
    return {
      classic: [
        'Fußbad mit med. Zusätzen',
        'Befunderhebung und Erstellung eines Behandlungsplanes',
        'Beratung über die Problematik des Fußes',
        'Entfernung von Hyperkeratose / Hornhaut und von Hühneraugen',
        'Kürzen der Nägel und fräsen',
        'ggf. Sonderformen der Behandlung',
        'Pflegeprodukte, welche auf die Haut abgestimmt sind, auftragen',
      ]
    }
  },
  async asyncData(context) {
    const { route } = context
    const file = await require(`~/content/${route.name}.json`);
    console.log(file)
    return {
      ...file
    }
  }
}
</script>

<style>

</style>
