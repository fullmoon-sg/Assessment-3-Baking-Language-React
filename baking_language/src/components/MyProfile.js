import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';


export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            profile: []
        }
    }

    async componentDidMount() {
        let response = await axios.get('api/user/profile', {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        });
        this.setState({
            profile: response.data
        })
    }
  
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateProfile = async () => {
        await axios.post('api/user/updateProfile', {
            headers : {
                Authorization : 'Bearer ' + this.props.token
            },
            firstname: this.state.profile.firstname,
            lastname: this.state.profile.lastname,
            gender: this.state.profile.gender,
            email: this.state.profile.email,
            mobile_number: this.state.profile.mobile_number,
            address: this.state.address,
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" value={this.state.profile.firstname} onChange={this.updateFormField}/>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" value={this.state.profile.lastname} onChange={this.updateFormField}/>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" name="gender" value={this.state.profile.gender} onChange={this.updateFormField} />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.profile.email} onChange={this.updateFormField}/>
                        <Form.Label>Mobile Number </Form.Label>
                        <Form.Control type="text" name="mobile_number" value={this.state.profile.mobile_number} onChange={this.updateFormField}/>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={this.state.profile.address} onChange={this.updateFormField}/>
                    </Form.Group>
                </Form>
                <button onClick={this.updateProfile} className="btn btn-success">Update My Profile</button>
            </div>
        )
    }
}
