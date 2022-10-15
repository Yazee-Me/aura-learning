<template>
  <div class="container mt-5">
    <div class="text-center mb-5">
      <h1>Text for the main question?</h1>
    </div>
    <Search @search="filterProfiles" @show-profiles="showProfiles" />
    <div class="empty-space p-2" v-if="!areProfilesDisplayed">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti harum
        quibusdam fugiat saepe labore debitis sequi! Nihil iusto nulla
        asperiores cumque cupiditate, assumenda odit aperiam soluta veniam
        laboriosam, sit animi?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti harum
        quibusdam fugiat saepe labore debitis sequi! Nihil iusto nulla
        asperiores cumque cupiditate, assumenda odit aperiam soluta veniam
        laboriosam, sit animi?
      </p>
    </div>
    <div v-else class="row p-2">
      <template v-for="profile in filteredProfiles" :key="profile.name">
        <Profile :name="profile.name" :photo="profile.photo" :short-description="profile.shortDescription"
          :id="profile.id">
        </Profile>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import profiles from '../profiles.json'

let areProfilesDisplayed = ref<boolean>(false)
let filteredProfiles = ref<Profile[]>([])

const showProfiles = (value: boolean) => {
  areProfilesDisplayed.value = value
}
const filterProfiles = (skills: string[]) => {
  filteredProfiles.value = profiles.filter((profile: Profile) => {
    return profile.skills.filter((skill: string) => skills.includes(skill)).length === skills.length
  })
}
</script>

<style lang="scss" scoped>

</style>
