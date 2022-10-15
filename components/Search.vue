<template>
  <div v-click-outside="hideSkills">
    <div id="search" class="form-control d-flex align-items-center">
      <span class="mx-1 badge bg-primary p-2" v-for="skill of selectedSkills" :key="skill"
        @click="removeSkill(skill)">{{skill}}
      </span>
      <input type="text" title="skills" v-model="currentSkill" @keypress.enter="selectSkill(currentSkill)"
        @keyup.backspace="removeLastSkill" @click="showSkills = true">
      <button class="btn dropdown-toggle" type="button" @click="showSkills = !showSkills"></button>
    </div>
    <div id="search-dropdown" class="position-relative" v-if="showSkills">
      <ul class="list-group position-absolute w-100">
        <li v-for="skill of filteredSkills" class="list-group-item" @click="selectSkill(skill)">{{skill}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import profiles from '../profiles.json'

const emit = defineEmits(['search', 'show-profiles'])

const skills = [...new Set(profiles.map(profile => profile.skills).flat().sort())]
const currentSkill = ref('')
const selectedSkills = ref<string[]>([])
const filteredSkills = computed(() => {
  return skills
    .filter(skill => !selectedSkills.value
      .includes(skill))
    .filter(skill => {
      return skill.toLowerCase()
        .includes(currentSkill.value.toLowerCase())
    }).splice(0, 10)
})
const showSkills = ref(false)

const selectSkill = (skillToBeAdded: string) => {
  filteredSkills.value.forEach(skill => {
    if (skill.toLowerCase() === skillToBeAdded.toLowerCase() && selectedSkills.value.length < 5) {
      selectedSkills.value.push(skill)
      currentSkill.value = ''
    }
  })
  if (selectedSkills.value.length > 0) {
    emit('search', selectedSkills.value)
    emit('show-profiles', true)
  }

}
const removeSkill = (skillToBeRemoved: string) => {
  selectedSkills.value = selectedSkills.value.filter(skill => skill !== skillToBeRemoved)
  selectedSkills.value.length > 0 ? emit('search', selectedSkills.value) : emit('show-profiles', false)
}
const removeLastSkill = () => {
  if (currentSkill.value === '') {
    selectedSkills.value.pop()
    selectedSkills.value.length > 0 ? emit('search', selectedSkills.value) : emit('show-profiles', false)
  }
}
const hideSkills = () => {
  showSkills.value = false
}

</script>

<style lang="scss" scoped>
#search {
  cursor: text;
}

input {
  border: 0;
  flex-grow: 1;

  &:focus-visible {
    outline: none;
  }
}

.list-group {
  z-index: 1100;
}

li:hover {
  color: white;
  background-color: #0d6efd;
}
</style>