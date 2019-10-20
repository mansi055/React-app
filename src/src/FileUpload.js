import React from 'react';
import Dropzone from 'react-dropzone';

class FileUpload extends React.Component {

 constructor(props) {
    super(props);
    this.state = {paths: [], users:{}, isLoaded: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.readFiles = this.readFiles.bind(this);
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

  readFiles(event) {
        console.log("in read file");
        var files = document.getElementById("files").files;
        console.log(files.value);
        console.log(files);
        let paths = [];
        const formData = new FormData();

        for(let i =0; i < files.length; ++i) {
            paths.push(files[i]["webkitRelativePath"]);
            //console.log(URL.createObjectURL(files[i]));
            formData.append(i, files[i]);
        }

        let result = [{"id":"arpit","errorValidation":["Fault Found: Father Name mismatch"],"fault":true},
                    {"id":"manan", "errorValidation":[],"fault":false},
                    {"id":"mansi", "errorValidation":["Fault Found: Father Name mismatch", "Fault Found: Name mismatch"],"fault":true}]

        /*let result = {"users":
                                        [{
                                            "id": 1,
                                            "name": "Mansi Verma",
                                             "docs": [ {
                                                        "type": "pancard",
                                                        "name": "Mansi Verma",
                                                        "dob": "02 Feb, 1995"}],
                                             "validationErrors": ["Name validation failed"],
                                             "fault": "true"
                                         }]};*/

        this.setState ({
            paths: paths, users: result, isLoaded: true
        });
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