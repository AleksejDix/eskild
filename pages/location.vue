<template>
  <div>
    <h1 class="title"> {{title}}</h1>
    {{$data}}
    <img :src="`https://image.maps.api.here.com/mia/1.6/mapview?app_id=Yxo5Jaup3FK4OcKI1dVN&app_code=wF15NPNC1c2Q1GvYHIUU4g&co=Germany&z=15&ci=Bad+Pyrmont&s=Bombergallee&n=1&h=360&w=640`" alt="karte praxis sörensen"/>
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
  },
  async mounted() {
    const response = fetch('https://image.maps.api.here.com/mia/1.6/mapview?app_id=Yxo5Jaup3FK4OcKI1dVN&app_code=wF15NPNC1c2Q1GvYHIUU4g&c=9.2515759,51.9875304&u=10k&h=300&w=420')
  }
}
</script>
