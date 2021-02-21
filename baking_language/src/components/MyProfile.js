import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';


export default class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            profile : []
        }
    }

getProfile = async () => {    
        let response = await axios.get('api/user/profile', {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }

        });
        this.setState({
            profile : response.data
        })
        console.log(this.state.profile)
    };

 render(){
   return (
        <div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" value={this.state.profile.firstname}/>
     <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" value={this.state.profile.lastname}/>
     <Form.Label>Gender</Form.Label>
    <Form.Control type="text" value={this.state.profile.gender}/>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={this.state.profile.email}/>
     <Form.Label>Mobile Number </Form.Label>
    <Form.Control type="text" value={this.state.profile.mobile_number}/>
      <Form.Label>Address</Form.Label>
    <Form.Control type="text" value={this.state.profile.address}/>
      <Form.Label>Username </Form.Label>
    <Form.Control type="text" value={this.state.profile.username}/>
      <Form.Label>Password </Form.Label>
    <Form.Control type="password" value={this.state.profile.password}/>
  </Form.Group>

  {/* <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group> */}
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  
</Form>
             <button onClick={this.getProfile}>Get User Profile</button>
        
        </div>
    )
}
}
