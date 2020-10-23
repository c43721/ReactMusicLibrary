import React from 'react';
import "./Table.css"

export default function Table({ items }) {
    return (
        items ? (
            <table className="table">
                <tbody>
                    <tr className="table-headers">
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>

                    {items.map(musicItem =>
                        <tr className="row" key={musicItem.id}>
                            <td>{musicItem.title}</td>
                            <td>{musicItem.album}</td>
                            <td>{musicItem.artist}</td>
                            <td>{musicItem.genre}</td>
                            <td>{musicItem.releaseDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        ) : null
    );
}
