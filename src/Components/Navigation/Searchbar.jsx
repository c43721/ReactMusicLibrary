import React, { Component } from 'react';
import Fuse from "fuse.js";
import Table from '../Table/Table';

export default class Searchbar extends Component {
    state = {
        searchParam: '',
        searchResult: null
    }

    inputChangeHandler(e) {
        const value = e.target.value;

        this.setState({
            searchParam: value
        })

        this.searchForItems(this.state.searchParam)
    }

    searchForItems(searchParam) {
        const itemsToSearch = this.props.items

        const [, ...keys] = Object.keys(itemsToSearch[0])

        const options = {
            keys: keys,
            threshold: .3
        }

        const fuse = new Fuse(itemsToSearch, options)

        const resultingList = fuse.search(searchParam)

        this.setState({
            searchResult: resultingList.map(result => result.item)
        })
    }


    render() {
        return (
            <>
                <input type="text" placeholder="Your search goes here" onChange={(e) => this.inputChangeHandler(e)}></input>
                {this.state.searchParam !== "" ? <Table items={this.state.searchResult} /> : "No search"}
            </>
        );
    }
}
