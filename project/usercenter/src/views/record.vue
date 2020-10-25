<template>
  <div>
    <div v-for="(item, index) in list" :key="index" class="record-list">
      <div>{{ item.name }}</div>
      <div style="color:#999">{{ item.exchangeDate | globalFormatTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "record",
  data() {
    return {
      list: {}
    };
  },
  created() {
    this.getRecords();
  },
  methods: {
    async getRecords() {
      let user = JSON.parse(localStorage.getItem("userInfo"));
      console.log("record user", user);
      const data = this.yGet("/shop/exchangedRecord", {
        id: user._id
      });
      console.log("record", user.record);
      this.list = user.record;
    }
  }
};
</script>

<style lang="scss">
.record-list {
  padding: 30px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: space-between;
}
</style>
