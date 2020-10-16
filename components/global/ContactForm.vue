<template>
  <form name="ask-question" method="post" class="space-y-4" netlify>
    <input type="hidden" name="form-name" value="ask-question" />

    <label class="block">
      <span class="text-gray-700">Name</span>
      <input
        name="name"
        v-model="form.name"
        class="form-input mt-1 block w-full"
        placeholder="Max Musterman"
        required
        autocomplete="name"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">E-Mail</span>
      <input
        name="email"
        v-model="form.email"
        type="email"
        class="form-input mt-1 block w-full"
        placeholder="max@muster.com"
        autocomplete="email"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Telefon</span>
      <input
        required
        name="tel"
        v-model="form.tel"
        type="tel"
        class="form-input mt-1 block w-full"
        placeholder="+4952816218444"
        autocomplete="tel"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Nachricht</span>
      <textarea
        name="text"
        v-model="form.text"
        class="form-textarea mt-1 block w-full"
        rows="3"
        placeholder="Ihr Wunschtermin"
      ></textarea>
    </label>

    <div class="flex mt-6">
      <label class="flex items-center">
        <input
          required
          name="protection"
          v-model="form.protection"
          type="checkbox"
          class="form-checkbox"
        />
        <span class="ml-2"
          >Ich stimme der
          <span class="underline">Datenschuzerklärung</span> zu.</span
        >
      </label>
    </div>

    <button class="button">Senden</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        text: '',
        protection: false
      }
    }
  }
}
</script>
