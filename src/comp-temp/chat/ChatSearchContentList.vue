<template>
  <ScrollLoadPlus
    :get-list="getList"
    no-init-load
  >
    <ChatSearchContentItem />
    <ChatSearchContentItem />
    <ChatSearchContentItem />
  </ScrollLoadPlus>
</template>

<script>
import ChatSearchContentItem from './ChatSearchContentItem.vue'
import ScrollLoadPlus from '@/components/ScrollLoad/ScrollLoadPlus.vue'
export default {
  components: {
    ChatSearchContentItem,
    ScrollLoadPlus
  },
  methods: {
    async getList () {
      return {
        list: []
      }
    }
  }
}
</script>
