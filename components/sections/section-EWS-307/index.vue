<template>
  <section class="section-ews307">
    <div class="bg">
      <div class="container">
        <div class="box-shadow">
          <div class="row">
            <div class="col-md-7">

              <div class="contacts-form">

                <form id="contact" class="contact-form step step-1">
                  <div class="row">
                    <div class="col-md-6">

                      <div class="form-group">
                        <label class="form-control-label " for="first-name">First name *</label>
                        <input id="first-name" type="text" class="form-control form-control-success form-control-danger"/>
                        <input class="reset-icon" type="button"/>
                        <small class="form-control-feedback d-none">Please, fill out all required field</small>
                      </div>

                    </div>
                    <div class="col-md-6">

                      <div class="form-group">
                        <label class="form-control-label" for="last-name">Last name *</label>
                        <input id="last-name" type="text" class="form-control form-control-success form-control-danger"/>
                        <input class="reset-icon" type="button"/>
                        <small class="form-control-feedback d-none">Please, fill out all required field</small>
                      </div>

                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-control-label" for="email">Email address*</label>
                    <input id="email" type="text" class="form-control form-control-success form-control-danger"/>
                    <input class="reset-icon" type="button"/>
                    <small class="form-control-feedback d-none">Please, fill out all required field</small>
                  </div>

                  <div class="form-group">
                    <label class="form-control-label" for="desc">Your message *</label>
                    <textarea id="desc" class="form-control form-control-danger" rows="6"></textarea>
                    <small class="form-control-feedback d-none">Please, fill out all required field</small>
                  </div>

                  <label class="custom-control custom-checkbox mt-4 send-nda-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Please send me NDA</span>
                  </label>

                  <div class="subscription-radio">
                    <label class="custom-control custom-checkbox mt-2" >
                      <input type="radio" class="subscription-radio-input custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Yes, I agree to receive emails, phone calls, texts, newsletters, updates on news, events and offers from your company.</span>
                      <span class="tooltiptext">Here at ElifTech we take your privacy seriously and will only use your personal information to administer your account and to provide the services you have requested from us.
However, from time to time we would like to contact you via email with details on other offers, services we provide and our news. Please tick respective box to receive or not our newsletters and other updates.
For more information about our Privacy Policy please follow the link</span>
                    </label>
                    <label class="custom-control custom-checkbox mt-2" >
                      <input type="radio" class="subscription-radio-input custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">No, please don't keep me updated on ElifTech's news, recent blog posts, events and offers.</span>
                      <span class="tooltiptext">Here at ElifTech we take your privacy seriously and will only use your personal information to administer your account and to provide the services you have requested from us.
