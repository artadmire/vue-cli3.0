<template>
  <div class="test">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({})
  export default class Test extends Vue {
    private msg: string = "This is an test page";
    private created() {
      const arr: any = ["2", "0", "1", "9"];
      console.log(arr.map(parseInt));
  
    }
  }
</script>