import sinon from 'sinon'
// note that there is a __mocks__/electron so we don't have
// to use require statement
import electron from 'electron'
import { send, listenTo } from './messageHelper'


describe('MessageHelper', () => {
  it('listenTo', () => {
    const ipcMainOnSpy = sinon.spy(electron.ipcMain, 'on')
    const fakeName = 'myName'
    const fakeCallback = sinon.fake()
    listenTo(fakeName, fakeCallback)

    expect(ipcMainOnSpy.callCount).toBe(1)
    expect(ipcMainOnSpy.calledWith(fakeName, fakeCallback)).toBe(true)
  })

  describe('send', () => {
    const fakeName = 'fakeName'
    const fakePayload = { some: 'payload' }

    it('it calls window webContents send', () => {
      const fakeSend = sinon.fake()
      const fakeEvent = {
        window: {
          webContents: {
            send: fakeSend,
          },
        },
      }

      send(fakeEvent)(fakeName, fakePayload)

      const call = fakeSend.getCall(0)
      expect(call.args[0]).toEqual(fakeName)
      expect(call.args[1]).toEqual({ payload: fakePayload })
    })

    it('it calls event sender send', () => {
      const fakeSend = sinon.fake()
      const fakeEvent = {
        sender: {
          send: fakeSend,
        },
      }

      send(fakeEvent)(fakeName, fakePayload)

      const call = fakeSend.getCall(0)
      expect(call.args[0]).toEqual(fakeName)
      expect(call.args[1]).toEqual({ payload: fakePayload })
    })
  })
})
