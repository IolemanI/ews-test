<template>
  <footer>
    <div class="container">

      <div class="row">
        <div class="col-md-3 ">

          <span class="logo"></span>

          <div class="clutch-widget hidden-sm-down" data-url="https://clutch.co"
               data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="151813"></div>

        </div>
        <div class="col-md-5 hidden-sm-down">

          <div class="row">
            <div class="col-md-6">

              <ul class="b-footer-menu">
                <li><a href="/who-we-are">About Eliftech</a></li>
                <li><a href="/career">Career</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/expertise">Expertise</a></li>
              </ul>

            </div>
            <div class="col-md-6">

              <ul class="b-footer-menu">
                <li><a href="/portfolio">Case studies</a>
                  <ul>
                    <li><a href="/portfolio/1-windscribe">Windscribe</a></li>
                    <li><a href="/portfolio/2-class-wallet">ClassWallet</a></li>
                    <li><a href="/portfolio/4-maptrack">MapTrack</a></li>
                    <li><a href="/portfolio/3-audiomachine">Audiomachine</a></li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>

        </div>
        <div class="col-md-4">

          <div class="b-additional-info">

            <ul class="b-social-links row justify-content-between">
              <li class="col facebook"><a target="_blank" href="https://www.facebook.com/eliftech/"><span class="socicon-facebook"></span></a></li>
              <li class="col instagram"><a target="_blank" href="https://www.instagram.com/eliftech/"><span class="socicon-instagram"></span></a></li>
              <li class="col linkedin"><a target="_blank" href="https://www.linkedin.com/company-beta/10329604/"><span class="socicon-linkedin"></span></a></li>
              <li class="col twitter"><a target="_blank" href="https://twitter.com/ElifTech"><span class="socicon-twitter"></span></a></li>
              <li class="col googleplus"><a target="_blank" href="https://plus.google.com/u/0/+Eliftech"><span class="socicon-googleplus"></span></a></li>
              <li class="col slideshare"><a target="_blank" href="https://www.slideshare.net/ElifTech"><span class="socicon-slideshare"></span></a></li>
              <li class="col youtube"><a target="_blank" href="https://www.youtube.com/channel/UCETaw5-3WLLhGQLDY7-lUww"><span class="socicon-youtube"></span></a></li>
            </ul>

            <a href="tel:+13025432012" class="b-contacts">
              <span class="ion-ios-call icon-phone"></span> +1 (302) 543 20 12
            </a>

            <div class="b-forstartups">
              <a target="_blank" href="https://forstartups.eliftech.com/" class="btn">
                FOR STARTUPS
              </a>
            </div>

            <div class="clutch-widget mx-auto hidden-md-up" data-url="https://clutch.co" data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="151813"></div>

          </div>

        </div>
      </div>
    </div>
    <div class="b-copyright p-2 text-center">
      <div class="container">

        <div class="col">
          <p>© 2015-2018 ElifTech. All rights reserved</p>
          <div class="d-flex justify-content-center">
            <a href="/privacy-policy" class="">Privacy Policy</a>
            <a href="/cookies-policy" class="cookies-policy-link">Cookies Policy</a>
          </div>
        </div>

      </div>
    </div>
  </footer>

</template>

<script>

  export default {
    created: ()=>{
    }
  }

