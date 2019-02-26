<template>
  <div class="calandar">
   <vue-better-calendar></vue-better-calendar>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from "vant";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Footer from "@/components/Footer.vue";
import VueBetterCalendar from 'vue-better-calendar'
Vue.use(VueBetterCalendar)
@Component({
  components: {
    HelloWorld,
    "van-button": Button,
    Footer,
    "vue-better-calendar":VueBetterCalendar
  },
})
export default class Calandar extends Vue {
  private msg: string = "Welcome to Your Vue.js + TypeScript App";
  private created() {
    console.log("baseURL")
  }
}
</script>
