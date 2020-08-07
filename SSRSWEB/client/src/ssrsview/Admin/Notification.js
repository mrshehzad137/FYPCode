import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Progress,Modal, ModalBody, ModalFooter, ModalHeader,Button } from 'reactstrap';



export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };

    this.toggleSuccess = this.toggleSuccess.bind(this);
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }
  render() {
    return (
        <div>
          <Modal isOpen={this.state.success} toggle={this.toggleSuccess} className={'modal-success ' + this.props.className}>
            <ModalHeader toggle={this.toggleSuccess}>Modal Notification</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggleSuccess}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
              </ModalFooter>
          </Modal>
          <Card style={{width:'92%',marginLeft:"1%",marginTop:'2%',}}>
          <CardHeader style={{textAlign:'center',backgroundColor:'#c7ac95'}}>
          <h3>Notification</h3>
          </CardHeader>
          <CardBody>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col" style={{width:'20%'}}>Date</th>
                <th scope="col" style={{width:'70%'}}>Subject</th>
                <th scope="col" style={{width:'10%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">12/02/2020</th>
                <td>Synopsis submitted by ...</td>
                <td>
                  <button type="button" onClick={this.toggleSuccess} class="btn btn-outline-primary" style={{marginRight:'10px'}}>
                    <i class="icon-eye"></i>
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <i class="icon-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">12/02/2020</th>
                <td>Comments submitted by ...</td>
                <td>
                  <button type="button" onClick={this.toggleSuccess} class="btn btn-outline-primary" style={{marginRight:'10px'}}>
                    <i class="icon-eye"></i>
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <i class="icon-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">12/02/2020</th>
                <td>Date has been extended by ...</td>
                <td>
                  <button type="button"  onClick={this.toggleSuccess} class="btn btn-outline-primary" style={{marginRight:'10px'}}>
                    <i class="icon-eye"></i>
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <i class="icon-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">12/02/2020</th>
                <td>Presentation remainder  ...</td>
                <td>
                  <button type="button" onClick={this.toggleSuccess} class="btn btn-outline-primary" style={{marginRight:'10px'}}>
                    <i class="icon-eye"></i>
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <i class="icon-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          </CardBody>
        </Card>
        </div>
    );
  }
}
