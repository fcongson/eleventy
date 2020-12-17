<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Demo: Vue and Eleventy</title>
      <style v-html="css" />
    </head>
    <body>
      <room-with-a />
    </body>
  </html>
</template>
<script>
import roomWithA from "./_includes/room-with-a.vue";
export default {
  data: {
    layout: "layout.html",
  },
  components: {
    roomWithA,
  },
  computed: {
    css: function() {
      return this.getVueComponentCssForPage(this.page.url);
    },
  },
};
</script>
