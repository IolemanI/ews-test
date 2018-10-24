<template>
  <section class="section-ews317">
    <slick
    ref="slick"
    :options="slickOptions">
      <a href="javascript:;" v-for="image in images" :key="image"><img :src="image" alt=""></a>
    </slick>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        images: [
          "/sections/section-ews317/eliftech_team_2.jpg",
          "/sections/section-ews317/eliftech_team_3.jpg",
          "/sections/section-ews317/eliftech_team_4.jpg",
          "/sections/section-ews317/eliftech_team_5.jpg",
          "/sections/section-ews317/eliftech_team_6.jpg",
          "/sections/section-ews317/eliftech_team_7.jpg",
          "/sections/section-ews317/eliftech_team_8.jpg",
          "/sections/section-ews317/eliftech_team_9.jpg",
          "/sections/section-ews317/eliftech_team_10.jpg",
          "/sections/section-ews317/eliftech_team_11.jpg",
          "/sections/section-ews317/eliftech_team_12.jpg"
        ],
        slickOptions: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          focusOnSelect: true,
          arrows: false,
          dots: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 1
              }
            }
          ]
        },
      }
    },
    computed: {
      reviews () {
        return true
      }
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
  .section-ews317{
    padding-top: 0;
    padding-bottom: 0;
    margin-top: -4rem;
  }

</style>

<style lang="scss">
  .section-ews317 {
    $scale-image: 1.2;
    $center-image-width: 520px * $scale-image;
    $half-width: ($center-image-width / 2);
    $arrow-size: 32px;
    $arrow-padding-x: 36px;
    $slick-prev-character: "\F3CF";
    $slick-next-character: "\F3D1";
    $slick-dot-color: #D6D6D6 !default;
    $slick-dot-color-active: $color-secondary !default;
    $slick-dot-size: 9px !default;

    .slick-slider {
      padding: 70px 0 100px;
      overflow: hidden;
    }

    .slick-list {
      overflow: visible;
    }

    .slick-arrow {
      display: block;
      position: absolute;
      height: $arrow-size;
      width: $arrow-size;
      line-height: 0;
      font-size: 0;
      cursor: pointer;
      color: transparent;
      top: 50%;
      left: 50%;
      padding: 0;
      border: none;
      outline: none;
      font-family: "Ionicons";
      z-index: 1;
      background-color: $white;
      border-radius: 100px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

      &:before {
        font-size: 1rem;
        color: $color-primary;
        line-height: $arrow-size;
        text-align: center;
      }
      &:hover, &:focus {
        outline: none;
        background: $color-primary;
        box-shadow: 0 1px 3px rgba($white, 0.5);
        &:before {
          color: $white;
          opacity: 1;
        }
      }

      &.slick-prev {
        transform: translate(-$half-width - $arrow-size - $arrow-padding-x, 0);
        [dir="rtl"] & {
          transform: translate($half-width + $arrow-padding-x, 0);
        }
        &:before {
          content: $slick-prev-character;
          [dir="rtl"] & {
            content: $slick-next-character;
          }
        }
      }
      &.slick-next {
        transform: translate($half-width + $arrow-padding-x, 0);
        [dir="rtl"] & {
          transform: translate(-$half-width - $arrow-size - $arrow-padding-x, 0);
        }
        &:before {
          content: $slick-next-character;
          [dir="rtl"] & {
            content: $slick-prev-character;
          }
        }
      }
    }

    .slick-slide {
      background-color: $color-primary;
      transition: all $default-animation-speed;
      outline: 5px solid $white;
      @media(max-width: $sm) {
        outline: 4px solid $white;
      }

      img {
        margin: $margin-0-auto;
        width: 100%;
        transition: all $default-animation-speed;
        @media(max-width: $sm) {
          opacity: 0.3;
        }
      }

      &.slick-center {
        position: relative;
        transform: scale($scale-image);
        z-index: 1;
        box-shadow: 0 5px 12px 5px rgba(0, 0, 0, 0.2);
        img {
          opacity: 1;
        }
      }
    }

    .slick-dots {
      $margin-value: 0;
      display: block;
      margin: $margin-value;
      position: absolute;
      bottom: 5px;
      list-style: none;
      text-align: center;
      padding: 0;
      width: 100%;
      li {
        $margin-value: 0 5px;
        display: inline-block;
        margin: $margin-value;
        position: relative;
        height: $slick-dot-size;
        width: $slick-dot-size;
        padding: 0;
        cursor: pointer;
        button {
          display: block;
          border: 0;
          height: $slick-dot-size;
          width: $slick-dot-size;
          outline: none;
          line-height: 0;
          font-size: 0;
          background: transparent;
          padding: 5px;
          cursor: pointer;
          &:hover, &:focus {
            outline: none;
          }
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: $empty-content;
            width: $slick-dot-size;
            height: $slick-dot-size;
            background-color: $slick-dot-color;
            border-radius: 100px;
            text-align: center;
            color: $slick-dot-color;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
        &.slick-active button:before {
          background-color: $slick-dot-color-active;
        }
      }
    }

    .slick-track{
      display: flex;
    }
  }

</style>
