import React from 'react';
import { render, cleanup, waitForDomChange, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
describe('App component test set', () => {

  test('renders title on app', () => {
    const { getByText } = render(<App />);
    const headingElement = getByText(/M Akber Iqbal/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('enter a search input, which is passed to PopularPlaces component', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const searchField = getByPlaceholderText(/Search for/i);
    fireEvent.change(searchField, {
      targe: { value: 'Karachi' }
    });
    await waitForDomChange(() => {
      expect(getByText(/: Karachi/)).toBeInTheDocument();
    });
  });

  test('api returns a result >0', async () => {
    const { getByText, getByTestId } = render(<App />);
    await waitForDomChange(() => {
      expect(getByText(/Popular around you/)).toBeInTheDocument();
    });
  });

});


