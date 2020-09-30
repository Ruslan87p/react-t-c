import React from 'react';
const url = 'test.steps.me/test/testAssignComment';

class Form extends React.Component {
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

  titleChange(e) {
    this.setState({ name: e.target.value });
  }
  commentChange(e) {
    this.setState({ post: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <b>Title</b>
              </span>
            </div>
            <input
              id="title"
              name="title"
              type="text"
              className="form-control"
              onChange={this.titleChange.bind(this)}
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
              onChange={this.commentChange.bind(this)}
            />
          </div>

          <button
            className="btn-custom mt-3"
            disabled={!this.state.post}
            type="submit">
            Add comment
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
