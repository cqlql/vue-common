---
title: copyToClipboard 复制剪切板
---

## 基本使用

```ts
import { copyTextToClipboard } from '@/hooks/web/useCopyToClipboard'

function copy() {
  if (copyTextToClipboard('https://github.com')) {
    console.log('Copy Success')
  }
}
```

## hook 使用
