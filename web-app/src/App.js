/**
 * @Author: PopAlexandru
 * @Date:   1985-10-26T09:15:00+01:00
 * @Email:  pop_a@etna-alternance.net
 * @Last modified by:   PopAlexandru
 * @Last modified time: 2018-10-21T15:39:47+02:00
 */



import React, { Component } from 'react';
import axios, { post } from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     file: '',
   };

    this.handleChangeFile = this.handleChangeFile.bind(this); //bind the value of file
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeFile(event) {
    this.setState({file: event.target.files[0]}) //set a value of file
     this.fileUpload = this.fileUpload.bind(this)  // upload file
  }

  handleSubmit(event) { // submit form
    event.preventDefault() // Stop form submit
      this.fileUpload(this.state.file).then((response)=>{
        console.log(response.data);
      })
  }

  fileUpload(file){
    const url = 'http://localhost:5050/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Upload</h2>
            <div className="form-group">
              <input type="file"   onChange={this.handleChangeFile} className="form-control-file border" name="file"/>
            </div>
            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
