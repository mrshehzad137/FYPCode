import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Progress } from 'reactstrap';


export default class Notification extends Component {
  render() {
    return (
        <div>
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
                  <button type="button" class="btn btn-outline-primary" style={{marginRight:'10px'}}>
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
                  <button type="button" class="btn btn-outline-primary" style={{marginRight:'10px'}}>
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
                  <button type="button" class="btn btn-outline-primary" style={{marginRight:'10px'}}>
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
                  <button type="button" class="btn btn-outline-primary" style={{marginRight:'10px'}}>
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
