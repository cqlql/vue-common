<template>
  <div class="chat-search">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div class="chat-search__section">
          <div class="chat-search__section-title">
            好友
          </div>
          <div class="chat-search__section-content">
            <img-text
              v-for="user of friends"
              :key="user.id"
              :user="user"
            />
          </div>
          <div class="chat-search__section-footer">
            查看全部
          </div>
        </div>

        <div class="chat-search__section">
          <div class="chat-search__section-title">
            聊天记录
          </div>
          <div class="chat-search__section-content">
            <ChatSearchContentItem />
            <ChatSearchContentItem />
          </div>
          <div class="chat-search__section-footer">
            查看全部
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="聊天记录" name="second">
        <ChatSearchContentList />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ImgText from './ImgText.vue'
import ChatSearchContentItem from './ChatSearchContentItem.vue'
import ChatSearchContentList from './ChatSearchContentList.vue'

export default {
  components: {
    ImgText,
    ChatSearchContentItem,
    ChatSearchContentList
  },
  data () {
    return {
      activeName: 'first',
      friends: [
        {
          id: '1',
          avatar: 'http://placehold.it/36x36',
          name: '张三'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>

<style lang="scss">
  $hoverColor:#f1f1f1;

  .chat-search {
    border: 1px solid #949697;
    // padding: 10px;
    .chat-search-content-item:hover {
      background-color: $hoverColor;
    }

    // .el-tabs__header {
    //   // margin: 0;
    //   margin: 0 8px;
    // }
  }
  .chat-search__section {}

  .chat-search__section + .chat-search__section {
    border-top: 1px solid #dfe6ec;
  }

  .chat-search__section-title {
    padding: 5px 10px;
    color: #909399;
  }

  .chat-search__section-content {
    .img-text {
      padding: 5px 10px;
    }

    .img-text:hover {
      background-color: $hoverColor;
    }
  }

  .chat-search__section-footer {
    color: #1890ff;
    padding: 5px 10px;
  }

  .chat-search__section-footer:hover {
    background-color: $hoverColor;
  }

</style>
