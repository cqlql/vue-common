<template>
  <div class="chat-demo">
    <Chat />
  </div>
</template>

<script>
import Chat from './Chat.vue'
export default {
  components: {
    Chat
  }

}
</script>

<style scoped>
.chat-demo {
  width: 800px;
  height: 500px;
}
</style>
