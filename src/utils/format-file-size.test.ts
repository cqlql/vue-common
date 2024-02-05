import { describe, expect, it } from 'vitest'
import formatFileSize from './format-file-size'

describe('file-size-value', () => {
  it('test', () => {
    expect(formatFileSize(1024)).toBe('1KB')
    expect(formatFileSize(34494)).toBe('33.7KB')
    expect(formatFileSize(3602753507)).toBe('3.4GB')
  })
})
