import React, {Component} from 'react';
import UploadsForm from './UploadsForm';

class Uploads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: [],
    };
  }

  componentDidMount() {
    const url = 'api/v1/uploads';
    fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('asd');
        })
        .then((response) => this.setState({uploads: response}))
        .catch((error) => console.log(error));

    // try {
    //   const response = await fetch(url);
    //   this.setState({uploads: response.json()});
    // } catch (error) {
    //   console.log(error);
    // }
  }
  render() {
    const {uploads} = this.state;
    console.log(uploads.length);
    const allUploads = uploads.map((element, index) => (
      <div key={element.id} className="upload-entry">
        <div className="upload-entry-index">
          {index+1}
        </div>
        <div className="upload-entry-download">
          <a href={element.file_url}>
            {element.filename}
          </a>
        </div>
      </div>
    ));

    return (
      <div className="uploads-main">
        <h1>
          Propeller Home Server
        </h1>
        <UploadsForm />
        <div>{allUploads}</div>
      </div>
    );
  }
}

export default Uploads;
