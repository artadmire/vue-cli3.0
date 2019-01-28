<template>
  <div class="test">
    <h1>This is an test page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class About extends Vue {
  private msg:string =  ""
  private created() {
    for(let i = 0 ; i<10 ; i ++) {
      
    }
    
  }
}
</script>