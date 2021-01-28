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
      offerExpires: null
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
      let  expiryMsg = "Offer expires next ";
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
  margin: 0px;
  display: grid;
  grid-template-areas: "inner-content sidebar gutter";
  grid-template-columns: auto 250px 280px;
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
  padding: 0px 15px;
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
  width: 280px;
  height: 98px;
  float: left;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin: 0px;
}
#event-location {
  text-transform: uppercase;
  text-align: center;
  font-size: 120%;
  margin-top: 10px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 10px 0px;
}
#event-rate {
  text-decoration: line-through;
  float: left;
  padding-top: 10px;
}
#early-bird-price {
  font-size: 440%;
  color: #ffb87a;
  padding: 15px 0px 20px 0px;
  margin: 15px 0px;
}
#early-bird-expire {
  text-transform: uppercase;
  color: #ffb87a;
  font-size: 75%;
}
@media (min-width: 768px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 100%;
  }
}
</style> 