import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

export default class App extends Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results });
    };
    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div style={{ margin: '10px' }}>
                    Found {this.state.images.length} images
                </div>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
