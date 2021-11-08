<template>
  <div>
    <button @click="validate">验证</button>
  </div>
</template>

<script lang="ts" setup>
import validator from '@/utils/validator'

function errorMessage(msg: string) {
  console.error(msg)
}
const rules = {
  address: {
    require: true,
    // message: '地址必填'
    error() {
      errorMessage('地址必填')
    },
  },
  mobilePhone: [
    {
      require: true,
      error() {
        errorMessage('手机号必填')
      },
    },
    {
      pattern: /\d{11}/,
      error() {
        errorMessage('请输入11位手机号')
      },
    },
  ],
}

const form = {
  address: '',
  mobilePhone: '1',
}

async function validate() {
  let success = await validator(rules, form)
  console.log(success)
}
</script>
<style lang="scss"></style>
