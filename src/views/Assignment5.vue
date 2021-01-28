<template>
  <div>
    <h2>Using Conditionals</h2>
    <form v-on:submit="validateForm()" class="row g-3">
      <div class="form-check form-check-inline">
        <label class="col-form-label mr-2 ml-3" for="grade-input"
          >Enter a grade value between 0 and 100</label
        >
        <input
          class="form-control form-control-sm"
          type="text"
          id="grade-input"
          placeholder="calculate"
          ref="gradeInput"
          v-model="grade"
          @keypress="validateInput($event)"
          @keypress.enter="validateForm()"
        />
      </div>
      <div class="form-check form-check-inline">
        <button class="btn btn-primary btn-sm">Submit</button>
      </div>
    </form>
    <div v-if="message && !isError" v-text="message" class="mx-5 h5 text-primary"></div>
    <div v-else-if="isError" v-text="message" class="mx-5 h5 text-danger"></div>
  </div>
</template>

<script>
export default {
  name: "Assignment5",
  data() {
    return {
      grade: "",
      message: "",
      isError: false,
    };
  },
  methods: {
    validateInput(event) {
      let regex = new RegExp("^[0-9]");
      let key = String.fromCharCode(
        event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    },
    validateForm() {
      this.message = "";
      this.isError = false;
      let letterGrade;
      let grade = parseInt(this.grade);
      if (grade >= 90 && grade <= 100) {
        letterGrade = "A";
      } else if (grade >= 80 && grade <= 89) {
        letterGrade = "B";
      } else if (grade >= 67 && grade <= 79) {
        letterGrade = "C";
      } else if (grade >= 60 && grade <= 67) {
        letterGrade = "D";
      } else if (grade >= 0 && grade <= 59) {
        letterGrade = "F";
      } else if (grade > 100) {
        letterGrade = "Z";
        this.message =
          "Look at you, overachiever much? But you can't get over 100.";
      } else {
        letterGrade = "Z";
        this.message = "Type something! Come on! I dare ya!";
      }

      let validGrades = ["A", "B", "C", "D", "F"];
      if (validGrades.includes(letterGrade)) {
        this.message = `Number grade = ${grade} Letter grade = ${letterGrade}`;
      } else {
        if (!this.message) {
          this.message = `${grade} is not a valid grade.`;
        }
        this.isError = true;
      }
    },
  },
};
</script>

<style lang="scss">
label {
  color: black;
}
</style>