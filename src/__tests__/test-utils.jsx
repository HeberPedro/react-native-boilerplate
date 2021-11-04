import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { render as rltRender } from '@testing-library/react-native'

import rootReducer from '../store/modules/rootReducer'

const render = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  )

  return rltRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react-native'
// override render method
export { render }
