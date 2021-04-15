<template>
  <div>
    <nav class="site-nav navbar navbar-expand-md">
      <a class="navbar-brand title" href="https://kohaku.me">
        <img src="https://kohaku.me/profile.jpg" />
        Kohaku's Journey
      </a>
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
          <li class="nav-item">
            <router-link class="nav-link" to="/assignment-9"
              ><span>Assignment 9</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/assignment-10"
              ><span>Assignment 10</span>
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
  name: 'App',
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

body {
  background-image: url('./assets/img/mtg_selesnya_bg.png');
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

.title img {
  max-width: 3rem;
  max-height: 3rem;
  border: 0.15rem solid hsla(245, 70%, 50%, 0.2);
  background-color: gray;
  border-radius: 50%;
  margin-right: .15em;
}

.title {
  font-family: "Aclonica", sans-serif;
  font-size: 1.25em;
  color: $main-bg-color;
}

.app-page-link,
.page-link:visited {
  color: $secondary-accent;
  font-style: italic;
  text-decoration: none;
}

.app-page-link:hover {
  color: $primary-color;
  text-decoration: none;
}
</style>
