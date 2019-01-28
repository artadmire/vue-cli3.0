<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  // data() {
  //   return {
  //     msg: "Welcome to Your Vue.js + TypeScript App"
  //   }
  // }
  private msg: string = "Welcome to Your Vue.js + TypeScript App";
  private created() {
    // console.log("baseURL")
  }
}
</script>
