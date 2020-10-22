import React, { Component } from 'react';

export default class Table extends Component {
    render() {

        //TODO make this a table
        return this.props.items ? (
            this.props.items.map(musicItem =>
                <div className="card" key={musicItem.id}>
                    {musicItem.title}
                </div>
            )
        ) : null;
    }
}
