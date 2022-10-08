<template>
  <div id="__layout">
    <main>
      <TheNavbar />
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
#__nuxt,
#__layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh !important;
}

a {
  text-decoration: none;
}

.empty-space {
  margin-top: 15vh;
}
</style>