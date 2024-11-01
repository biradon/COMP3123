import React from 'react';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Chau Minh Truong",
            studentId: "101411424"
        };
    }
    changeNickname = () => {
        this.setState({name: "biradon"});
    }
    render() {
        return (
        <div>
            <h3>{this.state.name}</h3>
            <h4>{this.state.studentId}</h4>
            <button 
            type="button"
            onClick={this.changeNickname}>Change Nick Name</button>
        </div>
        
    )}
}

export default Student;