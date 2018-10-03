<template>
  <section :class="isCaseA?'section-ews21 case-a':'section-ews21' + isCaseB?'section-ews21 case-b':'section-ews21'">

    <div class="container">
      <div class="row">


        <div class="col-md-5 offset-md-2 btn-center">
          <button id="newProject" class="btn btn-pink btn-rounded btn-shadow btn-lg">
            {{buttonCaption1CaseA}}
            <!--{{#if isCaseB }}{{buttonCaption1CaseB}}{{/if}}-->
          </button>
        </div>
        <div class="col-md-5 btn-center">
          <a href="/services" class="btn btn-cyan btn-rounded btn-shadow btn-lg">{{buttonCaption2}}</a>
        </div>

      </div>
    </div>

  </section>
</template>

<script>

  export default {
    data () {
      return {
        buttonCaption1CaseA: "Schedule My Custom Consultation",
        buttonCaption1CaseB: "Let’s start a new project together!",
        buttonCaption2: "More info",
        isCaseA: false,
        isCaseB: true,
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $block-margin: 10px 0;
  $block-padding: 10px 10px;
  $block-height: 250px;
  $block-icon-height: 152px;
  $transition-time: 0.5s;

  body.modal-backdrop-bg .modal-backdrop {
    background-color: transparent;
    display: none;
  }

  .section-ews21 {
    padding-bottom: 3.5rem;

    @media(max-width: $sm) {
      padding-left: 2rem;
      padding-right: 2rem;
      margin-bottom: 0;
      padding-bottom: 1rem;

      .btn-lg {
        font-size: .9rem;
        padding: 1rem 0;
      }
    }
  }

  .container {
    .btn {
      font-weight: normal;

      &:hover {
        -webkit-box-shadow: 0 .5rem 2rem 0 rgba(0,0,0,0.3);
        -moz-box-shadow: 0 .5rem 2rem 0 rgba(0,0,0,0.3);
        box-shadow: 0 .5rem 2rem 0 rgba(0,0,0,0.3);
      }
    }


    @media(max-width: $sm) {
      .btn-center {
        text-align: center;
        margin-bottom: 2rem;
      }

      .title {
        color: $white;
      }

      .subtitle {
        color: $white;
      }

      .btn {
        display: block;
        white-space: normal;
        width: 100%;
        &.btn-cyan {
          background-color: $white;
          border: 3px solid $color-secondary;
          color: $color-secondary;
          box-shadow: none;
        }
      }
    }
  }

  .block-modal {
    .modal-dialog {
      max-width: 390px;

      .modal-content {
        border: none;
        box-shadow: 0 5px 40px rgba(0,0,0,.1);
        transition: all .5s;
        padding-top: 2rem;

        .modal-body {
          padding: 1rem 3rem;

          .block-title {
            color: $color-primary;
            margin-bottom: 1.5rem;
            font-family: $font-family-base;
            font-weight: 700;
            font-size: 1.05rem;
            line-height: 1.4rem;
            text-align: center;
          }

          .block-text {
            font-size: 1rem;
            text-align: justify;
            line-height: 1.9rem;
          }
        }

        .close {
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 4rem;
          color: $color-secondary;
          line-height: 0;

          span {
            line-height: 0;
            &:before {
              line-height: 0;
            }
          }
        }
      }
    }
  }

  .section-title {
    text-align: center;
    margin-bottom: 3.6rem;
  }

  .block {
    display: block;
    margin: $block-margin;
    position: relative;
    padding: $block-padding;
    height: $block-height;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
    transition: all $transition-time;
    overflow: hidden;
    background: white;

    @media(max-width: $sm) {
      height: 175px;
      margin-bottom: 0;
    }

    @media (min-width: 0) and (max-width: $xs) {
      height: 150px;
      margin-bottom: 0;
      padding: 0 5px;
    }

    .block-title {
      color: $color-primary;
      line-height: 1.8rem;
      margin-bottom: 10px;
      font-size: 1.1rem;
      font-family: $font-family-base;
      font-weight: 700;
      transition: all $transition-time;

      @media(max-width: $sm) {
        font-size: 0.875rem;
        line-height: 1.2rem;
      }

      @media (min-width: 0) and (max-width: $xs) {
        font-size: 0.78rem;
      }
    }

    .block-icon {
      height: $block-icon-height;
      transition: opacity $transition-time;
      background-repeat: no-repeat;
      background-position: center center;

      @media(max-width: $sm) {
        background-size: $block-icon-height / 2;
        height: 100px;
      }

      @media (min-width: 0) and (max-width: $xs) {
        background-size: $block-icon-height / 2.6;
        height: 100px;
      }

      &.icon-0 {
        background-image: url('/images/services/outsourcing-icon.png');
      }
      &.icon-1 {
        background-image: url('/images/services/development-icon.png');
      }
      &.icon-2 {
        background-image: url('/images/services/team-icon.png');
      }
      &.icon-3 {
        background-image: url('/images/services/quality-icon.png');
      }
      &.icon-4 {
        background-image: url('/images/services/architecture-icon.png');
      }
      &.icon-5 {
        background-image: url('/images/services/audit-icon.png');
      }
      &.icon-6 {
        background-image: url('/images/services/ui-icon.png');
      }
      &.icon-7 {
        background-image: url('/images/services/security-icon.png');
      }
    }

    .block-text {
      color: $color-font;
      opacity: 0;
      transition: opacity $transition-time;
      line-height: 1.3rem;
      padding: 0 0.35rem;
      font-size: 0.73rem;
      text-align: start;

      @media(max-width: $sm) {
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }

    .block-content {
      transition: transform $transition-time;
    }
  }

  @media(max-width: $sm) {
    .service-modal{
      top: 90px;
    }
  }

  @media (min-width: 0) and (max-width: $xs) {
    .col-6 {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  @media (min-width: $md){
    .block:hover {
      position: relative;
      transform: scale(1.16);
      box-shadow: 0 15px 20px 10px rgba(0,0,0,0.05);
      border-radius: 5px 5px 0 0;
      border-top: 5px solid $color-secondary;
      padding-top: 1.5rem;
      z-index: 1;

      .block-title {
        transform: scale(0.85);
      }

      .block-text {
        opacity: 1;
        padding-top: 0.8rem;
      }

      .block-icon {
        opacity: 0;
      }

      .block-content {
        transform: translateY(-$block-icon-height - 8px);
      }
    }
  }

</style>
