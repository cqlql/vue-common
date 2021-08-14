<template>
  <div class="chat-window">
    <div class="chat-window__nav">
      <div class="chat-window__nav-top">
        search-input
      </div>
      <div class="chat-window__nav-list">
        <div class="chat-window__nav-item">
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

<style scoped>
.chat-window {
  display: flex;
  height: 100%;
}

.chat-window__nav {
  background-color: #e6e8eb;
  width: 300px;
  padding: 10px 10px;
}

.chat-window__content {
  background-color: #f2f3f5;
  flex: 1;
  overflow: auto;
}

.chat-window__nav-top {
  height: 30px;
}

.chat-window__nav-item {

}
</style>
