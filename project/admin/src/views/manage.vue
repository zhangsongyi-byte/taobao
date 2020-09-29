<template>
  <div class="manage-container">
    <div class="slide"></div>
    <div class="right-main">
      <h3>管理商品</h3>
      <div class="manage-wapper">
        <el-button type="primary" icon="el-icon-edit" class="add-btn" @click="toggleModel(true)"
          >增加</el-button
        >
        <el-table :data="list" style="width: 100%">
          <el-table-column prop="_id" label="ID" width="270"></el-table-column>
          <el-table-column prop="name" label="商品名称" width="420"></el-table-column>
          <el-table-column prop="image" label="图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.image" class="pro-img" alt="">
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog :title="modelTitle" :visible.sync="dialogFormVisible">
      <el-form :model="proObj" :rules="rules" ref="modelForm">
        <el-form-item label="商品名称" :label-width="'100px'" prop="name">
          <el-input v-model="proObj.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品图片链接" :label-width="'100px'" prop="image">
          <el-input v-model="proObj.image" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="兑换所需积分" :label-width="'100px'" prop="price">
          <el-input v-model.number="proObj.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="check">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "manage",
  data() {
    return {
      dialogFormVisible:false,
      list: [],
      modelTitle:'new',
      proObj:{

      },
      rules:{
        name:[
          { required:true,message:"请输入商品名称",trigger:"blur" }
        ],
        image:[
          { required:true,message:"请输入商品地址",trigger:"blur" }
        ],
        price:[
          { required:true,message:"请输入兑换积分",trigger:"blur" },
          { type: 'number', message: '积分必须为数字值'}
        ]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    check(){
      this.$refs.modelForm.validate((valid) => {
        if (valid) {
          this.create()
        } else {
          return false;
        }
      });
    },
    async getList() {
      const data = await this.yGet("/admin/shopList");
      if (data) {
        console.log(data);
        this.list = data;
      }
    },
    /* 控制弹框显隐 */
    toggleModel(bool){
      this.dialogFormVisible=bool;

    },
    async create(){
      console.log('proObj',this.proObj)
      const data=await this.yPost('admin/shopItem',this.proObj)
      if(data){
        this.$message({
          message: '添加成功!',
          type: 'success'
        });
        /* 清空弹窗内的信息 */
        this.proObj={}
        this.toggleModel(false);
        /* 重新请求商品列表 */
        this.getList();
      }
    }
  }
};
</script>

<style lang="scss">
.manage-container {
  padding-left: 36px;
  .slide {
    position: fixed;
    width: 36px;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #ccc;
  }
  .right-main {
    h3 {
      font-size: 20px;
      padding: 18px 30px;
      margin: 0;
      // border-bottom: solid 1px #dcdcdc;
      box-shadow: 0 2px 4px #eee;
    }
    .add-btn {
      margin: 15px 0 15px 15px;
      width: 89px;
    }
    .pro-img{
      width: 100px;
      height: 100px;
    }
  }
}
</style>
