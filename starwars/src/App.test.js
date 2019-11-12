import React from 'react'
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<App />)
})

describe('App Component', () => {
  it("contains 'react wars' text", () => {
    expect(wrapper.queryByText(/react wars/i)).toBeInTheDocument();
  })
})