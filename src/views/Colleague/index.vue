<template>
  <div class="colleague">
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
export default class Colleague extends Vue {
  data() {
    return {
      msg: "Welcome to Your colleague Pages"
    }
  }
  private msg: string = "Welcome to Your Vue.js + TypeScript App";
  private created() {
    console.log("baseURL")
  }
}
</script>
