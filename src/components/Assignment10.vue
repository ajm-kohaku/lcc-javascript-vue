<template>
  <div>
    <h1>Please join our email list</h1>
    <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="email-address">Email Address*</label>
          <input
            type="email"
            class="form-control"
            :class="{ 'is-invalid': emailClass }"
            id="email-address"
            ref="email"
            required
          />
          <div class="invalid-feedback">Email Address must be valid</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="confirm-email-address">Confirm Email Address*</label>
          <input
            type="email"
            class="form-control"
            :class="{ 'is-invalid': confirmEmailClass }"
            id="confirm-email-address"
            ref="confirmEmail"
            required
          />
          <div class="invalid-feedback" v-text="confirmEmailMessage"></div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="first-name">First Name</label>
          <input type="text" class="form-control" id="first-name" required />
        </div>
        <div class="col-md-4 mb-3">
          <label for="last-name">Last Name</label>
          <input type="text" class="form-control" id="last-name" required />
        </div>
      </div>
      <div class="form-group form-row">
        <div class="form-check col-md-2 mb-3">
          <label for="zip-code">Zip Code*</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': zipCodeClass }"
            id="zip-code"
            ref="zipCode"
            @keypress="validateZip($event)"
            maxlength="5"
            required
          />
          <div class="invalid-feedback" v-text="zipCodeMessage"></div>
        </div>
      </div>
      <div class="form-row">
        <button
          @click.prevent="validateForm"
          type="submit"
          class="btn btn-primary mr-1"
        >
          Join the list
        </button>
        <button @click.prevent="resetForm" class="btn btn-secondary mx-3">
          Reset
        </button>
      </div>
      <div v-show="isSuccess" class="text-success my-3">
        Thank you for your submission (✿◠‿◠)
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Assignment10',
  data() {
    return {
      emailClass: false,
      confirmEmailClass: false,
      confirmEmailMessage: '',
      zipCodeClass: false,
      zipCodeMessage: '',
      isSuccess: false,
    }
  },
  methods: {
    validateZip(event) {
      // eslint-disable-next-line no-useless-escape
      let regex = new RegExp('^[0-9]')
      let key = String.fromCharCode(
        event.charCode ? event.which : event.charCode,
      )

      if (event.keyCode === 13) {
        this.validateForm()
      } else if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
    },
    validEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },
    validateForm() {
      let emailAddress = this.$refs.email.value
      if (emailAddress && this.validEmail(emailAddress)) {
        this.emailClass = false
      } else {
        this.emailClass = true
      }

      let confirmEmailAddress = this.$refs.confirmEmail.value
      if (
        confirmEmailAddress &&
        confirmEmailAddress === this.$refs.email.value &&
        this.validEmail(confirmEmailAddress)
      ) {
        this.confirmEmailClass = false
      } else if (confirmEmailAddress !== this.$refs.email.value) {
        this.confirmEmailClass = true
        this.confirmEmailMessage = 'Confirmation Email Address does not match'
      } else if (!this.validEmail(confirmEmailAddress)) {
        this.confirmEmailClass = true
        this.confirmEmailMessage = 'Confirmation Email must be valid'
      }

      let zipCode = this.$refs.zipCode.value
      if (zipCode.length === 0) {
        this.zipCodeClass = true
        this.zipCodeMessage = 'Zip Code must be entered'
      } else if (zipCode.length === 5) {
        this.zipCodeClass = false
      } else if (zipCode.length !== 5) {
        this.zipCodeClass = true
        this.zipCodeMessage = 'Zip code must be 5 digits'
      }

      this.emailClass === false &&
      this.confirmEmailClass === false &&
      this.zipCodeClass === false
        ? (this.isSuccess = true)
        : (this.isSuccess = false)
      // this.resetForm()
    },

    resetForm() {
      this.emailClass = false
      this.$refs.email.value = ''
      this.confirmEmailClass = false
      this.$refs.confirmEmail.value = ''
      this.zipCodeClass = false
      this.$refs.zipCode.value = ''
    },
  },
}
</script> 