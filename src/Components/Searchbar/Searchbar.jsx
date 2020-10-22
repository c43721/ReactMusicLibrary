import React, { Component } from 'react';
import Fuse from "fuse.js";
import Table from '../Table/Table';
import "./Searchbar.css";

export default class Searchbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchParam: '',
            searchResult: this.props.items
        }
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
            threshold: .05
        }

        const fuse = new Fuse(itemsToSearch, options)

        const resultingList = fuse.search(searchParam)

        this.setState({
            searchResult: resultingList.map(result => result.item)
        })
    }


    render() {
        return (
            <div className="container">
                <input className="search" type="text" placeholder="Your search goes here" onChange={(e) => this.inputChangeHandler(e)}></input>
                {this.state.searchParam !== "" ? this.state.searchResult.length ? <Table items={this.state.searchResult} /> : <p className="no-results">No results</p> : <Table items={this.props.items} />}
            </div>
        );
    }
}
