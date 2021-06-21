import React, {Component} from 'react';
import UploadsCreate from './UploadsCreate';

class Uploads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: [],
    };

    this.handleUploadDelete = this.handleUploadDelete.bind(this);
    this.uploadComplete = this.uploadComplete.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  handleUploadDelete(uploadId) {
    if (!window.confirm('Are you sure you want to delete?')) {
      return;
    }

    const url = 'api/v1/uploads/' + uploadId;
    const options = {method: 'DELETE'};
    fetch(url, options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('bad response');
        })
        .then(() => this.fetchUploads())
        .catch((error) => console.log(error));
  }

  downloadFile(event) {
    if (event.target.classList.contains('button-delete')) {
      event.preventDefault();
    }
  }

  fetchUploads() {
    const url = 'api/v1/uploads';
    fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('bad response');
        })
        .then((response) => this.setState({uploads: response}))
        .catch((error) => console.log(error));
  }

  uploadComplete() {
    this.fetchUploads();
  }

  componentDidMount() {
    this.fetchUploads();
  }
  render() {
    const {uploads} = this.state;
    const allUploads = uploads.map((element, index) => (
      <a
        href={element.file_url}
        key={element.id}
        className="uploads-entry"
        onClick={(e) => this.downloadFile(e)}
      >
        <div className="uploads-entry-index">
          {index+1}
        </div>
        <div className="uploads-entry-download">
          {element.file_name}
        </div>
        <div className="uploads-entry-size">
          {element.file_size}
        </div>
        <div className="uploads-entry-delete">
          <div className="button-delete" onClick={() => this.handleUploadDelete(element.id)}>
            delet
          </div>
        </div>
      </a>
    ));

    return (
      <div className="uploads-main">
        <h1>
          Propeller Home Server
        </h1>
        <UploadsCreate parentCallback={this.uploadComplete}/>
        <div>{allUploads}</div>
      </div>
    );
  }
}

export default Uploads;
