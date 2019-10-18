<template>
  <div>
    <div role="banner" class="banner bg-center bg-no-repeat bg-cover shadow border-b">

    <div class="container px-4 py-8 flex justify-between">
      <router-link :to="{ name: 'index'}" class="inline-flex items-center">
        <Logo class="text-white"/>
        <div class="ml-4 text-white">
          <div class="text-lg lg:text-4xl font-light leading-none">
            Podologische Praxis
          </div>
          <div class="lg:leading-tight font-sm">
            E. Sörensen
          </div>
        </div>
      </router-link>
      <button class="lg:hidden uppercase tracking-wide font-bold text-sm" @click="isOpen = !isOpen">
        <div class="flex text-white">
           <Icon name="icon-menu"/>
           <span class="inline-block px-2">Menü</span>
        </div>
      </button>
    </div>

    </div>
    <div class="container p-4 flex relative">

      <Navigation :open="isOpen" @close="isOpen = false">
      </Navigation>

      <main class="w-full lg:flex-1">
        <div class="flex flex-wrap lg:justify-between lg:-mx-4">

          <div class="flex-1 px-4 py-6 bg-white shadow-md rounded lg:-mt-32 relative mb-8">
            <div class="px-4">
              <nuxt />
            </div>
          </div>

          <footer class="w-full lg:w-80 lg:-mt-16 lg:px-4 owl-y">
            <div class="rounded shadow-md bg-white">
              <div class="flex p-4 items-center">
                <img class="w-16 h-16 rounded-full border-2 border-teal-400" src="~/assets/images/eskild.jpg">
                <div class="ml-2">
                  <div class="text-2xl font-light leading-tight">Eskild Sörensen</div>
                  <a href="tel:052816218444" class=" font-bold text-xs inline-flex"><span class="rounded-l-full px-2 bg-orange-200 text-orange-900">05281 62 18 444</span><span class="inline-block px-2 rounded-r-full bg-orange-300 text-orange-900">anrufen</span></a>
                </div>
              </div>
            </div>


            <div class="rounded-lg shadow-md bg-white">
              <a target="blank" rel="noopener" href="https://www.google.com/maps?saddr=My+Location&daddr=Bombergallee+1+31812+Bad+Pyrmont">
                <img class="inline-block w-full rounded-lg border-2 border-white" :src="`https://image.maps.api.here.com/mia/1.6/mapview?app_id=Yxo5Jaup3FK4OcKI1dVN&app_code=wF15NPNC1c2Q1GvYHIUU4g&co=Germany&z=15&ci=Bad+Pyrmont&s=Bombergallee&n=1&h=360&w=640&u=200&ml=de`" alt="karte praxis sörensen"/>
              </a>
                <div class="p-4">
                  <div class="mb-2">
                    <div class="text-black font-bold leading-tight">Podologische Praxis</div>
                    <div class="text-black text-gray-700 leading-tight mb-2">Eskild Sörensen</div>
                    <div class="text-gray-700 leading-tight">Bombergallee 1</div>
                    <div class="text-gray-700 leading-tight">31812 Bad Pyrmont</div>
                  </div>
                  <a target="blank" rel="noopener" href="https://www.google.com/maps?saddr=My+Location&daddr=Bombergallee+1+31812+Bad+Pyrmont" class="font-bold text-xs"><span class="inline-block px-2 rounded-full bg-orange-300 text-orange-900">Wegbeschreibung</span></a>
                </div>


            </div>

                  <article class="shadow rounded-lg bg-white overflow-hidden">
                  <header class="p-4 bg-gray-100 border-b border-gray-200">
                    <h2 class="text-teal-800 text-lg">Öffnungszeiten</h2>
                  </header>
                  <ul class="p-4">
                    <li class="flex">
                      <div class="w-1/2 text-left pr-3">Montag</div>
                      <div class="w-1/2 text-orange-600">8:30 - 18:00</div>
                    </li>
                    <li class="flex">
                      <div class="w-1/2 text-left pr-3">Dienstag</div>
                      <div class="w-1/2 text-orange-600">8:30 - 18:00</div>
                    </li>
                    <li class="flex">
                      <div class="w-1/2 text-left pr-3">Mittwoch</div>
                      <div class="w-1/2 text-orange-600">8:30 - 18:00</div>
                    </li>
                    <li class="flex">
                      <div class="w-1/2 text-left pr-3">Donnerstag</div>
                      <div class="w-1/2 text-orange-600">8:30 - 18:00</div>
                    </li>
                    <li class="flex">
                      <div class="w-1/2 text-left pr-3">Freitag</div>
                      <div class="w-1/2 text-orange-600">8:30 - 18:00</div>
                    </li>
                    <li class="flex text-gray-500">
                      <div class="w-1/2 text-left pr-3">Samstag</div>
                      <div class="w-1/2">geschlossen</div>
                    </li>
                    <li class="flex text-gray-500">
                      <div class="w-1/2 text-left pr-3">Sonntag</div>
                      <div class="w-1/2">geschlossen</div>
                    </li>
                  </ul>
                </article>

            <FooterNavigation/>
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import FooterNavigation from '../components/FooterNavigation'
import Logo from '../components/Logo'
import Icon from '../components/Icon'

export default {
  components: {
    Icon,
    Logo,
    Navigation,
    FooterNavigation
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style>
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
}


.banner {
  @apply bg-teal-700;
  background-image: url('~assets/images/banner.jpg');
  background-blend-mode: multiply;
  height: 102px
}

@media (min-width: 1024px)  {
  .banner {
    height: 408px
  }
}


</style>
