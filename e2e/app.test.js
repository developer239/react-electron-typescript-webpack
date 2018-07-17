import sum from '../src/sum'

describe('App Test', () => {
  describe('first module', () => {
    it('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
  })
})

