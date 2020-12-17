<template>
  <div>
    <room-with-a />
    <scenic />
  </div>
</template>
<script>
import roomWithA from "./_includes/room-with-a.vue";
import scenic from "./_includes/scenic.vue";
export default {
  data: {
    layout: "layout.11ty.js",
  },
  components: {
    roomWithA,
    scenic,
  },
};
</script>
