<template>
  <div class="price-container">
    <div class="price-top">
      商城
    </div>
    <div class="img-container">当前积分 {{ user.integration }}</div>
    <div class="shopList">商品列表</div>
    <div class="list">
      <div class="list-title" v-for="item in list" :key="item.id">
        <img :src="item.image" alt="" class="shop-img" />
        <div class="shopTitle">{{ item.name }}</div>
        <div class="shopPrice">
          <div class="price-icon">
            <img src="../assets/img5.png" alt="" class="icon-img" />
            {{ item.price }}积分
          </div>
          <button class="exchange-btn" @click="exchange(item)">兑换</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "price",
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  watch: {
    user: {
      handler(newV, oldV) {
        console.log("vuex user===>", newV);
        console.log("vuex user point===>", newV.integration);
      },
      deep: true
    }
  },
  created() {
    this.getList();
    console.log("user", this.user);
  },
  methods: {
    ...mapActions(["updateInfo"]),
    async getList() {
      let params = this.list;
      const data = await this.yGet("/shop/shopList", params);
      if (data) {
        this.list = data;
      }
    },
    async exchangeShop(ele) {
      const data = await this.yPut("/shop/exchange", { id: ele._id });
      if (data) {
        console.log("PRICE data", data);
        this.getPoint();
        this.$message({
          message: "兑换成功！",
          type: "success"
        });
      }
    },
    exchange(ite) {
      this.exchangeShop(ite);
    },
    async getPoint() {
      let userid = JSON.parse(localStorage.getItem("userInfo"));
      let params = {
        id: userid._id
      };
      const data = await this.yGet("/user/userinfo", { params });
      if (data) {
        console.log("userinfo", data);
        this.updateInfo(data);
      }
    }
  }
};
</script>

<style lang="scss">
.price-container {
  display: flex;
  flex-direction: column;
  .price-top {
    width: 96%;
    box-shadow: 0 3px 5px #eee;
    margin: 0 auto;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    background-image: url("../assets/jifen-background.png");
    margin-top: 35px;
    text-align: center;
    width: 95%;
    height: 200px;
    img {
      width: 90%;
      height: 200px;
    }
  }
  .shopList {
    margin: 20px 0 0 50px;
    font-size: 18px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    // margin-left: 30px;
    .list-title {
      box-shadow: 0 3px 10px #ddd;
      border-radius: 5px;
      padding: 10px;
      margin-left: 30px;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      .shop-img {
        width: 230px;
        height: 230px;
      }
      .shopTitle {
        /* 单行文本超出，显示省略 */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 230px;
        height: 30px;
      }
      .shopPrice {
        display: flex;
        justify-content: space-between;
        .price-icon {
          color: #b693fe;
          .icon-img {
            width: 20px;
            height: 18px;
          }
        }
        .exchange-btn {
          border: none;
          background-color: #b693fe;
          color: #fff;
          border-radius: 5px;
          outline: none;
        }
      }
    }
  }
}
</style>
