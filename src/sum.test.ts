import { sum } from './sum'
import { test, expect } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4)
})