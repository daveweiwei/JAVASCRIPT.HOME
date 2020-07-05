<template>
  <div class="g-footer">
    <div class="g-footer-left">Copyright © 2011-2020 JAVASCRIPT.HOME</div>
    <div class="g-footer-right"></div>
  </div>
</template>

<script>
export default {
  name: 'GFooter'
}
</script>

<style lang="less" scoped>
.g-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 14px;
  color: #969ba1;
}
.g-footer-left,
.g-footer-right {
  flex: 1;
}
</style>