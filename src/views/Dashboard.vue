<template>
<div>
  <RandomChart />
</div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import RandomChart from "@/components/RandomChart";

export default {
  components: {RandomChart},
  extends: Bar,
  name: "Dashboard",

}
</script>

<style scoped>

</style>