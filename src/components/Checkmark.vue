<template>
  <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #C3FFEE">
    <div class="checkmark"></div>
  </div>
</template>

<script>
export default {
  name: "Checkmark"
}
</script>

<style scoped>
.checkmark {
  display: inline-block;
  transform: rotate(45deg);
  margin-left: 20px;
  margin-top: 14px;
  height: 18px;
  width: 10px;
  border-bottom: 3px solid #00c1d4;
  border-right: 3px solid #00c1d4;
  z-index: 100;
}
</style>