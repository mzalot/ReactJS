import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: ""
            type: ""
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Add condition to check item’s type
        return item.name.toLowerCase().search(this.state.search) !== -1;
    }
    /* TODO: Add an event handling method for when an item in dropdown is selected
       Per the DropdownButton documentation, this function should take in an eventKey and
       event
    */
    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                {/* TODO: Add more menu items with onSelect handlers*/}
                <DropdownButton id="typeDropdown" title={"Type"}>
                  <MenuItem eventKey="all" onSelect={HANDLER FUNCTION HERE}>All</MenuItem>
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}
export default FilteredList;