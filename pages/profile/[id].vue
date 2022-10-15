<template>
  <div class="container mt-5 d-flex flex-column">
    <div class="d-flex flex-column align-items-center align-self-center card py-4 px-5">
      <div class="photo">
        <img class="border-secondary" :src="`/images/${name}/1.jpg`" :alt="profile.name" />
      </div>
      <h3 class="mt-5">{{profile.name}}</h3>
    </div>
    <div class="row gap-5 d-flex justify-content-center my-5">
      <div class="col-12 col-lg-5 card p-5">
        <p v-for="description of profile.description" :key="description">{{description}}</p>
        <b>Skills:</b>
        <ul>
          <li v-for="skill of profile.skills">
            {{skill}}
          </li>
        </ul>
        <div v-if="profile.qualifications.length > 0">
          <b>Qualifications:</b>
          <ul>
            <li v-for="qualification of profile.qualifications">
              {{qualification}}
            </li>
          </ul>
        </div>
        <b>
          Hourly rate: ${{profile.hourlyRate}}
        </b>
      </div>
      <div class="col-12 col-lg-5 card p-5">
        <iframe :src="profile.schedulerLink" frameborder="0" width="100%" height="780px"></iframe>
      </div>
    </div>
    <div class="row d-flex flex-row align-items-center justify-content-center">
      <div class="col-1 d-flex justify-content-end">
        <button class="btn d-flex justify-content-center" type="button" data-bs-target="#reviews" data-bs-slide="prev">
          <span class="material-symbols-outlined">
            arrow_back_ios
          </span>
        </button>
      </div>
      <div class="col-10 py-5">
        <div id="reviews" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item" :class="{'active': currentReview === profile.reviews.indexOf(review)}"
              v-for="review of profile.reviews" :key="review">
              <p class="m-0">{{review}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 d-flex justify-content-start">
        <button class="btn d-flex justify-content-center" type="button" data-bs-target="#reviews" data-bs-slide="next">
          <span class="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import profiles from '@/profiles.json'

const route = useRoute();
const id = route.params.id as string;

const profile = computed(() => profiles.find((p) => p.id === id));
const name = computed(() => profile.value.name.replace(/\s/g, '_').toLowerCase());
const currentReview = ref(0);
</script>

<style lang="scss" scoped>
$photo-size: 300px;

.photo {
  width: $photo-size;
  height: $photo-size;
  border-radius: $photo-size;
  border: 1px solid;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
