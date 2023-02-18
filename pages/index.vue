<template>
  <div class="app-container" :style="{ backgroundImage: locationImage.image }">
    <b-card
      no-body
      class="main-content"
      style="
        display: flex;
        flex-direction: row;
        border-radius: 0;
        background-color: transparent;
      "
    >
      <Section_1 />

      <Section_2 />
    </b-card>
  </div>
</template>

<script>
import Section_1 from '/components/Section-1'
import Section_2 from '/components/Section-2'

export default {
  name: 'IndexPage',
  components: {
    Section_1,
    Section_2
  },
  computed: {
    locationImage() {
      const imgUrl = this.$img(this.$store.state.weatherData.locationImage.fullImg)
      return {
        image: `url('${imgUrl}')`
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

@import '~/assets/styles/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
}

.main-content {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 90%;
}
</style>