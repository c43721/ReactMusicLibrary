import React, { Component } from 'react';
import "./Table.css"
export default class Table extends Component {
    render() {
        return this.props.items ? (
            <table className="table table-striped">
                <tbody>
                    <tr className="table-headers">
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>

                    {this.props.items.map(musicItem =>
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
        ) : null;
    }
}
