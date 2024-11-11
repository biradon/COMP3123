import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      address: '',
      address2: '',
      city: '',
      province: '',
      postalCode: '',
      isAgree: false,
      submitted: false, // Track form submission
    };

    this.provinces = [
      'Alberta',
      'British Columbia',
      'Manitoba',
      'New Brunswick',
      'Newfoundland and Labrador',
      'Nova Scotia',
      'Ontario',
      'Prince Edward Island',
      'Quebec',
      'Sakatchewan'
    ];
  }

  handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    console.log(this.state);
  };

  render() {
    return (
      <div style={styles.container}>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email:
            <input type="text" name="email" placeholder="Enter email" onChange={this.handleInput} style={styles.input}/>
          </label>
          <label style={styles.label}>
            Name:
            <input type="text" name="name" placeholder="Full Name" onChange={this.handleInput} style={styles.input}/>
          </label>
          <label style={styles.label}>
            Address:
            <input type="text" name="address" placeholder="1234 Main St" onChange={this.handleInput} style={styles.input}/>
          </label>
          <label style={styles.label}>
            Address 2:
            <input type="text" name="address2" placeholder="Apartment, Studio" onChange={this.handleInput} style={styles.input}/>
          </label>
          <label style={styles.label}>
            City:
            <input type="text" name="city" onChange={this.handleInput} style={styles.input}/>
          </label>
          <label style={styles.label}>
            Province:
            <select name="province" onChange={this.handleInput} style={styles.select}>
              <option value="">Select a province</option>
              {this.provinces.map((province, index) => (
                <option key={index} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </label>
          <label style={styles.label}>
            Postal Code:
            <input type="text" name="postalCode" onChange={this.handleInput} style={styles.input}/>
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" name="isAgree" onChange={this.handleInput} style={styles.checkbox}/>
            Agree to Terms & Conditions
          </label>
          <button type="submit" style={styles.button}>Submit</button>
        </form>

        {this.state.submitted && (
          <div style={styles.confirmation}>
            <h3>Confirmation</h3>
            <p>Email: {this.state.email}</p>
            <p>Name: {this.state.name}</p>
            <p>Address: {this.state.address}</p>
            <p>Address 2: {this.state.address2}</p>
            <p>City: {this.state.city}</p>
            <p>Province: {this.state.province}</p>
            <p>Postal Code: {this.state.postalCode}</p>
            <p>Agreed to Terms: {this.state.isAgree ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Form;


const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0 5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  checkboxLabel: {
    margin: '10px 0 15px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '8px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  confirmation: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    color: '#333',
  },
};
