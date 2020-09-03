<template>
  <nav
    class="menu bg-white lg:bg-transparent sm:fixed w-full z-10 shadow lg:block lg:shadow-none lg:w-64 fixed left-0 lg:left-auto right-0 lg:right-auto lg:sticky top-0 p-2"
    :class="{
      'menu-open': open
    }"
  >
    <slot />
    <div v-for="(value, key) in links" :key="key">
      <nuxt-link
        @click.native="$emit('close')"
        exact
        class="font-display inline-flex m-1 hover:bg-blue-100 text-lg rounded-full px-3 py-2 font-bold text-blue-900 hover:text-black"
        active-class="bg-blue-100 text-black"
        :to="{ name: key }"
      >
        <Icon :name="value.icon" />
        <span class="px-2">{{ value.text }}</span>
      </nuxt-link>
    </div>

    <div class="flex justify-end bg-gray-200 p-4 -mx-2 -mb-2 lg:hidden">
      <button class="button" @click="$emit('close')">
        <div class="flex items-center">
          <Icon name="icon-close-circle" />
          <span class="inline-flex ml-2">Menü schlie­ßen</span>
        </div>
      </button>
    </div>
  </nav>
</template>

<script>
import Icon from "./Icon";
import Logo from "./Logo";
export default {
  components: {
    Logo,
    Icon
  },
  props: ["open"],
  data() {
    return {
      links: {
        index: {
          text: "Startseite",
          icon: "icon-home"
        },
        services: {
          text: "Dienstleistungen",
          icon: "icon-widget-add"
        },
        blog: {
          text: "Blog",
          icon: "icon-click-target"
        },
        contact: {
          text: "Terminwunsch",
          icon: "icon-chat-group"
        },
        location: {
          text: "Standort",
          icon: "icon-location-pin"
        },
        certification: {
          text: "Zertifikate",
          icon: "icon-certificate"
        },
        workshops: {
          text: "Workshops",
          icon: "icon-work"
        }
      }
    };
  }
};
</script>

<style scoped>
.menu {
  transition: 200ms transform ease-in;
  transform: translate3d(0, -100%, 0);
}

@media (min-width: 1024px) {
  .menu {
    transform: translate3d(0, 0, 0);
  }
}

.menu.menu-open {
  transition: 200ms transform ease-out;
  transform: translate3d(0, 0, 0);
}
</style>
