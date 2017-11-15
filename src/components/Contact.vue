<template>
<div id="contact">
    <h4 id="contact-header">Contact The College Football Robotic Conference</h4>
    <form>
        <label>Name: *</label>
        <input type="text" placeholder="Name" required/>

        <label>E-mail: *</label>
        <input type="text" placeholder="E-mail" required/>

        <label>Message: </label>
        <textarea placeholder="Enter Your Message" ></textarea>

        <label>What is this about? </label>
        <select v-model="msg.topic">
            <option v-for="topic in topics">{{ topic }}</option>
        </select>
        <div id="buttons">
            <button id="submit-btn" v-on:click.prevent="post">Submit</button>
            <button id="reset-btn" v-on:click.prevent="reset">Reset</button>
        </div>
        <div id="marginbottom"></div>
    </form>
</div>
</template>

<script>

export default {
    data() {
      return {
        msg: {
            name: "",
            email: "",
            message: "",
            topic: ""
        },
        topics: ["", "Build A Team", "Media Inquiry", "Sponsorships", "Other"]
      }
    },
    methods: {
        post: function() {
            //this is a filler version for a post request sending an email
            this.$http.post("");
        }
    }
}
</script>

<style>
#contact-header {
    text-align: center;
    margin-top: 10px;
    color: white;
}

label {
    display: block;
    margin: 20px 0 10px;
    color: white;
    text-align: center;
    font-size: 24px;
}

input[type="text"], textarea {
    display: block;
    width: 95%;
    padding: 5px;
    margin: 2.5%;
}

textarea {
    min-height: 100px;
}

select, option {
    width: 50%;
    margin: 0 25%;
    height: 40px;
}

#contact {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 700px;
    min-height: 700px;
    border-radius: 10px;
    background:  #4682b4;
}

#marginbottom {
    margin-bottom: 10px;
}

#buttons {
    width: 100%;
    margin: 5% 0;
}

button {
    display: inline-block;
    color: black;
    background: white;
    font-size: 24px;
    width: 16.667%;
}

#submit-btn {
    margin: 0 16%;
}

#reset-btn {
    margin: 0 16%;
}

</style>