<template>
  <el-container>
    <el-header>
      <g-header></g-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <g-footer></g-footer>
    </el-footer>
  </el-container>
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