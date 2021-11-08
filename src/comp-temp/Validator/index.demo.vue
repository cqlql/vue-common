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
  name: {
    require: true,
    error() {
      errorMessage('名称必填')
    },
  },
  address: [
    {
      require: true,
      error() {
        errorMessage('地址必填')
      },
    },
    {
      validator(val: string) {
        return val.length >= 2
      },
      error() {
        errorMessage('不能少于2个字符')
      },
    },
  ],
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
