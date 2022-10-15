<template>
  <div class="container mt-5">
    <div class="text-center mb-5">
      <h1>Aura Learning</h1>
      <h2>Hand-picked tutors. World-class quality.</h2>
    </div>
    <Search @search="filterProfiles" @show-profiles="showProfiles" />
    <div class="empty-space" v-if="!areProfilesDisplayed">
      <div class="card p-4">
        <p>
          The highest quality tutors, hand picked and curated to bring you the educational experience you have always
          wanted. At Aura Learning you will find working professionals who teach a very select number of hours outside
          of
          their jobs, and teachers who are renowned for the quality of their approaches and methodologies.
        </p>
        <p>
          *Can't find your subject? We're working to expand into other fields. Please let us know what you would like us
          to tutor next, and check in with us again soon!
        </p>
      </div>
    </div>
    <div v-else class="row py-4">
      <template v-for="profile in filteredProfiles" :key="profile.id">
        <Profile :name="profile.name" :description="profile.description" :id="profile.id" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import profiles from '../profiles.json'

let areProfilesDisplayed = ref<boolean>(false)
let filteredProfiles = ref<Profile[]>([])

const showProfiles = (value: boolean) => areProfilesDisplayed.value = value
const filterProfiles = (skills: string[]) => {
  filteredProfiles.value = profiles.filter((profile: Profile) => {
    return profile.skills.filter((skill: string) => skills.includes(skill)).length === skills.length
  })
}
</script>

<style lang="scss" scoped>

</style>
