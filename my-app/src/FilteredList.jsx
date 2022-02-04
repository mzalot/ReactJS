import React, { Component } from 'react';
import { DropdownButton, Dropdown, onSelect } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            type: "",
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Add condition to check item’s type

        if(item.type == this.state.type) {
            return item.name;
        } else if (this.state.type == ""){
            return item.name;
        }

    }
    /* TODO: Add an event handling method for when an item in dropdown is selected
       Per the DropdownButton documentation, this function should take in an eventKey and
       event
    */
    button = (eventKey, event) => {
//         console.log(eventKey);
        if(eventKey == "All"){
            this.setState({type:""});
        }else{
            this.setState({type: eventKey });
//            console.log(this.state);
        }
    }
    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                {/* TODO: Add more menu items with onSelect handlers*/}
                <DropdownButton
                    id="dropdown-basic-button"
                    title={"Type"}
                    onSelect ={this.button}
                >
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Fruit">Fruits</Dropdown.Item>
                  <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}
export default FilteredList;