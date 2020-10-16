<template>
  <div>
    <a
      class="block no-underline"
      target="blank"
      rel="noopener"
      href="googleMapsLink"
    >
      <img :src="map" alt="karte praxis sörensen" />
    </a>

    <a
      target="blank"
      rel="noopener"
      href="https://www.google.com/maps?saddr=My+Location&daddr=Bombergallee+1+31812+Bad+Pyrmont"
      class="hover:border-0 font-bold text-xs"
      ><span
        class="inline-block px-2 rounded-full bg-orange-300 text-orange-900"
        >Wegbeschreibung</span
      ></a
    >
  </div>
</template>

<script>
export default {
  props: ['googleMapsLink', 'map']
}
</script>

<style></style>
