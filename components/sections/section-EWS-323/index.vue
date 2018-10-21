<template>
  <section class="section-ews323">

      <div class="container">
        <h2 class="text-center">Our Offices</h2>

        <div class="row align-self-stretch b-offices">
          <div class="col-md-4 align-items-stretch d-flex" v-for="office in offices" :key="office">
            <div class="b-office">

              <div class="title">{{office.title}}</div>
              <div v-html="office.address"></div>

            </div>
          </div>
        </div>

      </div>

      <div class="map-container">
        <div class="map" id="map"></div>
      </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        offices: [
          {
            title: "ElifTech HQ",
            address: "73 Heroiv UPA str., Lviv, Ukraine",
            lat: 49.829078,
            lng: 23.995036,
            marker: "marker1"
          },
          {
            title: "ElifTech US Office",
            address: "717 N. Union Str., S. 8, Wilmington, Delaware United States",
            lat: 39.752004,
            lng: -75.571416,
            marker: "marker2"
          },
          {
            title: "ElifTech Vinnytsia",
            address: "Development Center<br/>46 Mykoly Ovodova str., Vinnytsia, Ukraine",
            lat: 49.233352,
            lng: 28.46481,
            marker: "marker3"
          }
        ],
        mapStyle: [
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#4a667b"
              },
              {
                "lightness": "2"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#34526b"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#173142"
              },
              {
                "lightness": "-14"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "color": "#f2f2f2"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#4a667b"
              },
              {
                "lightness": "2"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#11293c"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "labels.icon",
            "stylers": [
              {
                "color": "#274151"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 45
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#536f85"
              },
              {
                "weight": "0.98"
              },
              {
                "visibility": "on"
              },
              {
                "gamma": "3.05"
              },
              {
                "lightness": "-43"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "color": "#46bcec"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#3f5a70"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#274151"
              }
            ]
          }
        ]
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
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      let mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: this.mapStyle
      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      let mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      let map = new google.maps.Map(mapElement, mapOptions);

      let bounds = new google.maps.LatLngBounds();
      this.offices.forEach(point => {

        // Let's also add a marker while we're at it
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(point.lat, point.lng),
          map: map,
          title: point.title,
          icon: point.marker
        });

        bounds.extend(marker.position);
      });
      map.fitBounds(bounds);
    }
  }
</script>

<style scoped lang="scss">
  .section-ews323{
    margin-bottom: 0;

    .b-offices {
      @media(max-width: $sm) {
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 3rem;
      }
    }

    .map {
      width: 100%;
      height: 32.5rem;
    }
    .b-office {
      width: 100%;
      padding: 2rem 1.5rem 2rem 6.25rem;
      margin-bottom: 5.4rem;
      box-shadow: 0 0 25px -5px rgba(0,0,0,.2);
      background: url('/sections/section-ews323/marker4.png') no-repeat 2rem 2rem;

      @media(max-width: $md) {
        margin-bottom: 1rem;
      }

      .title {
        font-weight: bold;
        margin-bottom: .5rem;
      }
    }

    .b-offices > div:nth-child(1) .b-office {
      background-image: url('/sections/section-ews323/marker1.png');
    }
    .b-offices > div:nth-child(2) .b-office {
      background-image: url('/sections/section-ews323/marker3.png');
    }

    .map-container {
      position: relative;

      .map-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $color-primary;
        opacity: .5;
        z-index: 1;
        pointer-events: none;
      }
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

</style>
