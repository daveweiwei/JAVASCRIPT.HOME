<template>
  <div class="g-header">
    <div class="g-header__left">
      <div class="g-header__logo">
        <i class="el-icon-eleme"></i>
      </div>
      <div class="g-header__block">
        <div class="g-header__title">JAVASCRIPT.HOME</div>
      </div>
    </div>
    <div class="g-header__center"></div>
    <div class="g-header__right">
      <a class="g-header__buy">电子书</a>
      <a class="g-header__buy">订阅</a>
      <i class="el-icon-user-solid"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GHeader'
}
</script>

<style lang="less" scoped>
.g-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 20px;
  color: #ffffff;
}
.g-header__left,
.g-header__right {
  flex: 1;
}
.g-header__center {
  width: 960px;
  padding: 0 10px;
}
.g-header__left {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.g-header__logo {
  flex: 1;
}
.g-header__block {
  flex: 3;
  font-size: 20px;
  & .g-header__subhead {
    font-size: 12px;
    color: #f5f5f5;
  }
}
.g-header__buy {
  font-size: 17px;
  margin-right: 20px;
  cursor: pointer;
}
a.g-header__buy:hover,
a.g-header__buy:active,
a.g-header__buy:visited {
  color: #ffffff;
}
</style>