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
  color: red;
}
</style>
