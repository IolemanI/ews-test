<template>
  <section class="section-ews34">

    <div class="container hidden-sm-down">
      <h2 class="text-center">{{title}}</h2>

      <div class="row" id="b-tech-icons"></div>
    </div>

    <div class="hidden-md-up">
      <h2 class="text-center tech-title">Technologies</h2>
      <div class="slider center">
        <div class="container">
          <div class="row" id="tech-slide-1"></div>
        </div>
        <div class="container">
          <div class="row" id="tech-slide-2"></div>
        </div>
        <div class="container">
          <div class="row" id="tech-slide-3"></div>
        </div>
        <div class="container">
          <div class="row" id="tech-slide-4"></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

/** Priorities:
* High - 1
* Middle - 2
* Low - 3
*/

const COUNT_OF_BLOCKS = 12;
const SWITCH_LOGO_TIMEOUT = 5000;
const ANIMATION_DELAY = 3000;

  export default {
    data () {
      return {
        title: 'Technologies we use',
        technologies: [
          {
            title: 'docker',
            image: '/sections/section-ews34/imgs/docker-icon.png',
            priority: '3'
          },
          {
            title: 'react',
            image: '/sections/section-ews34/imgs/react-icon.png',
            priority: '1'
          },
          {
            title: 'node.js',
            image: '/sections/section-ews34/imgs/nodejs-icon.png',
            priority: '1'
          },
          {
            title: 'python',
            image: '/sections/section-ews34/imgs/python-icon.png',
            priority: '3'
          },
          {
            title: 'socket.io',
            image: '/sections/section-ews34/imgs/socketio-icon.png',
            class: 'socket',
            priority: '3'
          },
          {
            title: 'html css',
            image: '/sections/section-ews34/imgs/htmlcss-icon.png',
            priority: '3'
          },
          {
            title: 'angular',
            image: '/sections/section-ews34/imgs/angular-icon.png',
            priority: '1'
          },
          {
            title: 'typescript',
            image: '/sections/section-ews34/imgs/typesript-icon.png',
            priority: '3'
          },
          {
            title: 'es6',
            image: '/sections/section-ews34/imgs/es6-icon.png',
            priority: '1'
          },
          {
            title: 'elasticsearch',
            image: '/sections/section-ews34/imgs/elastic-icon.png',
            priority: '3'
          },
          {
            title: 'rabbitmq',
            image: '/sections/section-ews34/imgs/rabbit-icon.png',
            priority: '3'
          },
          {
            title: 'golang',
            image: '/sections/section-ews34/imgs/go-icon.png',
            priority: '2'
          },
          {
            title: 'dotnet',
            image: '/sections/section-ews34/imgs/dotNET.png',
            priority: '1'
          },
          {
            title: 'asp mvc',
            image: '/sections/section-ews34/imgs/asp-mvc.png',
            priority: '2'
          },
          {
            title: 'asp web api',
            image: '/sections/section-ews34/imgs/asp_web_api.png',
            class: 'scale-downgrade',
            priority: '2'
          },
          {
            title: 'mssql',
            image: '/sections/section-ews34/imgs/mssql.png',
            priority: '2'
          },
          {
            title: 'mysql',
            image: '/sections/section-ews34/imgs/mysql.png',
            priority: '2'
          },
          {
            title: 'vue.js',
            image: '/sections/section-ews34/imgs/vue.js.png',
            priority: '1'
          },
          {
            title: 'dotnet core',
            image: '/sections/section-ews34/imgs/net_core.png',
            class: 'scale-downgrade',
            priority: '2'
          },
          {
            title: 'react native',
            image: '/sections/section-ews34/imgs/react_native.png',
            class: 'scale-downgrade',
            priority: '2'
          },
          {
            title: 'mongodb',
            image: '/sections/section-ews34/imgs/mongodb.png',
            class: 'scale-downgrade',
            priority: '2'
          },
          {
            title: 'postgresql',
            image: '/sections/section-ews34/imgs/postgresql.png',
            class: 'scale-downgrade',
            priority: '2'
          },
          {
            title: 'redis',
            image: '/sections/section-ews34/imgs/redis.png',
            priority: '3'
          }
        ],
        count: 0
      }
    },
    computed: {

    },
    watch: {

    },
    methods: {
    },
    mounted: function () {
      if (COUNT_OF_BLOCKS >= this.technologies.length) {
        throw new Error('Wrong value of COUNT_OF_BLOCKS')
      }

      let initedValues = [];
      let logosContainer = document.querySelector('#b-tech-icons');

      function initContainer(items) {
        let randomItems = shuffle(items.slice());

        for(let i = 0; i<12; i++){
          if(i<2){
            let filteredItems = randomItems.filter(item=>{
              return item.priority == 1
            });
            initItem(filteredItems[0]);
            randomItems.splice(randomItems.indexOf(filteredItems[0]), 1);
          }else if(i>1 && i<6){
            let filteredItems = randomItems.filter(item=>{
              return item.priority < 3;
            });
            initItem(filteredItems[0]);
            randomItems.splice(randomItems.indexOf(filteredItems[0]), 1);

          }else if(i>5 && i<12){
            let filteredItems = randomItems.filter(item=>{
              return item.priority < 4
            });
            initItem(filteredItems[0]);
            randomItems.splice(randomItems.indexOf(filteredItems[0]), 1);
          }
        }

        console.log('==> random items',randomItems);
      }

      function shuffle(array) {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }

      function initItem(item) {
        const div = document.createElement('div');
        div.innerHTML =
          `<div class="col-4 col-md-2 b-tech-icon-ews34 d-flex align-items-center justify-content-center visible">
            <img class="${item.class ? item.class : ''}" src="${item.image}" alt="${item.title}">
          </div>`

        let el = div.firstChild
        logosContainer.appendChild(el)
        item.el = el
        initedValues.push(item)
      }

      function getRandomElement(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
      }

      const switchLogo = () => {
        let itemForHide = getRandomElement(initedValues);
        let elemIndex = initedValues.indexOf(itemForHide);
        let tempElems = this.technologies.slice();
        let filteredItems = [];

        initedValues.forEach(elem=>tempElems.splice(tempElems.indexOf(elem), 1));

        if(elemIndex<2)
          filteredItems = tempElems.filter(elem=>elem.priority == 1);
        else if(elemIndex>1 && elemIndex<6)
          filteredItems = tempElems.filter(elem=>elem.priority < 3);
        else if(elemIndex>5 && elemIndex<12)
          filteredItems = tempElems.filter(elem=>elem.priority < 4);

        if(!filteredItems.length > 0)
          return;

        let newEl = getRandomElement(filteredItems);
        initedValues.splice(elemIndex, 1, newEl);

        let elem = itemForHide.el;
        if (elem)
          elem.classList.remove('visible');

        setTimeout(function() {
          let img = new Image();
          img.onload = () => {
            newEl.el = elem
            itemForHide.el = null;
            elem.classList.add('visible');

            let child = newEl.el.childNodes;

            child[1].setAttribute('src', newEl.image);
            child[1].setAttribute('class', newEl.class?newEl.class:'');
            child[1].setAttribute('alt', newEl.title);
          };
          img.src = newEl.image;
        }, ANIMATION_DELAY);
      }

      initContainer(this.technologies);
      setInterval(switchLogo, SWITCH_LOGO_TIMEOUT);
    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $text-color-hover: #FFFFFF;
  $text-color-active: #FFFFFF;
  $blog-menu-subtitle-color: #212121;
  $carousel-active-navigation: #20ABE2;
  $blog-menu-bg: #F2F3F6;
  $carousel-navigation: #D6D6D6;
  $carousel-post-border-color: #EDEFEF;
  $carousel-post-data-color: #5B5B5B;
  $carousel-post-hover-tags-color: #71C9ED;
  $carousel-post-hover-bg-gradient-0: rgba(19, 166, 225, .1);
  $carousel-post-hover-bg-gradient-80: rgba(19, 166, 225, .8);
  $carousel-post-hover-bg-gradient-90: rgb(19, 166, 225);
  $carousel-post-hover-bg-gradient-100: rgb(19, 166, 225);
  $slick-dot-margin:  0 0.4rem;
  $post-margin: 0 .15rem;
  $margin-1-auto: 1rem auto;
  $margin-1-5-auto: 2rem auto 0;

  .section-ews34 {
    background-color: #F2F3F6;
    padding: 90px 0 130px 0;
    margin-bottom: 0;

    @media(max-width: $sm) {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 50px;
    }
  }

  .b-tech-icon {
  }

  .slick-slider {
    overflow: hidden;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    outline: none;
  }

  .slick-arrow {
    display: none;
  }

  .slick-dots {
    list-style: none;
    text-align: center;
    padding: 0;

    li {
      display: inline-block;
      margin: $slick-dot-margin;
      button {
        padding: 0;
        border: none;
        width: 0.5rem;
        height: 0.5rem;
        background: $carousel-navigation;
        color: transparent;
        font-size: 0;
        border-radius: 50%;
      }
    }

    .slick-active {
      button{
        background: $carousel-active-navigation;
      }
    }
  }

  @media(max-width: $sm) {
    .tech-title {
      margin-bottom: 2rem;
    }
  }

  @media(max-width: $sm) {
  }
  @media (min-width: 0) and (max-width: $xs) {
  }
  @media (min-width: $md){
  }
</style>

<style lang="scss">
  .b-tech-icon-ews34{
    height: 7.5rem;
    position: relative;
    border: 1px solid transparent;
    opacity: 0;
    transition: all 500ms ease-in-out;
    transition-delay: 2s;

    .socket {
      opacity: 0.5;
    }
    &:hover {
      .socket {
        opacity: 1;
        transition: all 500ms;
      }
    }

    .scale-downgrade{
      transform: scale(0.7);
    }

    img {
      filter: grayscale(100%);
      max-width: 100%;
    }
    &:hover {
      //background-color: white;
      //border: 1px solid #E6E6E7;
      img {
        filter: grayscale(0);
        transition: all 500ms;
      }
    }
    &.visible {
      transform: translateZ(0);
      opacity: 1;
      transition-delay: 0s
    }
  }
</style>
