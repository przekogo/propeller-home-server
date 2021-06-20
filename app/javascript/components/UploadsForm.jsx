import React, {Component} from 'react';

class UploadsForm extends Component {
  constructor(props,
  ) {
    super(props);
    this.handleUploadChange = this.handleUploadChange.bind(this);
  }

  handleUploadChange(event) {
    const body = new FormData();
    body.append('upload[file]', event.target.files[0]);
    const url = 'api/v1/uploads';
    const options = {
      method: 'POST',
      body: body,
    };
    fetch(url, options)
        .then((response) => response.json());
  }

  render() {
    return (
      <div className='upload-form'>
        <label>Upload</label>
        <input type="file" onChange={this.handleUploadChange} />
      </div>
    );
  }
}

export default UploadsForm;
