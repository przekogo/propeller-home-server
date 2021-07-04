import React, {Component} from 'react';
import axios from 'axios';

class UploadsCreate extends Component {
  constructor(props,
  ) {
    super(props);
    this.state = {
      // TODO replace with redux
      upload_progress: Number,
    };
    this.handleUploadChange = this.handleUploadChange.bind(this);
  }

  handleUploadChange(event) {
    Array.from(event.target.files).forEach(async (file) => {
      const payload = new FormData();
      payload.append('upload[file]', file);
      event.target.value = null;

      await axios({
        url: 'api/v1/uploads',
        method: 'post',
        data: payload,
        onUploadProgress: (progress) => {
          const {loaded, total} = progress;
          const percentageProgress = Math.floor((loaded/total) * 100);
          this.setState({upload_progress: percentageProgress});
        },
      });
      this.props.parentCallback();
      this.setState({upload_progress: null});
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.upload_progress}</h1>
        <div className='upload-form'>
          <label>Upload</label>
          <input type="file" multiple onChange={this.handleUploadChange} />
        </div>
      </>
    );
  }
}

export default UploadsCreate;
