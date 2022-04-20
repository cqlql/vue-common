<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String,
  },
  setup(props) {
    console.log(
      `🚀 -- file: DemoJSXChildVue.tsx -- line 8 -- setup -- props2`,
      props,
    )
    return () => {
      return <div>{props.name}</div>
    }
  },
})
</script>

<style lang="scss"></style>
