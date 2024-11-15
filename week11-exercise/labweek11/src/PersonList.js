import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  // Initialize state
  state = {
    persons: []
  }

  // Fetch data from the API when the component mounts
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {this.state.persons.map((person, index) => (
            <li key={index} style={styles.personCard}>
              <img src={person.picture.thumbnail} alt={person.name.first} />
              <p>Name: {person.name.first} {person.name.last}</p>
              <p>Email: {person.email}</p>
              <p>Location: {person.location.city}, {person.location.country}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Basic styling for each person's card
const styles = {
  personCard: {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px 0',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center'
  }
};

export default PersonList;