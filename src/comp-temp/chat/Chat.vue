<template>
  <div class="chat-window">
    <div class="chat-window__nav">
      <div class="chat-window__nav-top">
     search
      </div>
      <div class="chat-window__nav-list">
        <div class="chat-window__nav-item active">
          <ImgText />
        </div>
        <div class="chat-window__nav-item">
          <ImgText />
        </div>
        <div class="chat-window__nav-item">
          <ImgText />
        </div>
        <div class="chat-window__nav-item">
          <ImgText />
        </div>
      </div>
    </div>
    <div class="chat-window__content">
      <div class="chat-window__tit">
        闪亮
      </div>
      <ChatContent />
    </div>
  </div>
</template>

<script>
import ImgText from '../img-text/ImgText.vue'
import ChatContent from './ChatContent.vue'
export default {
  components: {
    ImgText,
    ChatContent
  }
}
</script>

<style scoped lang="scss">
.chat-window {
  display: flex;
  height: 100%;

  /* 滚动条控制 */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* 滑道 */
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #d4d4d4;
  }
}

.chat-window__nav {
  background-color: #e6e8eb;
  width: 300px;
  position: relative;
}

.chat-window__content {
  background-color: #f2f3f5;
  flex: 1;
  overflow: auto;
}

.chat-window__tit {
  border-bottom: 1px solid #dcdee0;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  height: 48px;
  line-height: 2;
  box-sizing: border-box;
}

.chat-window__nav-top {
  /* height: 30px; */
  padding: 10px;
}

.chat-window__nav-list {
  overflow: auto;
  position: absolute;
  top: 48px;
  bottom: 0;
  width: 100%;
}

.chat-window__nav-item {
  .img-text {
    padding: 6px 0;
    margin: 0 10px;
    border-bottom: 1px solid #ddd;
  }
}

.chat-window__nav-item:hover {
  background-color: #d7d9db;

  .img-text {
    border-bottom-color: #d7d9db;
  }
}

.chat-window__nav-item.active {
  background-color: #c5c4c4;

  .img-text {
    border-bottom-color: #c5c4c4;
  }
}

</style>
