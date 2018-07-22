import sinon from 'sinon'
// note that there is a __mocks__/electron so we don't have
// to use require statement
import electron from 'electron'
import { send, listenTo } from './messageHelper'


describe('MessageHelper', () => {
  it('listenTo', () => {
    const ipcRendererSpy = sinon.spy(electron.ipcRenderer, 'on')
    const fakeName = 'myName'
    const fakeCallback = sinon.fake()
    listenTo(fakeName, fakeCallback)

    expect(ipcRendererSpy.callCount).toBe(1)
    expect(ipcRendererSpy.calledWith(fakeName, fakeCallback)).toBe(true)
  })

  it('send', () => {
    const ipcRendererSpy = sinon.spy(electron.ipcRenderer, 'send')
    const fakeName = 'myName'
    const fakePayload = { fake: 'payload' }
    send(fakeName, fakePayload)

    expect(ipcRendererSpy.callCount).toBe(1)
    expect(ipcRendererSpy.calledWith(fakeName, { payload: fakePayload })).toBe(true)
  })
})
