<template>
  <div class="g-container">
    <g-header></g-header>
    <div class="g-main">
      <router-view></router-view>
    </div>
    <g-footer></g-footer>
  </div>
</template>

<script>
import GHeader from './Header'
import GFooter from './Footer'
export default {
  name: 'Layout',
  components: {
    GHeader,
    GFooter
  }
}
</script>

<style>
</style>