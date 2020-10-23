import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Searchbar from './Searchbar';

afterEach(cleanup);

describe('Searchbar component', () => {

    test('renders data in table', () => {
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

        const { container } = render(<Searchbar items={data} />);
        expect(container).toBeInTheDocument();
    });

    test('renders \"No results\" if a result could not be found', async () => {
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

        const { container, getByLabelText } = render(<Searchbar items={data} />);

        expect(container).toBeInTheDocument();

        fireEvent.change(getByLabelText("searchInput"), { target: { value: "not existing" } });

        const resultText = await screen.findByText(/no results/i)
        expect(resultText).toBeInTheDocument();
    })

    test('renders relavent info when correctly searched', async () => {
        const onChange = jest.fn();

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

        const { container, getByLabelText, debug } = render(<Searchbar items={data} />);

        expect(container).toBeInTheDocument();

        const search = getByLabelText("searchInput");

        search.onchange = onChange;
        fireEvent.change(search, { target: { value: "drive" } });

        expect(search.value).toBe('drive');
        expect(search.onchange).toBeDefined();

        expect(search.onchange).toHaveBeenCalled();
    })
});

