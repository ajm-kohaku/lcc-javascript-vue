<template>
  <section class="content content-bg">
    <div class="inner-content">
      <h2 class="convention-logo">TableTop Convention</h2>
    </div>
    <div class="sidebar">
      <h3>Convention Details</h3>
      <div id="event-location" v-text="eventDetails.eventLocation"></div>
      <div id="event-rate" v-text="eventDetails.eventRate"></div>
      <div id="early-bird-price">{{ earlyBirdPrice }}</div>
      <p>Convention Rate when you pre-register</p>
      <div id="early-bird-expire" v-html="offerExpires"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "JSAssignment4",
  data: () => {
    return {
      eventDetails: {
        eventLocation: "Rosemont Convention Center",
        eventRate: 250,
        earlyBirdDiscount: 20,
      },
      offerExpires: null,
    };
  },
  created() {
    this.offerExpires = `${this.offerCalc}`;
  },
  computed: {
    earlyBirdPrice() {
      return (
        this.eventDetails.eventRate *
        ((100 - this.eventDetails.earlyBirdDiscount) / 100)
      );
    },
    offerCalc() {
      let weekFromToday = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
      );
      let dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let day = dayNames[weekFromToday.getDay()];
      let date = weekFromToday.getDate();
      let month = monthNames[weekFromToday.getMonth()];
      let year = weekFromToday.getFullYear();
      let expiryMsg = "Offer expires next ";
      expiryMsg += day + "<br/>(" + date + " " + month + " " + year + ")";
      return expiryMsg;
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  grid-area: content;
  width: 100vw;
  margin: 0;
  display: grid;
  grid-template-areas: "inner-content sidebar gutter";
  grid-template-columns: auto 15.625em 17.5em;
}
.content-bg {
  background: var($main-bg-color);
  background-image: url("../assets/img/rpg-wilderness.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100vw !important;
  height: 100vh;
}
.sidebar {
  grid-area: sidebar;
  padding: 0 0.9375em;
  margin: 0;
  text-align: center;
  overflow: hidden;
  background-color: black;
  font-family: "Open Sans", sans-serif;
  color: $main-bg-color;
}
.inner-content {
  grid-area: inner-content;
  padding: 1rem;
}
.convention-logo {
  background: url("../assets/img/table_conn_logo02.png") no-repeat;
  width: 17.5em;
  height: 6.125em;
  float: left;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
}
#event-location {
  text-transform: uppercase;
  text-align: center;
  font-size: 120%;
  margin-top: 0.625em;
  border-top: 0.0625em solid #fff;
  border-bottom: 0.0625em solid #fff;
  padding: 0.625em 0;
}
#event-rate {
  text-decoration: line-through;
  float: left;
  padding-top: 0.625em;
}
#early-bird-price {
  font-size: 440%;
  color: #ffb87a;
  padding: 0.9375em01.25em 0;
  margin: 0.9375em 0;
}
#early-bird-expire {
  text-transform: uppercase;
  color: #ffb87a;
  font-size: 75%;
}
@media (min-width: 48em) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 62em) {
  .container {
    max-width: 100%;
  }
}
</style> 