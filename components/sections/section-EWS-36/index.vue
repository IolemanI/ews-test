<template>
  <section class="section-ews36">

    <section class="case-a" v-if="isCaseA">

      <div class="container">
        <div class="section-icon"></div>
        <h2>Get FREE software<br/> architecture consultation</h2>
        <button id="openModal" class="btn btn-white btn-hover-cyan btn-rounded btn-shadow btn-lg text-uppercase">
          Request consultation
        </button>
      </div>

    </section>

    <section class="case-b" v-if="isCaseB">

      <div class="container">
        <div class="section-icon"></div>
        <h2>Free project estimate</h2>
        <div class="subtitle">You will receive your project estimate in two business days. Guaranteed.</div>
        <button id="openModal" class="btn btn-white btn-hover-pink btn-rounded btn-shadow btn-lg text-uppercase">
          Estimate my project
        </button>
      </div>

    </section>

    <section class="" v-if="isCaseC">

      <div class="container">
        <div class="section-icon"></div>
        <button id="openModal" class="btn btn-lg btn-white btn-hover-secondary btn-rounded btn-shadow text-uppercase">
          Schedule my custom consultation
        </button>
      </div>

    </section>

    <section class="" v-if="isCaseD">

      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <h2 class="m-0"><span class="section-icon"></span>Want to lear more?</h2>
          </div>
          <div class="col-md-4">
            <button id="openModal" class="btn btn-lg btn-white btn-hover-secondary btn-rounded btn-shadow text-uppercase">
              Ask us anything
            </button>
          </div>
        </div>
      </div>

    </section>

  </section>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['isCaseA', 'isCaseB', 'isCaseC', 'isCaseD'],
    computed: {

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
  $case-a-background: #2DB7C9;
  $case-c-background: #21569B;
  $section-d-icon-margin: 0 2.5rem;

  .section-ews36 section{

    @media(max-width: $sm) {
      padding: 3.25rem 2rem;
    }
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
    font-family: $font-family-base;
    font-weight: bold;
    @media(max-width: $sm) {
      font-size: 0.8rem;
      padding: 1.1rem 1.5rem;
    }
  }
  h2 {
    padding-top: 2rem;
    margin-bottom: 3rem;
    color: white;

    @media(max-width: $sm) {
      font-size: 1.1rem;
      line-height: 1.75rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .case-a {
    margin-bottom: 0;
    padding-top: 4.375rem;
    padding-bottom: 10rem;
    background: $case-a-background url('/sections/section-ews36/consultation-bg.jpg') no-repeat;
    background-size: cover;

    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2{
        text-align: center;
      }
    }

    .section-icon {
      background-image: url('/sections/section-ews36/consultation-icon.png');
    }
    @media(max-width: $sm) {
      padding-top: 3rem;
      padding-bottom: 6rem;
      background-position: center top;
    }
  }
  .case-b {
    margin-bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;

    background-image: url('/sections/section-ews36/estimate-bg.jpg');
    background-color: $color-pink;
    padding-top: 3rem;
    padding-bottom: 9rem;

    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2{
        text-align: center;
        margin-bottom: 1.5rem;
      }
    }

    .section-icon {
      width: 78px;
      height: 83px;
      background-image: url('/sections/section-ews36/estimate-icon.png');
    }
    @media(max-width: $sm) {
      background-position: center center;

      .btn {
        font-size: 11px;
        padding: 1.2rem 3.2rem;
      }
    }
  }
  .case-c {
    margin-bottom: 0;
    background: $case-c-background url('/sections/section-ews36/custom-consultation-bg.jpg') no-repeat;
    background-size: cover;
    padding-top: 5rem;
    padding-bottom: 12rem;

    .section-icon {
      width: 78px;
      height: 83px;
      background-image: url('/sections/section-ews36/custom-consultation-icon.png');
    }

    @media(max-width: $sm) {
      background-position: center center;

      .btn-lg {
        text-align: center;
        font-size: 0.7rem;
        white-space: nowrap;
      }
      .section-icon {
        display: block;
      }
    }
  }
  .case-d {
    margin-bottom: 0;
    background: $case-c-background url('/sections/section-ews36/custom-consultation-bg.jpg') no-repeat;
    background-size: cover;
    padding-top: 8rem;
    padding-bottom: 12.5rem;

    h2 {
      padding: 0;
    }

    .section-icon {
      display: inline-block;
      margin: $section-d-icon-margin;
      width: 62px;
      height: 62px;
      vertical-align: middle;
      background-image: url('/sections/section-ews36/learn-icon.png');
    }
  }
  .case-e {
    background: $case-c-background url('/sections/section-ews36/idea-bg.jpg') no-repeat;
    background-size: cover;
    padding-top: 8rem;
    padding-bottom: 8rem;
    margin-bottom: 70px;

    h2 {
      padding: 0;
    }

    .section-icon {
      display: inline-block;
      margin: $section-d-icon-margin;
      width: 60px;
      height: 76px;
      vertical-align: middle;
      background-image: url('/sections/section-ews36/idea-icon.png');
    }
    .btn {
      .btn-icon {
        margin-right: -1rem;
        margin-left: 1rem;
        color: $color-secondary;
        font-size: 1.25rem;
        vertical-align: middle;
      }
      &:hover .btn-icon {
        color: $white;
      }
    }
  }

  .case-contact-manager {
    $bg-color: #F0F1F4;

    margin-top: -7rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: $bg-color;

    .b-contact-manager {
      border: 1px solid $color-primary;
      padding: 2rem 1.5rem;
      line-height: 1.5rem;
      text-align: left;
      margin-top: 7rem;

      .avatar {
        $margin-value: -4rem auto 1rem;

        margin: $margin-value;
        width: 6.75rem;
        height: 6.75rem;
        overflow: hidden;
        border-radius: 100px;
        border: 2px solid $white;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

        img {
          width: 100%;
        }
      }
      .title {
        font-size: 1.1rem;
        margin-bottom: 0.6rem;
      }
      .name, .title {
        font-weight: bold;
      }
      .text, .name {
        font-size: 1rem;
      }
      .btn {
        margin-top: 1rem;
        border-radius: 0;
      }
    }

    .white-bg {
      background-color: $white;
      border: none;
      -webkit-box-shadow: -2px 4px 1.5rem -4px rgba(120, 122, 122, 0.3);
      -moz-box-shadow: -2px 4px 1.5rem -4px rgba(120, 122, 122, 0.3);
      box-shadow: -2px 4px 1.5rem -4px rgba(120, 122, 122, 0.3);
    }
  }

  .case-start-new-project-button {
    .text-center {
      color: $white;
    }
  }

  .case-portfolio-a {
    .btn {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  .case-portfolio-a,
  .case-portfolio-b {
    $color-stop-1: #1D59A5;
    $color-stop-2: #1DA3DC;
    $section-d-icon-margin: 0 2.5rem;

    margin-bottom: 0;
    padding-top: 3.2rem;
    padding-bottom: 3.8rem;
    background: linear-gradient(90deg, $color-stop-1, $color-stop-2 );

    .desc {
      color: $white;
      font-size: 1.32rem;
    }

    h2 {
      margin-bottom: 1.3rem;
      color: white;
      font-weight: 700;
      font-size: 1.9em;
    }

    .ion-icon {
      color: $color-secondary;
      position: relative;
      font-size: 5.4rem;
    }

    @media(max-width: $sm) {
      .btn {
        margin-top: 1rem;
      }
    }
  }

  .subtitle {
    color: $white;
    margin-bottom: 2.5rem;

    @media(max-width: $sm) {
      font-size: 14px;
    }
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

  @media(max-width: $sm) {
  }
  @media (min-width: 0) and (max-width: $xs) {
  }
  @media (min-width: $md){
  }
</style>

<style lang="scss">

</style>
