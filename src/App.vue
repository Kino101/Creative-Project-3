<template>
<div id="app">
  <div class="mainWrapper">
    <h1 class="mainTitle">My Garage Sale</h1>
  </div>
  <div id="nav">
    <router-link class="navLink" to="/">Play</router-link>
    <router-link class="navLink" to="/Winnings">Winnings</router-link>
    <router-link class="navLink" to="/AllPossible">All Possible Rewards</router-link>
  </div>
  <router-view />
  <footer>
    <div class="footer-bottom">
      <a href="https://github.com/Kino101/Creative-Project-3">GitHub</a>
    </div>
  </footer>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  background-color: #d2dae2;
}

#app {
  font-family: 'Handlee', cursive;
  text-align: center;
  color: #1e272e;
}

.mainWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mainTitle {
  font-family: 'Dancing Script', cursive;
  text-align: center;
  font-size: 50px;
  background-color: #ff3f34;
  width: 800px;
  border-radius: 10px;
  padding: 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navLink {
  padding: 10px;
  font-size: 20px;
}

/* Footer */
footer {
  display: flex;
  bottom: 0px;
  left: 0px;
  margin-top: auto;
}

footer .footer-bottom {
  display: flex;
  font-size: 1.1em;
  font-weight: normal;
  text-align: center;
  height: 50px;
  width: 100%;
  margin-top: 30px;
  background-color: #000;
  align-items: center;
  justify-content: center;
  color: #FFFFFE;
  bottom: 0px;
  left: 0px;
}

.footer-bottom a {
  text-decoration: none;
  color: #FFFFFE;
}

.footer-bottom a:hover {
  color: #42b983;
}

/* //Footer */
</style>
