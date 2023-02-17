<template>
  <section class="section-2">
    <b-form class="form" @submit.prevent="submit(search)">
      <div class="field-component">
        <div class="input-area">
          <b-form-input
            type="text"
            id="location-input"
            placeholder="Local..."
            autocomplete="off"
            v-model="search"
            class="shadow-none"
          />
          <label class="error-label" v-if="isError">Local inválido!</label>
        </div>
        <b-button type="submit" class="search-button">
          <b-icon-search style="color: #0d222e"></b-icon-search>
        </b-button>
      </div>
    </b-form>

    <div class="suggested-location">
      <ul>
        <li 
        v-for="location of suggestedLocations" :key="location"
        @click.prevent="submit(location)"
        >
          {{ location }}
        </li>
      </ul>
    </div>
  </section>
</template>
  
  <script>
import { BIcon, BIconSearch } from 'bootstrap-vue'

export default {
  name: 'Section_2',
  components: {
    BIcon,
    BIconSearch,
  },
  data() {
    return {
      search: '',
      suggestedLocations: ['Canada', 'China', 'Nova York', 'California'],
    }
  },
  computed: {
    isError() {
      return this.$store.state.weatherData.isError
    },
  },
  methods: {
    submit(location) {
      const result = location
      this.$store.dispatch('weatherData/getWeatherInfos', result)
      this.$store.dispatch('weatherData/getLocationImage', result)
    },
  },
}
</script>
  
  <style lang="scss">
.section-2 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: rgba(14, 14, 14, 0.15);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(141, 129, 129, 0.18);
  width: 30%;
  height: 100%;
  padding-left: 1.3rem;

  .form {
    width: 100%;

    .field-component {
      display: flex;
      justify-content: space-between;
    }

    .input-area {
      display: flex;
      flex-direction: column;
      flex: 1 auto auto;
      gap: 1rem;
    }

    #location-input {
      border: none;
      outline: none;
      border-bottom: 1px solid #cccccc;
      background-color: transparent;
      color: #fdfdfd;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.5rem;
      margin-top: 2rem;

      &::placeholder {
        color: #cccccc;
      }
    }

    .search-button {
      width: 3.75rem;
      height: 3.75rem;
      padding: 0.5rem;
      border: none;
      border-radius: 0;
      background-color: orange;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .suggested-location {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 250px;
      color: #cccccc;
      list-style: none;

      li {
        padding: 0.5rem;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          border-bottom: 1px solid #cccccc;
          color: #fdfdfd;
        }
      }
    }
  }

  .error-label {
    color: red;
  }
}
</style>