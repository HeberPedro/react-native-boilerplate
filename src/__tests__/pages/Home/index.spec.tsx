import React from 'react'

import { render } from '@testing-library/react-native'

import Home from '../../../pages/Home'

describe('[PAGE]: Home', () => {
  it('should be render Home page', () => {
    render(<Home />)
  })
})
