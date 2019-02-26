<template>
    <footer >
        <van-tabbar  v-model="COMMON_MODULE.active" @change="onChange(COMMON_MODULE.active)"  active-color="red">
            <van-tabbar-item icon="home-o" to="/">工作</van-tabbar-item>
            <van-tabbar-item icon="search" to="/role"  >角色</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/item" >事项</van-tabbar-item>
            <van-tabbar-item icon="setting-o"  to="/colleague" >同事</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/calandar"  >日历</van-tabbar-item>
        </van-tabbar>
    </footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Tabbar, TabbarItem } from 'vant';
import { State, Action } from "vuex-class";
@Component({
    components: {
        "van-tabbar": Tabbar,
        "van-tabbar-item": TabbarItem
    }
})
export default class Footer extends Vue{
    @State private COMMON_MODULE: any;
    @Action private changeActive: any;
    
    private created () {
        const path: string = (this.$router as any).history.current.path;
        if(path === "/") {
            this.changeActive(0);
        }else if(path === "/role") {
            this.changeActive(1);
        }else if(path === "/item") {
            this.changeActive(2);
        }else if(path === "/colleague") {
            this.changeActive(3);
        }else if(path === "/calandar") {
            this.changeActive(4);
        }
       
    }
    
    private mounted () {}
    private onChange(index: any) {
        this.changeActive(index);
    }
   

}
</script>
<style lang="less">

</style>
