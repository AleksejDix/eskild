<template>
  <div class="">
    <div class="mb-2">
      <div class="text-black font-bold leading-tight">
        {{ address.firstLine }}
      </div>
      <div class="text-black text-gray-700 leading-tight mb-2">
        {{ address.secondLine }}
      </div>
      <div class="text-gray-700 leading-tight">{{ address.street }}</div>
      <div class="text-gray-700 leading-tight">{{ address.city }}</div>

      <div class="text-gray-700 leading-tight">{{ phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['address', 'phone']
}
</script>

<style></style>
