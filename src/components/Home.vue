<template>
    <div>
      <header>
          <div class="wrapper">
              <div class="row" id="intro">
                  <div class="col-lg-10 col-md-10">
                      <h3>Welcome to the</h3>
                      <h1 id="name">{{ name }}</h1>
                      <h4 id="slogan">{{ slogan }}</h4>
                  </div>
                  <div class="col-lg-2 col-md-2" id="logo">
                      <img src="/images/crfc-logo2.jpg">
                  </div>
              </div>
          </div>
      </header>
      <div class="wrapper">
        <div class="carousel slide" id="myslider" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myslider" data-slide-to="0" class="active"></li>
                    <li data-target="#myslider" data-slide-to="1"></li>
                    <li data-target="#myslider" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="images/sunrise.jpeg" style="width: 90%; height: 400px; margin-left: 10%;">
                        <div class="carousel-caption">
                            <h3>Rise and shine</h3>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/arctic.jpeg" style="width: 80%; height: 400px; margin-left: 10%;">
                        <div class="carousel-caption">
                            <h2>Just over the horizon</h2>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/lightning.jpeg" style="width: 80%; height: 400px; margin-left: 10%;">
                        <div class="carousel-caption">
                            <h1>Uhhhhhh... lightning</h1>
                        </div>
                    </div>
                </div>
                <a class="right carousel-control" href="#myslider" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
                <a class="left carousel-control" href="#myslider" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
        </div>
      </div>
      <div class="wrapper">
          <section id="info">
              <div class="row">
                  <div class="col-lg-5 sponsors">
                      <h2>Robotic Football is sponsored by:</h2>
                      <ul id="sponsors">
                          <li v-for="sponsor in sponsors">{{ sponsor }}</li>
                      </ul>
                  </div>
                  <div class="col-lg-6 col-lg-offset-1 members">
                      <h2>Conference Members</h2>
                      <ul id="members">
                          <li v-for="member in members">{{ member }}</li>
                      </ul>
                  </div>
              </div>
          </section>
      </div>
    </div>
</template>

<script>

export default {
    data() {
      return {
        name: "College Robotic Football Conference (CRFC)",
        slogan: "Melding the excitement of football with technology",
        sponsors: ["GE", "Boeing", "VisualEdge", "Yaskawa"],
        members: ["University of Notre Dame", "Ohio Northern University", "U.S. Naval Academy",
        "Valparaiso University", "Purdue Polytechnic", "University of Mount Union",
        "Indian Universiy - Purdue University Indianapolis"]
      }
    }
}
</script>

<style>

</style>