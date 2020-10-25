/* 个人信息页面 */
<template>
  <div class="price-container">
    <div class="center-top">
      <div :class="[$route.name === 'UserInfo' ? 'style' : '']">
        <router-link to="/homepage/center/userinfo">个人信息</router-link>
      </div>
      <div :class="[$route.name === 'Record' ? 'style' : '']">
        <router-link to="/homepage/center/record">兑换记录</router-link>
      </div>
    </div>
    <div class="center-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "center"
};
</script>

<style lang="scss">
.price-container {
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // right: 0;
  // left: 250px;
  // margin-left: 250px;
  .center-top {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    div {
      margin: 20px 0 0 20px;
    }
    a {
      color: #000;
      text-decoration: none;
    }
  }
  .center-content {
    width: 96%;
    height: 670px;
    box-shadow: 0 3px 7px #eee;
    margin: 20px auto;
  }
}
.style {
  border-bottom: 5px solid rebeccapurple;
}
</style>
