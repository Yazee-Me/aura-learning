<template>
  <div class="container mt-5 d-flex flex-column">
    <section class="d-flex flex-column align-items-center align-self-center card py-4 px-5">
      <div class="photo">
        <img class="border-secondary" :src="`/images/${imagePath}/1.jpg`" :alt="name" />
      </div>
      <h1 class="mt-5">{{ name }}</h1>
      <h2>
        {{ title }}
      </h2>
      <h3>
        Hourly rate: ${{ hourlyRate }}
      </h3>
    </section>
    <section class="row gap-5 d-flex justify-content-center my-5 mx-0">
      <div class="col-12 col-lg-5 card p-5">
        <h3>About {{ name }}</h3>
        <p v-for="text of description" :key="text">{{ text }}</p>
        <b>Skills:</b>
        <ul>
          <li v-for="skill of skills">
            {{ skill }}
          </li>
        </ul>
        <div v-if="hasQualifications">
          <b>Qualifications:</b>
          <ul>
            <li v-for="qualification of qualifications">
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-5 card p-5">
        <h3>Book your next lesson with {{ name }}</h3>
        <iframe :src="schedulerLink" frameborder="0" width="100%" height="780px"></iframe>
      </div>
    </section>
    <section class="row d-flex flex-row align-items-center justify-content-center mx-0">
      <h3 class="col-12 text-center py-4">STUDENTS' TESTIMONIALS</h3>
      <div class="col-1 d-flex justify-content-end">
        <button class="btn d-flex justify-content-center" type="button" data-bs-target="#reviews" data-bs-slide="prev">
          <span class="material-symbols-outlined">
            arrow_back_ios
          </span>
        </button>
      </div>
      <div class="col-8 col-sm-10 py-4">
        <div id="reviews" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item" :class="{ 'active': initReview === currentReview(review) }"
              v-for="review of reviews" :key="review">
              <p class="m-0">{{ review }}</p>
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
    </section>
  </div>
</template>

<script lang="ts" setup>
import profiles from '@/profiles.json'

const route = useRoute();
const id = route.params.id as string;

const profile = computed(() => profiles.find((p) => p.id === id));
const imagePath = computed(() => profile?.value?.name.replace(/\s/g, '_').toLowerCase());
const name = computed(() => profile?.value?.name);
const title = computed(() => profile?.value?.title);
const hourlyRate = computed(() => profile?.value?.hourlyRate);
const description = computed(() => profile?.value?.description);
const skills = computed(() => profile?.value?.skills);
const qualifications = computed(() => profile?.value?.qualifications);
const hasQualifications = computed(() => qualifications.value && qualifications.value.length > 0);
const schedulerLink = computed(() => profile?.value?.schedulerLink);
const reviews = computed(() => profile?.value?.reviews);
const currentReview = (index: string) => reviews.value?.indexOf(index);
const initReview = ref(0);
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
