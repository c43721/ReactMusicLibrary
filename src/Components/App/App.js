import Axios from 'axios';
import React, { Component } from 'react';
import "./App.css"

import Table from "../Table/Table"
import Searchbar from '../Navigation/Searchbar';

const API_URL = "http://www.devcodecampmusiclibrary.com/api/music"

export default class App extends Component {
  state = {
    results: null
  }

  async componentDidMount() {
    const { data } = await Axios.get(API_URL)
    const apiResults = data

    this.setState({
      results: apiResults
    })
  }

  render() {
    return (
      <>
        <h1 className="header">Music Library V2</h1>

        <Searchbar items={this.state.results} />

        <Table items={this.state.results} />
      </>
    );
  }
}