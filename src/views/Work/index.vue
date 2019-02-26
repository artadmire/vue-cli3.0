<template>
  <div class="work">
    <h1>This is an work page</h1>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue"
@Component({
  components: {
    Footer
  }
})
export default class Work extends Vue {}
</script>