<template>
  <div class="col-12 col-md-6 col-lg-4">
    <NuxtLink :to="redirectTo" class="text-dark">
      <div class="card mb-4 p-3">
        <div class="align-self-center photo">
          <img class="card-img" :src="imageSrc" :alt="name" />
        </div>
        <div class="card-body">
          <h3 class="card-title text-center">{{name}}</h3>
          <p>{{shortDescription}}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { id, name, description } = defineProps<{
  id: string;
  name: string;
  description: string[];
}>();

const shortDescription = computed(() => description[0].slice(0, 150) + " ...");
const redirectTo = computed(() => `/profile/${id}`);
const imageSrc = computed(() => `/images/${name.replace(/\s/g, '_').toLowerCase()}/1.jpg`);
</script>

<style lang="scss" scoped>
$photo-size: 100px;

.photo {
  width: $photo-size;
  height: $photo-size;
  border-radius: $photo-size;
  border: 1px solid #000;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
