<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">
      <div class="container">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <!--<b-navbar-brand href="#">NavBar</b-navbar-brand>-->
        <nuxt-link to="/" class="navbar-brand">Eliftech</nuxt-link>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="ml-auto">
            <b-nav-item nuxt to="/forstartups">FOR STARTUPS</b-nav-item>

            <li class="my-dropdown nav-item b-nav-dropdown dropdown">
              <a href="#" aria-haspopup="true" aria-expanded="true" class="nav-link dropdown-toggle">
                WHAT WE DO
              </a>
              <div class="dropdown-menu dropdown-menu-left show">
                <nuxt-link to="/expertise" class="dropdown-item">SERVICES</nuxt-link>
                <nuxt-link to="/expertise" class="dropdown-item">EXPERTISE</nuxt-link>
                <nuxt-link to="/expertise" class="dropdown-item">PORTFOLIO</nuxt-link>
              </div>
            </li>
            <li class="my-dropdown nav-item b-nav-dropdown dropdown">
              <a href="#" aria-haspopup="true" aria-expanded="true" class="nav-link dropdown-toggle">
                ABOUT US
              </a>
              <div class="dropdown-menu dropdown-menu-left show">
                <nuxt-link to="/who-we-are" class="dropdown-item">WHO WE ARE</nuxt-link>
                <nuxt-link to="/career" class="dropdown-item">CAREER</nuxt-link>
              </div>
            </li>

            <b-nav-item nuxt to="/blog">BLOG</b-nav-item>
            <b-nav-item nuxt to="/contacts">CONTACTS</b-nav-item>
          </b-navbar-nav>

        </b-collapse>

      </div>

    </b-navbar>
  </header>
</template>

<script>

  export default {
    created: ()=>{
    }
  }

</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $header-animation-speed: 500ms;
  header{
    background-color: transparent !important;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .container{
    min-height: 90px;
    max-width: 960px;
  }

  .navbar{
    padding: 0;
    min-height: 90px;
    border-bottom: 0 solid transparent;
    transition: background .5s;
    backface-visibility: hidden;

    &.bg-info {
      background-color: transparent !important;
    }

    .navbar-brand{
      background-image: url('~assets/imgs/header-logo.png');
      background-repeat: no-repeat;
      background-position: center left;
      transition: background $header-animation-speed;
      min-width: 235px;
      min-height: 63px;
      text-indent: -1000%;
      overflow: hidden;
    }

    .collapse{

      .nav-link{
        min-height: 90px;
        padding: 34px 0 28px;
        margin: 0 1.2rem;
        font-family: Roboto,sans-serif;
        font-size: .815rem;
        border-top: 5px solid transparent;
        color: #fff;

        &:hover{
          border-top: 5px solid #13a6e1;
        }
      }

      .my-dropdown{
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
