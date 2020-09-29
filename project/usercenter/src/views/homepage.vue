<template>
    <div class="home-container">
        <div class="home-left">
            <img :src="user.avatar" class="home-icon">
            <span style="margin:20px 0;">{{user.nickname}}</span>
            <div :class="[$route.name==='Center'||$route.name==='UserInfo'||$route.name==='Record'?'bgColor':'']" style="margin-top:150px;"><router-link to="/homepage/center">个人中心</router-link></div>
            <div :class="[$route.name==='Price'?'bgColor':'']"><router-link to="/homepage/price">积分商城</router-link></div>
            <div @click="confirmQuit">退出</div>
        </div>
        <div class="home-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name:"homepage",
    data() {
        return {
            list:{}   //定义一个新对象，来接收vuex传过来的数据
        }
    },
    computed:{
        ...mapState({
            "user":state=>state.user
        })
    },
    methods:{
        /* 退出到登录页面，如果用push，那么下一次还能回退到当前页面 */
        confirmQuit() {
        this.$confirm('是否退出', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                localStorage.removeItem('userid');
                this.$router.replace({
                name:"Login"
            })
            this.$message({
                type: 'success',
                message:'退出成功！'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
            });          
            });
        }
    },
}
</script>

<style lang="scss">
    .home-container{
        .home-left{
            position: fixed;
            width: 250px;
            top: 0;
            left: 0;
            bottom: 0;
            background-color:#303841;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 50px 0;
            color: #fff;
            .home-icon{
                width:100px;
                height:100px;
                border-radius: 50%;
            }
            div{
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 30px 0;
                cursor: pointer;
            }
            div:hover{
                background-color: cornflowerblue;
            }
            a{
                color: #fff;
                text-decoration: none;
            }
        }
    }
    .bgColor{
        background-color: rosybrown;
    }

    .home-right{
        padding-left: 300px;
    }
</style>