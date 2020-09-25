<template>
<div>
  <vue-svg-gauge
      :start-angle="-110"
      :end-angle="110"
      :value="71"
      :separator-step="10"
      :min="0"
      :max="400"
      gauge-color="#8CDFAD"
      :scale-interval="0.1"
  />
</div>
</template>

<script>
import { VueSvgGauge } from 'vue-svg-gauge'

export default {
  name: "Gauge",
  components: { VueSvgGauge },
}
</script>

<style scoped>

</style>