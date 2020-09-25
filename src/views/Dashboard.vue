<template>
<div>
  <CityCard />
  <AirQuality />
  <RandomChart />
</div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import RandomChart from "@/components/RandomChart";
import AirQuality from "@/components/AirQuality";
import CityCard from "@/components/CityCard";

export default {
  components: {CityCard, AirQuality, RandomChart},
  extends: Bar,
  name: "Dashboard",

}
</script>

<style scoped>

</style>