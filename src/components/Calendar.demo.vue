<template>
  <div style="">
    <div style="width:300px;margin:0 auto">
      <CalendarVue
        :month="2"
      />
    </div>
  </div>
</template>

<script>
import CalendarVue from './Calendar.vue'

export default {
  components: {
    CalendarVue
  }
}
</script>
