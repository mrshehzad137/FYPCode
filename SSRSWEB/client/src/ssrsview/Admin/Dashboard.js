import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Card, CardBody, CardHeader, Progress } from 'reactstrap';
import { connect } from 'react-redux';
import {getStudent} from '../../redux/Admin/AdminAction';
import {facultyLogin} from '../../redux/Faculty/FacultyAction';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import nodataImage from '../../assets/img/nodata.png';
import axios from 'axios';

am4core.useTheme(am4themes_animated);

class Dashboard extends Component {


  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.data = [{
      "synopsisStatus": "Registered",
      "count": 54
    },{
      "synopsisStatus": "UnderReview",
      "count": 13
    },{
      "synopsisStatus": "Reviewed",
      "count": 8
    },{
      "synopsisStatus": "Presented",
      "count": 4
    }
    ,{
      "synopsisStatus": "Approved",
      "count": 3
    }
    ,{
      "synopsisStatus": "Rejected",
      "count": 1
    }];
    
    // Create axes
    
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "synopsisStatus";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    
    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index & 2 == 2) {
        return dy + 25;
      }
      return dy;
    });
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "count";
    series.dataFields.categoryX = "synopsisStatus";
    series.name = "count";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;
    
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 1;

    columnTemplate.fill = am4core.color("#4591c3");
    columnTemplate.adapter.add("fill", function(fill, target) {
      if (target.dataItem && (target.dataItem.valueY < 5)) {
        return am4core.color("#B00100");
      }else if (target.dataItem && (target.dataItem.valueY < 10)) {
        return am4core.color("#008000");
      }
      else if (target.dataItem && (target.dataItem.valueY < 20)) {
        return am4core.color("#3c3cc7");
      }
      else if (target.dataItem && (target.dataItem.valueY < 30)) {
        return am4core.color("#9aa531");
      }
      else if (target.dataItem && (target.dataItem.valueY < 50)) {
        return am4core.color("#2196f3");
      }
      else if (target.dataItem && (target.dataItem.valueY < 100)) {
        return am4core.color("#c450d8");
      }
      else {
        return fill;
      }
    });

    this.chart = chart;
  }

  presented(id){
    return function(){
      console.log(id);
      axios.post('/api/synopsis/ChangeStatus',{id:id,status:"Presented"})
      .then(res=>{
        console.log(res);
        alert(res.data.message);
        window.location.reload();
      })
      .catch(err=>{
        console.log(err);
      });
    }
  }

    componentWillMount(){
      this.props.getStudent();
      this.props.signin();

      if (this.chart) {
        this.chart.dispose();
      }
    }


  render() {   

    const studentlistItem = this.props.studentList.map((student_list,index) => 
                 <tr scope="row" key={index}>
                 <td>{student_list.regNumber}</td>
                 <td>{student_list.fname+" "+student_list.lname}</td>
                 <td>{(student_list.Synopsis[0])?student_list.Synopsis[0].title:'Not submitted'}</td>
                 <td ><span className={(student_list.Synopsis[0])?
                 student_list.Synopsis[0].status==="Registring"?"badge badge-warning":
                 student_list.Synopsis[0].status==="Submitted"?"badge badge-warning":
                 student_list.Synopsis[0].status==="UnderReview"?"badge badge-secondary":
                 student_list.Synopsis[0].status==="Revised"?"badge badge-primary":
                 student_list.Synopsis[0].status==="Presented"?"badge badge-info":
                 student_list.Synopsis[0].status==="Approved"?"badge badge-success":"badge badge-light":"badge badge-danger"}>{(student_list.Synopsis[0])?student_list.Synopsis[0].status:''}</span></td>
                 <td>
                  <button hidden={((student_list.Synopsis[0])?student_list.Synopsis[0].status==="Submitted":false)?false:true} type="button" className="btn btn-outline-secondary">
                    {(student_list.Synopsis[0])?
                    <Link to={'/AdminDashboard/addReviewtask/'+student_list.Synopsis[0]._id} ><i className="icon-user-following"></i>&nbsp;Assign for Review</Link>:
                    <Link to={'/AdminDashboard/addReviewtask/'} ><i className="icon-user-following"></i>&nbsp;Assign for Review</Link>
                  }
                  </button >
                  <button type="button" className="btn btn-outline-success" hidden={((student_list.Synopsis[0])?(student_list.Synopsis[0].commenents.length===3 && student_list.Synopsis[0].status==="Commented"):true)?false:true}>
                    <Link to={'/AdminDashboard/commentsAnalysis/'+student_list.Synopsis[0]._id}><i className="icon-user-following"></i>&nbsp; Analyze Comments</Link>
                  </button>
                  <button type="button" className="btn btn-outline-success" onClick={this.presented(student_list.Synopsis[0]._id)}
                  hidden={(student_list.Synopsis[0].status==="PresentationSchedule")?false:true}>
                    <i className="icon-user-following"></i>&nbsp; Presented
                  </button>
                 </td> 
                 </tr>
    )

    console.log(studentlistItem.length);
    return (
      <div className="animated fadeIn">
       <div className="row">
        <div className="col-md-3">
        <Card style={{width:'90%',marginLeft:"5%",marginTop:'2%',}}>
          <CardHeader style={{textAlign:'center',backgroundColor:'#4591c3'}}>
          <h3>54</h3>
          <h5>Synopses Registerd</h5>
          </CardHeader>
        </Card>
        </div>
        <div className="col-md-3">
        <Card style={{width:'90%',marginLeft:"5%",marginTop:'2%',}}>
          <CardHeader style={{textAlign:'center',backgroundColor:'#3c3cc7'}}>
          <h3>13</h3>
          <h5>Synopses UnderReview</h5>
          </CardHeader>
        </Card>
        </div>
        <div className="col-md-3">
        <Card style={{width:'90%',marginLeft:"5%",marginTop:'2%',}}>
          <CardHeader style={{textAlign:'center',backgroundColor:'green'}}>
          <h3>4</h3>
          <h5>Synopses Reviewed</h5>
          </CardHeader>
        </Card>
        </div>
        <div className="col-md-3">
        <Card style={{width:'90%',marginLeft:"5%",marginTop:'2%',}}>
          <CardHeader style={{textAlign:'center',backgroundColor:'#d03f3f'}}>
          <h3>0</h3>
          <h5>Synopses Presented</h5>
          </CardHeader>
        </Card>
        </div>
       </div>
       <div id="chartdiv" style={{ width: "80%", height: "500px" ,marginLeft:'10%'}}></div>
       <div className="row" style={{marginLeft:'2%'}}>
       <Card style={{width:'92%',marginLeft:"1%",marginTop:'2%',}}>
          <CardHeader style={{textAlign:'center',backgroundColor:'#899096'}}>
          <h4>Students & Synopses</h4>
          </CardHeader>
          <CardBody>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Reg#</th>
                <th scope="col">Student Name</th>
                <th scope="col">Synopsis Title</th>
                <th scope="col">Synopsis Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {(studentlistItem.length!==0)?
               studentlistItem :
               <tr>
                 <td></td>
                 <td></td>
                 <td><img src={nodataImage}></img></td>
                 <td></td>
                 <td></td>
               </tr>
               }
           </tbody>
          </table>
          </CardBody>
        </Card>
       </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentList: state.student.list,
    userData2:state.faculty.faculty
  }
}

const actionCreators = {
  getStudent: getStudent,
  signin:facultyLogin
}

export default connect(mapStateToProps,actionCreators)(Dashboard);
