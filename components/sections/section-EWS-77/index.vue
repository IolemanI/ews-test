<template>
  <section class="section-ews77 case-e text-center">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
          <h2 class="m-0 d-inline-block"><span class="section-icon"></span>Have a project idea?</h2>
        </div>
        <div class="col-md-4">
          <button id="openModal" class="btn btn-lg btn-white btn-hover-secondary btn-rounded btn-shadow text-uppercase d-inline-block">
            Let’s discuss it now! <span class="btn-icon ion ion-ios-arrow-forward"></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['isCaseE'],
    watch: {

    },
    methods: {
    },
    mounted: function () {
    }
  }
</script>

<style scoped lang="scss">
  $case-a-background: #2DB7C9;
  $case-c-background: #21569B;
  $section-d-icon-margin: 0 2.5rem 0 0;

  .section-ews77 {
    @media(max-width: $sm) {
      padding: 3.25rem 0;
    }

    .section-icon {
      margin: $margin-0-auto;
      width: 70px;
      height: 76px;
      background-repeat: no-repeat;

      @media(max-width: $sm) {
        display: none;
      }
    }

    .btn {
      display:flex;
      flex-direction: row;
      align-items: center;
      padding-top: 1.1rem;

      @media(max-width: $sm) {
        margin-top: 1rem;
        font-size: 0.9rem;
        padding: 1.2rem 2rem;
      }
    }
    h2 {
      padding-top: 2rem;
      margin-bottom: 3rem;
      color: white;
      text-align: start;

      @media(max-width: $sm) {
        font-size: 1rem;
        line-height: 1.75rem;
        padding-left: 3rem;
        padding-right: 3rem;
      }
    }

    &.case-e {
      background-repeat: no-repeat;
      background-size: cover;

      background-image: url('/sections/section-ews77/imgs/idea-bg.jpg');
      background-color: $case-c-background;
      padding-top: 8rem;
      padding-bottom: 8rem;
      margin-bottom: 70px;

      @media(max-width: $sm) {
        background-size: cover;
        background-image: url('/sections/section-ews77/imgs/idea-bg@2x.jpg');
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      h2 {
        padding: 0;
      }

      .section-icon {
        display: inline-block;
        margin: $section-d-icon-margin;
        width: 60px;
        height: 76px;
        vertical-align: middle;
        background-image: url('/sections/section-ews77/imgs/idea-icon.png');

        @media(max-width: $sm) {
          width: 30px;
          height: 34px;
          background-size: 30px 34px;
          margin-right: 1rem;
          margin-left: -1rem;
        }
      }
      .btn {
        .btn-icon {
          margin-right: -1rem;
          margin-left: 1rem;
          color: $color-secondary;
          font-size: 1.25rem;
          vertical-align: middle;
          @media(max-width: $sm) {
            display: none;
          }
        }
        &:hover .btn-icon {
          color: $white;
        }

        @media(max-width: $sm) {
          font-size: 0.75rem;
          padding: .6rem 1rem;
        }
      }
    }

    .subtitle {
      color: $white;
      margin-bottom: 2.5rem;
    }

    .info {
      font-size: 1.2rem;
      color: $color-font;
    }

    .ion-icon {
      color: $color-secondary;
      position: relative;
      font-size: 5.4rem;
    }
  }


  @media(max-width: $sm) {
  }
  @media (min-width: 0) and (max-width: $xs) {
  }
  @media (min-width: $md) {
  }
</style>

<style lang="scss">

</style>
