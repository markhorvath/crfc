<template>
    <div>
      <h1>The Collegiate Robotic Football Conference consists of the following universities:</h1>
      <ul>
        <li v-for="member in members">{{ member }}</li>
      </ul>
    </div>
</template>

<script>
export default {
    data() {
      return {
        members: ["University of Notre Dame", "Ohio Northern University", "U.S. Naval Academy",
        "Valparaiso University", "Purdue Polytechnic", "University of Mount Union",
        "Indian Universiy - Purdue University Indianapolis"]
      }
    }
}
</script>

<style>

</style>