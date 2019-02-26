<template>
  <div class="item">
   {{ msg }}
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
export default class Item extends Vue {
  data() {
    return {
      msg: "Welcome to Your Item Pages"
    }
  }
  private msg: string = "Welcome to Your Vue.js + TypeScript App";
  private created() {
    console.log("baseURL")
  }
}
</script>
