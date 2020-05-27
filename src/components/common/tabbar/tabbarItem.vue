<template>
  <div class="tab-tar-item" @click="itemClick">
<!--    包装一个div,将一些属性放在div中，这样使得插条替换时，这些属性方法依旧可以用-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "tabbarItem",
    props:{
      path: String,
      activeColor:{
        path: String,
        default: 'red'
      }
    },
    data() {
      return{
        // isActive: true
      }
    },
    computed:{
      isActive(){
        //indexOf
        // /home -> item1(/home) = ture
        // /home -> item2(/category) = flase
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-tar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-tar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
