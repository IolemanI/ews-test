<template>
  <section class="section-ews41">

    <div class="section-bg">
      <div class="container subscription-window">

        <div class="title subscribe-step subscribe-step-1">Get our valuable updates</div>

        <form id="subscribe" class="subscribe-step subscribe-step-1">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <input id="subscribe-firstname" type="text" placeholder="Your first name *"
                       class="form-control form-control-success form-control-danger"/>
                <input class="reset-icon" type="button"/>
                <small class="form-control-feedback d-none">Please, fill out all required field</small>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <input id="subscribe-lastname" type="text" placeholder="Your last name *"
                       class="form-control form-control-success form-control-danger"/>
                <input class="reset-icon" type="button"/>
                <small class="form-control-feedback d-none">Please, fill out all required field</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <input id="subscribe-email" type="text" placeholder="Your email *"
                       class="form-control form-control-success form-control-danger"/>
                <input class="reset-icon" type="button"/>
                <small class="form-control-feedback d-none">Please, fill out all required field</small>
              </div>
            </div>
            <div class="col-md-2 text-center">
              <button id="btn-subscribe" type="submit" class="btn btn-secondary text-uppercase subscribe">
                Subscribe
                <span class="letter-icon"></span>
              </button>
            </div>
          </div>
          <div class="block-help d-flex">
            <small class="block-help-required text-muted" id="required">
              * Required fields. Your privacy is important to us. Learn more about our <a href="/privacy-policy" class="text-muted">Privacy Policy</a>
            </small>
            <small class="block-help-subscription text-muted" id="required-subscribe">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="checkbox" class="form-control " aria-label=""/>
                  </div>
                </div>
                <p class="w-90">
                  Yes, I agree to receive emails, newsletters, updates on news, events and offers from your company*
                </p>
              </div>
            </small>
          </div>
        </form>
        <div class="finish-step subscribe-step-2 d-none">
          <div class="ion ion-icon ion-ios-checkmark-outline"></div>
          <div class="title mt-4">Thank you for subscription.</div>
          <div class="subscribe-step-2-message subtitle mt-4 mb-2">We will do our best to send only useful info for you.</div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      reviews () {
        return this.$store.state.reviews.list
      }
    },
    watch: {

    },
    methods: {

    },
    mounted: function () {

    }
  }
</script>

<style scoped lang="scss">
  .section-ews41{
    margin-bottom: 0;
    position: relative;
    z-index: 2;

    @media(max-width: $sm) {
      padding-right: 1.9rem;
      padding-left: 1.9rem;
      margin-top: -3.5rem;
      width: 100%;
    }
  }

  .finish-step {
    .ion-icon {
      background-image: url('/sections/section-ews41/imgs/filled-subscription.png');
      font-size: 4.4rem;
      color: transparent;
      background-size: contain;
      width: 4rem;
      height: 4rem;
    }
    .subtitle {
      font-size: 1rem;
      color: $color-primary;
    }
  }

  .reset-icon  {
    border:1px solid transparent;
    background-color: transparent;
    display: none;
    outline: 0;
    cursor: pointer;
    position: absolute;
    width: 2.5rem;
    right: 0;
    top: 0;
    height: 2.25rem;
  }

  .form-control.form-control-danger:not(.form-control-success) + .reset-icon {
    display: inline-block;
  }

  .form-group {
    position: relative;
  }

  .section-bg {
    max-width: 1150px;
    width: 100%;
    position: absolute;
    min-height: 20px;
    background-color: #F2F3F6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 3px 30px 1px rgba(0, 0, 0, 0.24);
    padding-top: 1.9rem;
    padding-bottom: 1.5rem;

    @media(max-width: $sm) {
      position: relative;
      transform: none;
      top: auto;
      left: auto;
      padding-right: 1.9rem;
      padding-left: 1.9rem;
      padding-bottom: 1.9rem;
    }
  }

  .title {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    color: $color-primary;
    margin-bottom: 1.2rem;

    @media(max-width: $xs) {
      font-size: 1rem;
    }
  }

  .block-help {

    .block-help-required {
      padding-top: 0.25rem;
      font-size: .75rem;
    }

    .block-help-subscription {
      padding-top: 0.25rem;
      font-size: .75rem;
      word-wrap: break-word;
      margin-left: auto;

      .input-group{
        width: 320px;
        margin-right: -25px;
        input{
          margin-right: .25rem;
          width: 15px;
          height: 15px;
        }
        .has-danger{
          box-shadow: 0 0 0 1px #E31B1F;
        }
      }
    }

    @media(max-width: $sm) {
      flex-direction: column-reverse;
      margin-top: .5rem;

      .block-help-subscription {

        .input-group{
          width: 100%;
          margin-right: 0;
        }
      }
    }
  }

  .block-success {
    padding-top: 1rem;
    font-weight: bold;
    line-height: 1.35rem;
    font-size: 0.885rem;

    .icon {
      font-size: 1.35rem;
      margin-left: 2px;
      margin-right: 8px;
      color: $color-secondary;
      vertical-align: middle;
    }
  }

  .form-control {
    font-size: 0.9rem;
  }

  .subscribe {

    @media(max-width: $sm) {
      width: 100%;
    }
  }

  .letter-icon {
    margin-left: 12px;

    &:before {
      background-image: url('/sections/section-ews41/imgs/icon-mail.png');
      content: $empty-content;
      top: 10px;
      height: 1rem;
      width: 1.1rem;
      position: absolute;
      background-size: 1.1rem;
      background-repeat: no-repeat;
    }
  }

  .subscribe:hover {
    background-color:  $color-primary;
    border-color:  $color-primary;
    box-shadow: 0 0 0 2px $color-primary;
  }

  .input-group-text{
    padding: 0;
    border: 0;
    background: unset;
  }

  .w-90{
    margin: 0;
    width: 90%;
  }

  @media(max-width: $sm) {
  }
  @media (min-width: 0) and (max-width: $xs) {
  }
  @media (min-width: $md){
  }
</style>

<style lang="scss">

</style>
