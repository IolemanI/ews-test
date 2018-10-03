<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">
      <div class="container">

        <nuxt-link to="/" class="navbar-brand">Eliftech</nuxt-link>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="ml-auto">
            <b-nav-item nuxt to="/forstartups" class="forstartups-item">FOR STARTUPS</b-nav-item>

            <li class="my-dropdown nav-item b-nav-dropdown dropdown">
              <button aria-haspopup="true" aria-expanded="true" class="nav-link dropdown-toggle">
                WHAT WE DO
              </button>
              <div class="dropdown-menu dropdown-menu-left show">
                <nuxt-link to="/services" class="dropdown-item">SERVICES</nuxt-link>
                <nuxt-link to="/expertise" class="dropdown-item">EXPERTISE</nuxt-link>
                <nuxt-link to="/portfolio" class="dropdown-item">PORTFOLIO</nuxt-link>
              </div>
            </li>
            <li class="my-dropdown nav-item b-nav-dropdown dropdown">
              <button aria-haspopup="true" aria-expanded="true" class="nav-link dropdown-toggle">
                ABOUT US
              </button>
              <div class="dropdown-menu dropdown-menu-left show">
                <nuxt-link to="/who-we-are" class="dropdown-item">WHO WE ARE</nuxt-link>
                <nuxt-link to="/career" class="dropdown-item">CAREER</nuxt-link>
              </div>
            </li>

            <b-nav-item nuxt to="/blog">BLOG</b-nav-item>
            <b-nav-item nuxt to="/contacts">CONTACTS</b-nav-item>
          </b-navbar-nav>

        </b-collapse>

        <b-navbar-toggle target="nav_collapse" class="toggler-icon-d-none"></b-navbar-toggle>

      </div>

    </b-navbar>
  </header>
</template>

<script>

  export default {
    methods: {
      onScroll: function () {
        const header = document.querySelector('header')
        const logo = header.querySelector('.navbar-brand')
        const navLink = header.getElementsByClassName('nav-link')

        if(document.documentElement.scrollTop > 0){
          header.classList.add('bg-white')
          logo.classList.add('logo-color')

          for(let i = 0; i<navLink.length; i++){
            navLink[i].classList.add('font-black')
          }
        }else{
          header.classList.remove('bg-white')
          logo.classList.remove('logo-color')

          for(let i = 0; i<navLink.length; i++){
            navLink[i].classList.remove('font-black')
          }
        }
      }
    },
    mounted: function () {
      this.onScroll()

      window.onscroll = ()=>{
        this.onScroll()
      }

    }
  }

</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $header-animation-speed: 500ms;
  $navbarBrandMargin: 10px 0 0 25px;
  $header-toggler-color: #FFF;
  $header-toggler-color-dark: $color-primary;

  header{
    background-color: transparent !important;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    transition: all ease-in 350ms;

    &.bg-white{
      background-color: white !important;

      .navbar .navbar-toggler{
        background: str-replace(url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-toggler-color-dark}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"), "#", "%23") no-repeat center;
        background-size: 30px;
      }
    }
  }

  .container{
    min-height: 60px;
    max-width: 960px;
    position: relative;

    @media(max-width: $sm) {
      min-height: 90px;
      align-items: flex-start;
    }
  }

  .navbar{
    padding: 0;
    min-height: 66px;
    border-bottom: 0 solid transparent;
    transition: background .5s;
    backface-visibility: hidden;

    &.bg-info {
      background-color: transparent !important;
    }

    .navbar-brand{
      background: url('/images/header-logo.png') no-repeat center left;
      transition: background $header-animation-speed;
      min-width: 235px;
      min-height: 63px;
      text-indent: -1000%;
      overflow: hidden;

      &.logo-color{
        background: url('/images/header-logo-color.png') no-repeat center left;
      }

      @media(max-width: $sm) {
        margin: $navbarBrandMargin;
        background-size: 138px 45px;
        background-image: url('/images/header-logo@2x.png');

        &.logo-color{
          background-size: 138px 45px;
          background-image: url('/images/header-logo-color@2x.png');
        }
      }
    }

    .collapse{

      .navbar-nav{
        @media(max-width: $sm) {
          padding-top: 5rem;
        }
      }

      .nav-item{
        .nav-link{
          min-height: 90px;
          padding: 34px 0 28px;
          margin: 0 1.2rem;
          font-family: Roboto,sans-serif;
          font-size: .815rem;
          border-top: 5px solid transparent;
          color: #fff;

          &.font-black{
            color: #000;
          }

          &:hover{
            border-top: 5px solid #13a6e1;
          }
          @media(max-width: $sm) {
            color: #0B314F;
            padding: .8rem 2.5rem;
            min-height: 0;
            margin: 0;
            font-size: .875rem;
            font-weight: 700;
            font-family: Roboto,sans-serif;
          }
        }
        &.forstartups-item{
          .nav-link{
            background-color: #EE3361;
            color: white;
            padding: 0.25rem;
            min-height: 1rem;
            line-height: 1.3;
            border: 0;
            margin-top: 7px;

            @media(max-width: $sm) {
              display: inline-block;
              margin: .8rem 2.5rem;
            }
          }
        }

      }

      .my-dropdown{
        .dropdown-toggle{
          background: none;
          border: 0;
          width: 100%;
          text-align: left;
        }
        .dropdown-item{
          min-height: unset;
          box-shadow: 0 0 .1px 0 #173c58;
          font-size: .815rem;
          text-transform: uppercase;
          padding: 15px 20px;
          background: #fdfdfd;
          color: #0b314f;
          border-left: 5px solid transparent;
          transition: background .5s,border .5s,color .5s;
          position: relative;
          &:hover{
            font-weight: 700;
            border-left-color: #13a6e1;
          }
        }
        .dropdown-menu{
          padding: 0;
          margin: 0;
        }
      }

    }

    .navbar-toggler{
      position: absolute;
      top: 22px;
      right: 1rem;
      border-color: transparent;
      border-radius: 3px;
      outline: none;
      background: str-replace(url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-toggler-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"), "#", "%23") no-repeat center;
      background-size: 30px;
      width: 30px;
      height: 30px;
      padding: 4px 12px;
      box-sizing: initial;
    }

    .navbar-collapse{
      @media(max-width: $sm) {
        background-color: white;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        width: 300px;

        &.show + .navbar-toggler{
          background: none;
          font-family: "Ionicons",sans-serif;
          width: 30px;
          height: 30px;
          &:before{
            content: "\f2c0";
            font-size: 2.6rem;
            line-height: 1;
            padding: 4px 8px;
            color: $color-primary;
          }
        }

      }
    }
  }

  a{
    min-height: 90px;
  }
  .dropdown-menu.show{
    display: none;
  }
  .my-dropdown:hover>.dropdown-menu.show{
    display: block;
  }
</style>

<style lang="scss">
  .toggler-icon-d-none span{
    display: none;
  }
</style>
