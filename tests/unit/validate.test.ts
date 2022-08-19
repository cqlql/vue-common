import { test } from 'vitest'

interface ErrorItem {
  field: string
  message: string
}

function validate(
  form: any,
  fieldRules: Record<string, any[]>,
  errorCallback: (errors: ErrorItem[]) => void,
) {
  const errors: ErrorItem[] = []

  for (const [key, rules] of Object.entries(fieldRules)) {
    rules.forEach((rule) => {
      if (!rule.test(form[key])) {
        errors.push({
          field: key,
          message: rule.error,
        })
      }
    })
  }

  if (errors.length > 0) {
    console.error('🚀 -- errors', errors)
    errorCallback(errors)

    throw errors
  }
}
test('validate 表单字段验证', () => {
  const form = {
    username: 'joly',
    password: '',
  }

  validate(
    form,
    {
      username: [
        {
          test: (v: string) => v.trim(),
          error: '不能为空',
        },
        {
          test: (v: string) => /\w{5,10}/.test(v),
          error: '最小5最大10',
        },
      ],
      password: [
        {
          test: (v: string) => v.trim(),
          error: '不能为空',
        },
      ],
    },
    (errors) => {
      // 有错这里才会执行
      console.error(errors)
    },
  )

  // 有错不会往下执行
})
