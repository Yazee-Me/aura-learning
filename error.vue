<template>
  <div class="container text-center">
    <div class="empty-space"></div>
    <h2>{{title}}</h2>
    <p>{{message}}</p>
    <NuxtLink to="/">Go back home!</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  error: {
    statusCode: string,
    statusMessage: string,
    message: string,
    stack: string,
    data: "",
    url: string,
  }
}>()

const title = computed(() => props.error.statusCode === "404" ? "Page not found" : "An error occurred")
const message = computed(() => props.error.statusCode === "404" ? "The page you are looking for does not exist." : "An error occurred while trying to load the page.")
</script>

<style lang="scss" scoped>

</style>