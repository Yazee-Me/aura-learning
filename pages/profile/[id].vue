<template>
  <div class="container mt-5">
    <div class="d-flex flex-column align-items-center">
      <img class="photo" src="/images/avatar.png" :alt="profile.name" />
      <h3 class="mt-5">{{profile.name}}</h3>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        {{profile.longDescription}}
      </div>
      <div class="col-12 col-md-6">
        <iframe :src="profile.schedulerLink" frameborder="0" width="100%" height="780px"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import profiles from '@/profiles.json'

const route = useRoute();
const id = route.params.id as string;

const profile = computed(() => profiles.find((p) => p.id === id));
</script>

<style lang="scss" scoped>
$photo-size: 300px;

.photo {
  width: $photo-size;
  height: $photo-size;
  border-radius: $photo-size;
  border: 1px solid #000;
}
</style>
