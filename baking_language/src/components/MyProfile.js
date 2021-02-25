import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';


export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            firstname: "",
            lastname: "",
            gender: "",
            email: "",
            mobile_number: "",
            address: "",
        }
    }

    async componentDidMount() {
        let response = await axios.get('api/user/profile', {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        });
        this.setState({
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            gender: response.data.gender,
            email: response.data.email,
            mobile_number: response.data.mobile_number,
            address: response.data.address
        })
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateProfile = async () => {
        let option = {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        };
        console.log('Submit')
        await axios.post('api/user/updateProfile', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            email: this.state.email,
            mobile_number: this.state.mobile_number,
            address: this.state.address
        },
            option
        )
        console.log('updated')
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" value={this.state.firstname} onChange={this.updateFormField} />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" value={this.state.lastname} onChange={this.updateFormField} />
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" name="gender" value={this.state.gender} onChange={this.updateFormField} />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.updateFormField} />
                        <Form.Label>Mobile Number </Form.Label>
                        <Form.Control type="text" name="mobile_number" value={this.state.mobile_number} onChange={this.updateFormField} />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={this.state.address} onChange={this.updateFormField} />
                    </Form.Group>
                </Form>
                <button onClick={this.updateProfile} className="btn btn-success">Update My Profile</button>
            </div>
        )
    }
}
