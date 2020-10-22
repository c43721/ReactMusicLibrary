import Axios from 'axios';
import React, { Component } from 'react';
import "./App.css"

import Table from "../Table/Table"
import Searchbar from '../Searchbar/Searchbar';

const API_URL = "http://www.devcodecampmusiclibrary.com/api/music"

export default class App extends Component {
  state = {
    results: null,
    renderTable: true
  }

  async componentDidMount() {
    const { data } = await Axios.get(API_URL)
    const apiResults = data

    this.setState({
      results: apiResults
    })
  }

  handleButtonClick() {
    this.setState((prevRender) => {
      return {
        renderTable: !prevRender.renderTable
      }
    })
  }

  render() {
    return (
      <>
        <div className="center">
          <h1 className="header">Music Library V2</h1>

          <button className="btn" onClick={() => this.handleButtonClick()}>{this.state.renderTable ? "View Search" : "View Table"}</button>
        </div>

        {this.state.renderTable ? (
          <Table items={this.state.results} />
        ) : (
            <Searchbar items={this.state.results} />
          )}
      </>
    );
  }
}