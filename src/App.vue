<template>
  <div id="app">
    <router-view />
    <p>
      <router-link to="/dashboard">Go to Dashboard Page</router-link> <br />
      <router-link to="/profile">Go to Profile Page</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
