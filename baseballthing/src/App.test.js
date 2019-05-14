import React from 'react';
import App from './App';

import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('should display count', () => {
    const { getByText } = render(<App />);

    getByText(/count/i);
  });
})