However, from time to time we would like to contact you via email with details on other offers, services we provide and our news. Please tick respective box to receive or not our newsletters and other updates.
For more information about our Privacy Policy please follow the link</span>
                    </label>
                    <small class="form-control-feedback d-none">Please select one of the answers</small>
                  </div>
                  <p class="privacy-policy-link">For more information about our Privacy Policy please follow the <a href="/privacy-policy">link</a></p>

                  <div class="text-center mt-5">
                    <button type="submit"
                            class="btn btn-rounded btn-outline-secondary btn-hover-shadow btn-md text-uppercase">
                      Submit
                    </button>
                  </div>
                </form>

                <div class="finish-step step step-2 d-none">
                  <div class="ion ion-icon icons ion-ios-checkmark-outline mt-4"></div>

                  <div class="title mt-5">THANK YOU</div>
                  <div class="title">for contacting us!</div>

                  <div class="step-2-message mt-4 mb-5">We will get back to you shortly</div>

                  <a href="/contacts" class="btn go-back-btn btn-rounded btn-hover-shadow btn-outline-primary mt-5 mb-5" data-dismiss="modal">Go back to
                    website
                  </a>
                </div>

              </div>

            </div>
            <div class="col-md-5 col-bg-secondary">

              <div class="contacts-info">

                <div class="text-center header">Contact us:</div>

                <a href="mailto:info@eliftech.com" class="btn btn-rounded btn-block btn-contact-info">
                  <span class="ion icons ion-ios-mail"></span>
                  info@eliftech.com
                </a>

                <a href="tel:13025432012" class="btn btn-rounded btn-block btn-contact-info">
                  <span class="ion icons ion-ios-call"></span>
                  +1 (302) 543 20 12
                </a>

                <div class="text-center header find-us">Find us:</div>

                <ul class="b-social-links row justify-content-between">
                  <li class="col facebook"><a href="https://www.facebook.com/eliftech/" target="_blank"><span class="socicon-facebook"></span></a></li>
                  <li class="col linkedin"><a href="https://www.linkedin.com/company-beta/10329604/" target="_blank"><span class="socicon-linkedin"></span></a></li>
                  <li class="col twitter"><a href="https://twitter.com/ElifTech" target="_blank"><span class="socicon-twitter"></span></a></li>
                  <li class="col github"><a href="https://plus.google.com/u/0/+Eliftech" target="_blank"><span class="socicon-github"></span></a></li>
                  <li class="col slideshare"><a href="https://www.slideshare.net/ElifTech" target="_blank"><span class="socicon-slideshare"></span></a></li>
                  <li class="col youtube"><a href="https://www.youtube.com/channel/UCETaw5-3WLLhGQLDY7-lUww" target="_blank"><span class="socicon-youtube"></span></a></li>
                  <li class="col clutch"><a href="https://clutch.co/profile/eliftech" target="_blank"><span class="socicon-clutch"></span></a></li>
                </ul>

              </div>

            </div>
          </div>
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

    },
    watch: {

    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style scoped lang="scss">
  $margin-0-auto: 0 auto;
  $tooltiptext-content: '';
  $animation-speed: 200ms;

  .section-ews307{
    margin-bottom: 0;
    margin-top: -100px;

    @media(max-width: $sm) {
      background-color: #F2F3F6;
      margin-top: -100px;
    }
  }
  .bg{
    background-color:  $grey-bg;
    padding-bottom: 7rem;
    @media(max-width: $sm) {
      padding-bottom: 0;
    }
  }
  .container{
    margin-top: 0;
    position: relative;
    top: -2rem;
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
    margin-top: 37px;
  }

  .form-control.form-control-danger:not(.form-control-success) + .reset-icon {
    display: inline-block;
  }
  .form-control{
    font-size: .9rem;
  }
  .form-group {
    position: relative;
  }

  .box-shadow {
    @media(max-width: $sm) {
      box-shadow: none;
      background-color: transparent;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  .contacts-form {
    padding: 3.875rem 3.875rem;

    .finish-step {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      .ion-icon {
        width: 4.5rem;
        background: $color-secondary;
        border-radius: 50%;
        height: 4.5rem;
        margin: $margin-0-auto;
      }
      .ion-ios-checkmark-outline::before {
        vertical-align: text-top;
        color: $white;
        margin-top: -5px;
      }
      .go-back-btn{
        border-width: 2px;
        height: 3rem;
        font-weight: 500;
        line-height: 1.8;
        width: 11.4rem;
        margin: $margin-0-auto;
      }
    }

    @media(max-width: $sm) {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 1.7rem;
      margin-top: 0;
      background-color: $white;
      box-shadow: 0 9px 1rem -3px rgba(0, 0, 0, 0.2);

      .finish-step{
        position: fixed;
        z-index: 1100;
        background-color: $color-primary;
        color: white;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .title{
          color: #FFF;
        }
        .go-back-btn{
          border-color: $color-secondary;
          color: $white;
        }
      }
    }
  }

  .contacts-info {
    padding: 4rem 2rem;
    background-color: $color-secondary;
    height: 100%;

    @media(max-width: $sm) {
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 3.875rem;
    }

    .header {
      font-weight: bold;
      color: $white;
      text-transform: uppercase;
      margin-bottom: 3.5rem;

      @media(max-width: $sm) {
        color: $color-primary;
      }

      &.find-us {
        margin-top: 4rem;
        margin-bottom: 2rem;
      }
    }

    .btn-contact-info {
      $button-height: 3.125rem;
      background-color: rgba($color-primary,.25);
      color: $white;
      font-weight: normal;
      position: relative;
      height: $button-height;
      line-height: 2rem;
      padding-left: 3rem;
      padding-right: 3rem;
      font-size: 0.875rem;
      border: 0 none;
      margin-bottom: 1rem;

      @media(max-width: $sm) {
        color: $color-primary;
        background-color: $white;
      }

      .icons {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: $button-height;
        background-color: $color-primary;
        color: $white;
        width:  $button-height;
        height: $button-height;
        box-shadow: 0 2px 5px rgba(0,0,0,.1);
        font-size: 1.5rem;
        transition: all $animation-speed;

        @media(max-width: $sm) {
          top: -.25rem;
          left: -.25rem;
          width: 3.5rem;
          height: 3.5rem;
          font-size: 2rem;
          background-color: $color-secondary;
          box-shadow: 0 9px 2.25rem -4px rgba(0, 0, 0, 0.2);
        }
        &:before {
          line-height: $button-height;

          @media(max-width: $sm) {
            line-height: 3.5rem;
          }
        }
      }

      &:hover {
        .icons {
          box-shadow: 0 3px 7px 2px rgba(0,0,0,.2);
          font-size: 1.75rem;
        }
      }
    }
  }

  .b-social-links {
    list-style: none;
    padding: 1rem / 3  0;
    text-align: center;

    li {
      padding: 0;
      a {
        display: block;
        border-radius: 80px;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 28px;
        text-shadow: 0 3px 7px rgba(0,0,0,.1);

        @media(max-width: $sm) {
          font-size: 1.75rem;
        }
        &, &:focus, &:hover, &:visited {
          color: $white;
          text-decoration: none;

          @media(max-width: $sm) {
            color: $color-primary;
            text-shadow: none;
          }
        }
        &:hover {
          background-color: $white;
          color: $color-secondary;
          text-shadow: none;
          box-shadow: 0 3px 7px rgba(0,0,0,.1);

          @media(max-width: $sm) {
            background-color: transparent;
            color: $color-secondary;
          }
        }
      }
      &.clutch {
        a {
          .socicon-clutch {
            @media(max-width: $sm) {
              background-image: url(/sections/section-ews307/soc-clutch@2x.png);
              background-size: 20px 45px;
              width: 20px;
              height: 22px;
            }
          }

          &:hover {
            background-color: transparent;
            box-shadow: none;

            .socicon-clutch {
              background-position: 0 -32px;

              @media(max-width: $sm) {
                background-position: 0 -22px;
              }
            }
          }
        }
      }
      &.googleplus {
        font-size: 20px;
      }
    }
  }

  .subscription-radio{
    .form-control-feedback{
      color: #EE3361;
    }
  }

  .subscription-radio .custom-control{
    & .tooltiptext {
      visibility: hidden;
      width: 320px;
      background-color: #555;
      color: #FFF;
      text-align: center;
      padding: 1rem;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      margin-left: -60px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    & .tooltiptext::after {
      content: $tooltiptext-content;
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }

    &:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }

  .privacy-policy-link{
    font-size: .8rem;
    a{
      text-decoration: underline;
    }
  }

  .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {
    background: #F7F5F5 none;
  }
  .custom-control-indicator {
    background-color: #F7F5F5;
    border: 1px solid #E2E2E2;
    background-size: 75% 75%;
  }
  .custom-control-input:checked ~ .custom-control-indicator {
    background-color: $color-secondary;
    border: 1px solid $color-secondary;
  }
  .custom-control-indicator {
    position: absolute;
    top: .25rem;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    user-select: none;
    background: #ddd no-repeat 50%;
    background-size: 50% 50%;
  }

  .subscribe-danger{
    box-shadow: 0 0 0 1px #E31B1F;
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
