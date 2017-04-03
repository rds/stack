import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

import {
  sayHello
} from '../../../src/client/action/hello'

const mockStore = configureMockStore()

test('say hello', () => {
  const store = mockStore()
  return store.dispatch(sayHello())
    .then(() => {
      expect(store.getActions()).toEqual([sayHell()])
    })
})