</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $brand-blue: #24A7DE;
  $margin-null: 0;
  $margin-cookies-policy: 0 .5rem;
  $social-links: (
    facebook: $color-secondary,//#3B5999,
    instagram: $color-secondary,
    linkedin: $color-secondary,//#0077B5,
    twitter: $color-secondary,//#55ACEE,
    googleplus: $color-secondary,//#DD4B39,
    slideshare: $color-secondary,//#0077B5,
    youtube: $color-secondary//#CD201F,
  );
  $footer-logo-width: 182px;
  $footer-logo-height: 59px;
  $footer-bg-color: $color-primary;
  $footer-text-color: #96A2AB;
  $copyright-bg-color: #09283A;
  $copyright-text-color: #96A2AB;
  $footer-hr-color: #38566E;
  $margin-2-auto-0: 2rem auto 0;
  $meeting-icon-width: 22px;
  $meeting-icon-height: 24px;

  footer {
    background-color: $footer-bg-color;
    color: $footer-text-color;

    & > .container {
      padding-top: 170px;
      padding-bottom: 100px;

      @media(max-width: $sm) {
        padding-top: 17.5rem;
        padding-bottom: 3.25rem;
      }
    }

    @media(max-width: $sm) {
      position: relative;
      z-index: -1;
      margin-top: -23rem;
      padding-top: 9rem;
    }

    @media(max-width: $xs) {
      margin-top: -25.3rem;
      & > .container {
        padding-top: 20.5rem;
      }
    }
  }

  .logo {
    display: block;
    background-image: url('/images/footer-logo.gif');
    background-size: $footer-logo-width $footer-logo-height;
    width: $footer-logo-width;
    height: $footer-logo-height;
    margin-top: -9px;

    &.hidden-sm-up {
      $margin: 20px auto -60px;
      margin: $margin;
    }

    @media(max-width: $sm) {
      margin-bottom: $margin-null;
      margin-left: auto;
      margin-right: auto;
      background-size: 190px 60px;
      width: 190px;
      height: 60px;
    }
  }

  .clutch-widget{
    margin-top: 4.3rem;
    @media(max-width: $sm) {
      margin-top: 1rem;
      width: 12rem;
    }
  }

  .b-footer-menu {
    list-style: none;
    font-size: $font-size-sm;
    padding-left: $spacer * 2;
    @media(max-width: $sm) {
      margin-bottom: 0;
    }

    & > li {
      padding: $spacer / 2 0;

      &:before {
        $ionicons-chevron-left: "\f3d1";

        content: $ionicons-chevron-left;
        font-family: $ionicons-font-family;
        font-size: $font-size-xs;
        float: left;
        margin-top: 2px;
        margin-left: -12px;
        color: $brand-blue;
      }

      & > a {
        color: $white;
        text-transform: uppercase;

        &:focus, &:hover {
          font-weight: 700;
          text-decoration: none;
        }
      }

      ul {
        list-style: none;
        padding-top: $spacer / 2;
        padding-left: $spacer / 2;

        li {
          padding: $spacer / 2 0;
        }
        a {
          color: $footer-text-color;

          &:focus, &:hover {
            text-decoration: none;
            color: $white;
          }
        }
      }
    }
  }

  .b-copyright {
    background-color: $copyright-bg-color;
    color: $copyright-text-color;
    font-size: $font-size-xs;

    p{
      margin: $margin-null;
    }
    a{
      color: $copyright-text-color;
      font-size: $font-size-xs;
    }
    .cookies-policy-link{
      margin: $margin-cookies-policy;
    }
  }

  .b-additional-info {
    min-width: 260px;
    float: right;

    @media(max-width: $md) {
      min-width: 220px;
    }
    @media(max-width: $sm) {
      margin: $margin-2-auto-0;
      width: 100%;
      padding: 0 15px;
      min-width: unset;
      float: none;
      text-align: center;
    }
  }

  .b-social-links {
    list-style: none;
    padding: $spacer * 1.3  0 0;
    text-align: center;

    li {
      a {
        transition: color 0.5s ease, text-shadow 0.5s ease;

        &, &:focus, &:hover, &:visited {
          text-decoration: none;
          color: #5D7688;
        }

        span:before {
          font-size: 1.3rem;
        }
      }
      @each $link in map-keys($social-links) {
        $color: map-get($social-links, $link);

        &.#{$link} a:hover {
          color: $color;
          text-shadow: 0 0 10px rgba($color, .5);
        }
      }
      .socicon-googleplus {
        font-size: 20px;
      }
    }
  }

  .b-contacts {
    color: $white;
    border-top: 1px solid $footer-hr-color;
    border-bottom: 1px solid $footer-hr-color;
    line-height: $line-height-base;
    padding: $spacer 0;
    font-size: 14px;
    display: block;

    @media(max-width: $sm) {
      border-top: 0 none;
      border-bottom: 0 none;
    }

    .icon-phone {
      line-height: 1;
      font-size: $font-size-lg;
      color: $footer-text-color;
      margin-right: $spacer / 3;
    }
  }

  .b-forstartups{
    padding: $spacer * 1.5 0;
    a{
      background: $white;
      color: $color-primary;
      padding: 3px 6px 0;
      border-radius: 0;
      font-family: "TypoPRO Bebas Neue", sans-serif;
      font-size: 1.5rem;
      letter-spacing: 2px;
      line-height: .9;
    }
  }

  @media(max-width: $sm) {
  }
  @media (min-width: 0) and (max-width: $xs) {
  }
  @media (min-width: $md){
  }

</style>
