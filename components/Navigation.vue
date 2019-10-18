<template>
  <nav>
    <slot/>
    <div v-for="(value, key) in links" :key="key">
      <nuxt-link
        exact
        class="font-display inline-flex m-1 hover:bg-blue-100 text-lg rounded-full px-3 py-2 font-bold text-blue-900 hover:text-black"
        active-class="bg-blue-100 text-black"
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
        blog: {
          text: 'Blog',
          icon: 'icon-click-target'
        },
        contact: {
          text: 'Terminwunsch',
          icon: 'icon-chat-group'
        },
        location: {
          text: 'Standort',
          icon: 'icon-location-pin'
        },
        certification: {
          text: 'Zertifikate',
          icon: 'icon-certificate'
        },
        workshops: {
          text: 'Workshops',
          icon: 'icon-work'
        },
      }
    }
  }
}
</script>
