<template>
  <div>
    <h1 class="title"> {{title}}</h1>
    <hr class="border-t-4 border-teal-500 rounded my-6">

    <div class="markdown">
      <p>
        Seit April 2016 im <b>Königen Luise Bad in Pyrmont</b> für Sie und Ihre Füße.
      </p>
      <a class="block no-underline" target="blank" rel="noopener" href="https://www.google.com/maps?saddr=My+Location&daddr=Bombergallee+1+31812+Bad+Pyrmont">
      <img class="" :src="`https://image.maps.api.here.com/mia/1.6/mapview?app_id=Yxo5Jaup3FK4OcKI1dVN&app_code=wF15NPNC1c2Q1GvYHIUU4g&co=Germany&z=17&ci=Bad+Pyrmont&s=Bombergallee&n=1&h=720&w=1280&u=200`" alt="karte praxis sörensen"/>
      </a>
    <h2>Adresse</h2>
    <div class="">
      <div class="mb-2">
        <div class="text-black font-bold leading-tight">Podologische Praxis</div>
        <div class="text-black text-gray-700 leading-tight mb-2">Eskild Sörensen</div>
        <div class="text-gray-700 leading-tight">Bombergallee 1</div>
        <div class="text-gray-700 leading-tight">31812 Bad Pyrmont</div>
      </div>
      <a  target="blank" rel="noopener" href="https://www.google.com/maps?saddr=My+Location&daddr=Bombergallee+1+31812+Bad+Pyrmont" class="hover:border-0 font-bold text-xs"><span class="inline-block px-2 rounded-full bg-orange-300 text-orange-900">Wegbeschreibung</span></a>
    </div>

        </div>




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
