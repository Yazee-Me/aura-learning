<template>
  <div class="col-12 col-md-6 col-lg-4">
    <NuxtLink :to="redirectTo" class="text-dark">
      <div class="card mb-4 p-3">
        <img class="card-img align-self-center photo" :src="`/images/${photo}`" :alt="name" />
        <div class="card-body">
          <h3 class="card-title text-center">{{name}}</h3>
          <p>{{description}}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { id, name, photo, shortDescription } = defineProps<{
  id: string;
  name: string;
  photo: string;
  shortDescription: string;
}>();

const description = computed(() => shortDescription.slice(0, 100) + "...");
const redirectTo = computed(() => `/profile/${id}`);
</script>

<style lang="scss" scoped>
$photo-size: 100px;

.photo {
  width: $photo-size;
  height: $photo-size;
  border-radius: $photo-size;
  border: 1px solid #000;
}
</style>
