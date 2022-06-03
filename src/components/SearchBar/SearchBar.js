import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'best_match': 'Best Match',
    'rating': 'Highest Rated',
    'review_count': 'Most Reviewed'
}

class SearchBar extends React.Component {

    renderSortByOptions(sortByOptions) {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOption}>{sortByOptionValue}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{ this.renderSortByOptions(sortByOptions) }</ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }

}

export default SearchBar