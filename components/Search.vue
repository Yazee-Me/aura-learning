<template>
  <div>
    <div id="search" class="form-control d-flex align-items-center">
      <span class="mx-1 badge bg-primary p-2" v-for="skill of selectedSkills" :key="skill"
        @click="removeSkill(skill)">{{skill}}
      </span>
      <input type="text" title="skills" v-model="currentSkill" @click="showSkills = !showSkills"
        @keypress.enter="selectSkill(currentSkill)">
      <button class="btn dropdown-toggle" type="button" @click="showSkills = !showSkills"></button>
    </div>
    <div class="position-relative">
      <ul class="list-group position-absolute w-100" v-if="showSkills">
        <li v-for="skill of filteredSkills" class="list-group-item" @click="selectSkill(skill)">{{skill}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import profiles from '../profiles.json'

const emit = defineEmits(['search'])

const skills = [...new Set(profiles.map(profile => profile.skills).flat().sort())]
const currentSkill = ref('')
const selectedSkills = ref<string[]>([])
const filteredSkills = computed(() => skills.filter(skill => !selectedSkills.value.includes(skill)).filter(skill => skill.toLowerCase().includes(currentSkill.value.toLowerCase())).splice(0, 10))
const showSkills = ref(false)

const selectSkill = (skillToBeAdded: string) => {
  filteredSkills.value.forEach(skill => {
    if (skill.toLowerCase() === skillToBeAdded.toLowerCase() && selectedSkills.value.length < 5) {
      selectedSkills.value.push(skill)
      currentSkill.value = ''
      emit('search', selectedSkills.value)
    }
  })
}
const removeSkill = (skillToBeRemoved: string) => {
  selectedSkills.value = selectedSkills.value.filter(skill => skill !== skillToBeRemoved)
  emit('search', selectedSkills.value)
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