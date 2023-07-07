<template>
  <div class="chat-search-content-item">
    <div class="chat-search-content-item__left">
      <img src="http://placehold.it/36x36" alt="" />
    </div>
    <div class="chat-search-content-item__right">
      <div class="chat-search-content-item__r-top">
        <div class="chat-search-content-item__name">中南海</div>
        <div class="chat-search-content-item__date">21/9/1</div>
      </div>
      <div class="chat-search-content-item__r-cont-wrap">
        <div
          class="chat-search-content-item__content"
          v-html="contentFinally"
        />
        <div class="chat-search-content-item__opt">
          <a href="">查看上下文</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showKeyWrod from '@/utils/keyword-highlight'
export default {
  data() {
    return {
      keyword: '你的西藏',
      content:
        '今日 @李秀1(你的西藏管家秀灵)     <b>全</b>体成员卫生轮值，请小组成员利用下班前15分钟进行打扫（老板办公室、办公区域、茶水间、卫生间、楼梯通道）',
    }
  },
  computed: {
    contentFinally() {
      return showKeyWrod(this.content, this.keyword)
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.chat-search-content-item {
  display: flex;
  padding: 5px 10px;
}

.chat-search-content-item__left {
  width: 50px;
  padding-top: 4px;

  img {
    width: 40px;
    height: 40px;
  }
}

.chat-search-content-item__right {
  flex: 1;
}

.chat-search-content-item__r-top {
  color: #999;
  display: flex;
}

.chat-search-content-item__name {
}

.chat-search-content-item__date {
  flex: 1;
  text-align: right;
}

.chat-search-content-item__r-cont-wrap {
  display: flex;
}

.chat-search-content-item__content {
  flex: 1;

  b {
    background-color: yellow;
  }
}

.chat-search-content-item__opt {
  width: 100px;
  text-align: right;
}
</style>
