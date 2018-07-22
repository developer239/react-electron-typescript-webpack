import { property, generateWindowObject, createWindow } from './windowHelper'


describe('CreateWindow', () => {
  describe('property', () => {
    const fakeObject = { someProperty: 'yay' }
    it('it returns object property if exists', () => {
      expect(property(fakeObject, 'someProperty')).toEqual('yay')
    })
    it('it returns undefined if property does not exist', () => {
      expect(property(fakeObject, 'nope')).toEqual(undefined)
    })
  })

  describe('generateWindowObject', () => {
    it('it generates empty window object', () => {
      expect(generateWindowObject()).toEqual({
        isOpen: false,
        window: null,
      })
    })
  })

  describe('createWindow', () => {
    it('initializes new window with no option values', () => {
      const windowReference = {}
      const createdWindow = createWindow(windowReference)()
      expect(createdWindow.options).toEqual({
        show: false,
        width: 600,
        height: 600,
        x: 0,
        y: 0,
      })
      expect(windowReference).toEqual({
        isOpen: true,
        window: createdWindow,
      })
    })
    it('initializes new window with all option values', () => {
      const windowReference = {}
      const fakeName = 'myFakeName'
      const fakeOptions = {
        width: 800,
        height: 800,
        x: 200,
        y: 200,
      }
      const fakeSpecial = {
        touchBar: true,
      }
      const createdWindow = createWindow(windowReference)(fakeName, fakeOptions, fakeSpecial)
      expect(createdWindow.options).toEqual({
        ...fakeOptions,
        touchBar: fakeSpecial.touchBar,
        show: false,
      })
      expect(windowReference).toEqual({
        isOpen: true,
        window: createdWindow,
      })
    })
  })
})
