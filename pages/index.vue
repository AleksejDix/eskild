<template>
  <section>
    <h1 class="page-title">Podologische Praxis E. Sörensen</h1>
    <hr class="border-t-4 border-teal-500 rounded my-6" />

    <VideoPlayer
      :video="
        `https://www.youtube.com/embed/fhcV6G_Svw4?modestbranding=1&showinfo=0`
      "
    />

    <ul v-if="posts.length > 0" class="owl-y">
      <li v-for="post in posts" :key="post.slug" class="py-6">
        <PostPreview :post="post" />
      </li>
    </ul>

    <div class="markdown">
      <p>
        Vielen Dank für die Auswahl unserer Podologische Praxis E. Sörensen. Wir
        erfüllen Ihre Bedürfnisse im Bereich Gesundheit und Pflege und bieten
        komplette Pflege für die Füße. Wir hoffen, dass Sie eine Menge
        nützlicher Informationen auf unserer Website finden. Die Qualität
        unserer Produkte und Dienstleistungen spielt für uns eine wichtige
        Rolle. Für detaillierte Informationen zu unseren Dienstleistungen wenden
        Sie sich einfach direkt an uns. Wir stehen nach Terminvereinbarung auch
        abends und samstags zur Verfügung.
      </p>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo";
// import VideoPlayer from '~/components/VideoPlayer'
import PostPreview from "~/components/PostPreview";

export default {
  components: {
    Logo,
    PostPreview
    // VideoPlayer
  },
  async asyncData() {
    const files = await require.context(
      "~/content/blog/posts/",
      false,
      /\.json$/
    );
    const posts = files.keys().map(key => {
      const res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    return {
      posts
    };
  },
  head() {
    return {
      title: "Startseite"
    };
  }
};
</script>
