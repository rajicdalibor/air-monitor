<template>
<div>
  <AirQuality />
  <RandomChart />
</div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import RandomChart from "@/components/RandomChart";
import AirQuality from "@/components/AirQuality";

export default {
  components: {AirQuality, RandomChart},
  extends: Bar,
  name: "Dashboard",

}
</script>

<style scoped>

</style>