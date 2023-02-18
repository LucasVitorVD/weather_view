<template>
  <section class="section-1">
    <nuxt-img
      :src="locationImage.regularImg ?? locationImage.fullImg"
      :alt="locationImage.alt"
      class="img"
    />
    <div class="status">
      <h1 id="temp">{{ weatherInfos.temp }} Cº</h1>
      <div class="location-infos">
        <h2 id="location-name">{{ weatherInfos.locationName }}</h2>
        <div class="location-details">
          <p>
            <span class="weather-status"
              ><b-icon-droplet></b-icon-droplet>
              {{ weatherInfos.locationHumidity }}%</span
            >
            |
            <span id="wind-status"
              ><b-icon-wind></b-icon-wind>
              {{ weatherInfos.locationWindSpeed }}km/h</span
            >
          </p>
        </div>
      </div>
      <div class="location-infos temp-details">
        <nuxt-img
          :src="weatherInfos.weatherStatusIcon"
          alt="Condições do tempo"
          id="weather-icon"
        />
        <span id="description" class="location-details">{{
          weatherInfos.weatherDescription
        }}</span>
      </div>
    </div>
  </section>
</template>
  
  <script>
import { BIcon, BIconWind, BIconDroplet } from 'bootstrap-vue'

export default {
  name: 'Section-1',
  components: {
    BIcon,
    BIconWind,
    BIconDroplet,
  },
  computed: {
    weatherInfos() {
      return this.$store.state.weatherData.weatherInfos
    },
    locationImage() {
      return this.$store.state.weatherData.locationImage
    },
  },
}
</script>
  
<style lang="scss">
.section-1 {
  width: 70%;
  position: relative;

  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .status {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    position: absolute;
    bottom: 100px;
    left: 100px;
    background-color: #1a1a1a;
    color: #fdfdfd;
    border-radius: 5px;
    width: 60%;
    height: auto;

    #temp {
      font-size: 2.5rem;
    }

    .location-infos {
      display: flex;
      flex-direction: column;

      .location-details {
        font-size: 0.8rem;

        p {
          margin: 0;
          padding: 0;
        }
      }

      #location-name {
        font-size: 2rem;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      #weather-icon {
        width: 40px;
      }

      #description {
        text-transform: capitalize;
      }
    }
  }
}
</style>