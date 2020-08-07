import { Card, CardBody, CardHeader, Progress } from 'reactstrap';
import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
        <div>
          
          <Card style={{width:'60%',marginLeft:"20%",marginTop:'2%',}}>
          <CardBody>
          <div className="row" style={{marginLeft:'35%'}}>
          <img src={'http://localhost:4000/uploads/AdminImages/2020-02-17T20:55:03.574ZIMG_20170922_191809.jpg'} width="200px" height="300px" className="img-avatar" alt="admin@bootstrapmaster.com" />
          </div>
          <div className="row">
            <div className="col-md-4">User Name</div>
          <div className="col-md-8"></div>
          </div><div className="row">
            <div className="col-md-4">Email</div>
          <div className="col-md-8"></div>
          </div><div className="row">
            <div className="col-md-4">User Type</div>
          <div className="col-md-8"></div>
          </div><div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8"></div>
          </div><div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8"></div>
          </div><div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8"></div>
          </div>
          </CardBody>
          </Card>
          
        </div>
    );
  }
}
