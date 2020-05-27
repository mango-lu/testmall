<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon"  src="~/assets/img/tabbar/home.jpg" alt="">
      <img slot="item-icon-active" src="~/assets/img/tabbar/home_active.jpg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~/assets/img/tabbar/list.jpg" alt="">
      <img slot="item-icon-active" src="~/assets/img/tabbar/list_active.jpg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~/assets/img/tabbar/shopping.jpg" alt="">
      <img slot="item-icon-active" src="~/assets/img/tabbar/shopping_active.jpg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~/assets/img/tabbar/my.jpg" alt="">
      <img slot="item-icon-active" src="~/assets/img/tabbar/my_active.jpg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/tabbar'
  import TabBarItem from '../../common/tabbar/tabbarItem'

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
