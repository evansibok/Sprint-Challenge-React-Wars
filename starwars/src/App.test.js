import React from 'react'
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<App />)
})

it("renders without crashing", () => {
  expect(wrapper.queryByText(/react wars/i)).toBeInTheDocument();
})