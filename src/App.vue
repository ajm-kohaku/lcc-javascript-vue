<template>
  <div>
    <nav class="site-nav navbar navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              ><span>Intro</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="Welcome"
              ><span>Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="assignment-2"
              ><span>Assignment 2</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="assignment-3"
              ><span>Assignment 3</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="assignment-4"
              ><span>Assignment 4</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="assignment-5"
              ><span>Assignment 5</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/assignment-6"
              ><span>Assignment 6</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/assignment-7"
              ><span>Assignment 7</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/assignment-8"
              ><span>Assignment 8</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="container" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";

body {
  background-image: url("./assets/img/mtg_selesnya_bg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-color: $main-bg-color;
  font-family: $font-family;
}
.site-nav {
  background-color: $secondary-accent;
}
.nav-link {
  color: $main-bg-color;
}
.nav-link:hover {
  color: $secondary-color;
}
.app-page-link {
  color: $primary-accent;
}

.app-page-link, .page-link:visited {
  color: $secondary-accent;
  font-style: italic;
  text-decoration: none;
}

.app-page-link:hover {
  color: $primary-color;
  text-decoration: none;
}

</style>
