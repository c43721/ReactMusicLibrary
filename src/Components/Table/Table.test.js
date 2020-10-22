import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table component', () => {

    test('renders with data', () => {
        const data = [{
            id: 1,
            title: "Drive My Car",
            album: "Rubber Soul",
            artist: "The Beatles",
            genre: "Folk Rock",
            releaseDate: "12/03/1965"
        }, {
            id: 2,
            title: "Norwegian Wood",
            album: "Rubber Soul",
            artist: "The Beatles",
            genre: "Folk Rock",
            releaseDate: "12/03/1965"
        }]

        const { container } = render(<Table items={data} />);
        expect(container).toBeInTheDocument();
    });

    test('does not render with data', () => {
        const { container } = render(<Table />);
        expect(container).toBeEmpty();
    })

});

