<template>
  <section class="app">
    {{ text }}
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const text = ref("hello world!");
</script>

<style lang="scss" scoped>
.app {
  color: $color1;
  @include size(20px);
}
</style>
