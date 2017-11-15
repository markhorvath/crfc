<template>
<div>
    <h1>News</h1>
    <div v-for="title in titles">
        <h2>{{ title }}</h2>
        <article>{{ title }}</article>
        <img>
    </div>
</div>
</template>

<script>


export default {

    data() {
      return {
        titles: []
      }
    },
    created() {
        // access the firebase db, .then is a promise for the data which is returned after being
        // formatted with .json()
            this.$http.get('https://crfc-759c4.firebaseio.com/title.json').then(function(data){
                console.log(data);
                return data.json();
            }).then(function(data) {
                for (const i in data) {
                    console.log(data[i]);
                    this.titles.push(data[i]);
                }
            });
    },
    filters: {
        toUppercase(value) {
            return value.toUppercase();
        }
    }
}
</script>

<style>

</style>