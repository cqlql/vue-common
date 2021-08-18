
<script>
export default {
  render () {
    const slotDefault = this.$slots.default
    return (
      <div class="j-row">
        {slotDefault && slotDefault()}
      </div>
    )
  }
}

</script>

<style lang="scss">
  .j-row {
    display: flex;
  }
</style>
