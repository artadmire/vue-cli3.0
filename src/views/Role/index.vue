<template>
  <div class="role">
    <img alt="Vue logo" src="~@/assets/logo.png">
    <HelloWorld :msg="msg"/>
    <van-button type="primary">默认按钮</van-button>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from "vant";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    HelloWorld,
    "van-button": Button,
    Footer
  },
})
export default class Role extends Vue {
  private msg: string = "Welcome to Your Vue.js + TypeScript App";
  private created() {
    console.log("baseURL")
  }
}
</script>
