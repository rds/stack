// @flow

export const HOME_ROUTE = '/'
export const HELLO_ROUTE = '/hello'
export const NOT_FOUND_ROUTE = '/404'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
