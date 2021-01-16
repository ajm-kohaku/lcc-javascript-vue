<template>
  <nav class="site-nav navbar navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-content">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/"><span>Intro</span> </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/welcome"
            ><span>Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/assignment-2"
            ><span>Assignment 2</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/assignment-3"
            ><span>Assignment 3</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/assignment-4"
            ><span>Assignment 4</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/assignment-5"
            ><span>Assignment 5</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/assignment-6"
            ><span>Assignment 6</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view class="container" />
</template>

<style lang="scss">
@import "./variables.scss";
@import "~bootstrap/scss/bootstrap";
body {
  background-image: url("./assets/img/mtg_selesnya_bg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-color: $main-bg-color;
}

.site-nav {
  background-color: $secondary-accent;
}

a {
  color: $main-bg-color;
}

a:hover {
  color: $secondary-color;
}
</style>
