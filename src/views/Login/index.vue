<template>
  <form class="login" action="" @submit.prevent="onSubmit">
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" required clearable label="用户名" right-icon="question-o"  />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="warning">登录</van-button>
  </form>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  import {
    Field,
    CellGroup,
    Button
  } from "vant"
  @Component({
    components: {
      "van-cell-group": CellGroup,
      "van-field": Field,
      "van-button": Button
    }
  })
  export default class Login extends Vue {
    private value: string = "" ;
    private password: string = "" ;
    private onSubmit() {
      return false;
    }
  }
</script>
<style  lang="less">
  .van-button {
    margin:0 auto;
    margin-top:20px;
    width: 200px;
    box-sizing: border-box;
    display: block;
  }

</style>
