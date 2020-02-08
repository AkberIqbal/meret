import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MultiCarousel from './multiCarousel';

afterEach(cleanup);
describe('Popular places test set', () => {
    const testPopularPlacesApiData = {
        "data": [
            {
                "title": "Sydney Cricket Ground",
                "img": "https://placeimg.com/240/240/nature",
                "location": "Sydney, NSW"
            },
            {
                "title": "Melbourne Cricket Ground",
                "img": "https://placeimg.com/240/240/nature",
                "location": "Melbourne, VIC"
            }
        ]
    };

    test('ul is rendered as part of MultCarousel library', async () => {
        const { container } = render(<MultiCarousel data={testPopularPlacesApiData} />);
        container.querySelector('ul')    
    });
});