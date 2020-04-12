<!--
 * @功能描述: 
 * @版本: 
 * @作者: 张亮三
 * @Date: 2020-04-12 09:59:32
 * @最新修改内容: 
 * @LastEditTime: 2020-04-12 10:15:57
 -->
<template>
  <div id="app">
   <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
