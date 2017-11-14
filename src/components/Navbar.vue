<template>
      <div>
          <nav>
            <ul id="main-nav">
                <li><router-link to="/" exact>Home</router-link></li>
                <li><router-link to="/about" exact>About</router-link></li>
                <li><router-link to="/news" exact>News</router-link></li>
                <li><router-link to="/buildteam" exact>Build a Team</router-link></li>
                <li><router-link to="/pastseasons" exact>Past Seasons</router-link></li>
                <li><router-link to="/rules" exact>Rules &amp; Scoring</router-link></li>
                <li><router-link to="/sponsors" exact>Sponsors</router-link></li>
                <li><router-link to="/contact" exact>Contact Us</router-link></li>
            </ul>
          </nav>
          <div id="clearfix">
          </div>
      </div>
</template>

<script>
export default {
    data() {
      return {
      }
    }
}
</script>

<style scoped>
a {
  color: #fff;
  border-radius: 10px;
  padding: 6px 8px;
}

nav ul li {
  background: #444;
}

.router-link-active {
  background: white;
  color: #444;
}

#clearfix {
  content: '';
  display: block;
  clear: both;
}

</style>