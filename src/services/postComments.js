import React from 'react';
import Form from '../components/form';

class PostComments extends React.Component {
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 50, marginBottom: 100 }}>
          <div className="row">
            <div className="col-lg-6 title">
              leave <br></br>your <br></br> comment
            </div>
            <div className="col-lg-6">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostComments;
