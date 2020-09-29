import React from 'react';
const url = 'test.steps.me/test/testAssignComment';

class PostComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      post: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        name: event.target[0].value,
        post: event.target[1].value,
      },
    };
    fetch(url, requestOptions).then((data) => {
      console.log(data);
    });
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }
  commentChange(e) {
    this.setState({ post: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 50, marginBottom: 100 }}>
          <div className="row">
            <div className="col-lg-6 title">
              leave <br></br>your <br></br> comment
            </div>
            <div className="col-lg-6">
              <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <b>Title</b>
                    </span>
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.nameChange.bind(this)}
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <b>Comment</b>
                    </span>
                  </div>
                  <textarea
                    style={{ height: 150 }}
                    id="comment"
                    name="comment"
                    className="form-control"
                    value={this.state.post}
                    onChange={this.commentChange.bind(this)}
                  />
                </div>

                <button className="btn-custom mt-3" type="submit">
                  Add comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostComments;
