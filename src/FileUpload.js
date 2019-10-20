import React from 'react';

class FileUpload extends React.Component {

 constructor(props) {
    super(props);
    this.state = {paths: [], users:{}, isLoaded: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    //this.readFiles = this.readFiles.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.sendData = this.sendData.bind(this);
  }

 handleSubmit(event) {

    this.sendData();
    event.preventDefault();
  }

 sendData () {

    this.props.parentCallback(this.state);
 }

 onDrop(acceptedFiles, rejectedFiles) {
      // do stuff with files...
  }

  componentWillReceiveProps(props) {
       let headers = new Headers();

         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
         headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
         //headers.append('Access-Control-Allow-Credentials', 'true');
         headers.append('GET', 'POST', 'OPTIONS');

        fetch("http://localhost:8080/validateProfile")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState ({
                     users: result, isLoaded: true
                });
            },
            (error) => {
                this.setState ({
                    isLoaded: false
                });
            }
            )


        /*let result = [{"id":"arpit","errorValidation":["Fault Found: Father Name mismatch"],"fault":true},
                    {"id":"manan", "errorValidation":[],"fault":false},
                    {"id":"mansi", "errorValidation":["Fault Found: Father Name mismatch", "Fault Found: Name mismatch"],"fault":true}]

        let result = {"users":
                                        [{
                                            "id": 1,
                                            "name": "Mansi Verma",
                                             "docs": [ {
                                                        "type": "pancard",
                                                        "name": "Mansi Verma",
                                                        "dob": "02 Feb, 1995"}],
                                             "validationErrors": ["Name validation failed"],
                                             "fault": "true"
                                         }]};

        this.setState ({
            paths: paths, users: result, isLoaded: true
        });*/
  }

  render() {
       return(
       <div className="container">
           <form onSubmit={this.handleSubmit}>
             <div className="form-group">
                <input id="files" className="form-control" onChange={this.readFiles} type="file"  webkitdirectory="" directory="" multiple />
               </div>
               <div className="form-group">
               <input type="submit" value="Submit" />
               </div>
           </form>

         </div>
       )
   }
 }

export default FileUpload;