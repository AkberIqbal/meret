import React from 'react';
import { render, cleanup, waitForDomChange, waitForElement } from '@testing-library/react';
import FeaturedPlaces from './featuredPlaces';

afterEach(cleanup);
describe('Featured places test set', () => {
  
  test('gets data from api for cards',  async () => {
    const { getByText } = render(<FeaturedPlaces />);
    const linkElement = getByText(/featured/i);
    await waitForDomChange(()=>{
      expect(linkElement).toBeInTheDocument();
    })
  });

});