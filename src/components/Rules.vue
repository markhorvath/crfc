<template>
      <div class="wrapper">
          <h2 id="scoring">Scoring</h2>
          <div>
            <p>Scoring in robotic football is based on NCAA American football scoring with some
              incentives added to achieve certain technical innovations. Because passing is much
              harder than running the ball for robots, extra points are awarded for successful
              passes.
            </p>
            <table>
              <tr>
                <th>Scoring Actions</th>
                <th>Points</th>
              </tr>
              <tr>
                <td>Touchdown</td>
                <td>6</td>
              </tr>
              <tr>
                <td>PAT (Point After Touchdown) (kick)</td>
                <td>1</td>
              </tr>
              <tr>
                <td>PAT (run or pass)</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Field Goal</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Passing over 10 ft. to a receiver past the line of scrimmage</td>
                <td>4 (6 if caught)</td>
              </tr>
              <tr>
                <td>Passing 0-10 ft. to a receiver past the line of scrimmage</td>
                <td>3 (4 if caught)</td>
              </tr>
              <tr>
                <td>Safety</td>
                <td>2</td>
              </tr>
              <tr>
                <th>Penalties</th>
                <td></td>
              </tr>
              <tr>
                <td>Delay of Game</td>
                <td>1 (to opponent)</td>
              </tr>
              <tr>
                <td>Offsides</td>
                <td>1 (to opponent)</td>
              </tr>
            </table>
          </div>

          <h2 id="rules">Rules</h2>
          <h4 id="link">The most recent set of rules (8/17) can be found <a href="https://www3.nd.edu/~rfc/pages/about/rules/final_rules_1718.pdf">here.</a></h4>
      </div>
</template>

<script>
export default {
    data() {
      return {
        menus: ["Home", "About", "News", "Build a Team", "Past Seasons", "Rules & Scoring",
        "Sponsors", "Contact Us"],
        url: "localhost:8080/about"
      }
    }
}
</script>

<style scoped>
table {
  width: 50%;
  margin: 0 25%;
}

tr, th, td {
  border: 1px solid black;
  text-align: center;
  padding: 5px;
}

th {
  background: grey;
  color: white;
  font-size: 22px;
}

td {
  font-size: 18px;
}

p {
  width: 60%;
  margin: 10px 20%;
  padding: 10px 15px;
  font-size: 16px;
  font-style: bold;
}

#scoring, #rules {
  text-align: center;
  margin-top: 5px;
}

#link {
  text-align: center;
}
</style>