<template>
  <nav class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky top-0 ">
    <div v-for="(value, key) in links" :key="key">
      <nuxt-link
        exact
        class="font-display inline-flex m-1 hover:bg-blue-100 text-lg rounded-full px-3 py-2 font-bold text-black hover:text-blue-800"
        active-class="bg-blue-100 text-blue-800"
        :to="{name: key}"
      >
        <Icon :name="value.icon" />
        <span class="px-2">{{value.text}}</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import Icon from './Icon'
import Logo from './Logo'
export default {
  components: {
    Logo,
    Icon
  },
  data() {
    return {
      links: {
        index: {
          text: 'Startseite',
          icon: 'icon-home'
        },
        workshops: {
          text: 'Workshops',
          icon: 'icon-work'
        },
        contact: {
          text: 'Kontakt',
          icon: 'icon-chat-group'
        },
        location: {
          text: 'Standort',
          icon: 'icon-location-pin'
        },
        certification: {
          text: 'Zertifikate',
          icon: 'icon-certificate'
        }
      }
    }
  }
}
</script>
