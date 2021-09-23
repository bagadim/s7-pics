import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
    };
    render() {
        return (
            <div className="ui segment" style={{ margin: '10px 10px 0' }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field"></div>
                    <label htmlFor="searchTerm">Input search:</label>
                    <input
                        onChange={(e) =>
                            this.setState({ term: e.target.value })
                        }
                        value={this.state.value}
                        id="searchTerm"
                        type="text"
                    />
                </form>
            </div>
        );
    }
}
