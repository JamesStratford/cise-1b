import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      journal_name: "",
      published_date: "",
      volume: "",
      number: "",
      pages: "",
      doi: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    let id = window.location.href.split("/")[4];
    axios
      .get("/api/articles/" + id)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          author: res.data.author,
          journal_name: res.data.journal_name,
          published_date: res.data.published_date,
          volume: res.data.volume,
          number: res.data.number,
          pages: res.data.pages,
          doi: res.data.dot,
          rating: res.data.rating,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateArticleInfo");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      journal_name: this.state.journal_name,
      published_date: this.state.published_date,
      volume: this.state.volume,
      number: this.state.number,
      pages: this.state.pages,
      doi: this.state.dot,
      rating: this.data.rating,
    };
    let id = window.location.href.split("/")[4];

    axios
      .put("/api/articles/" + id, data)
      .then((res) => {
        this.props.history.push("/show-article/" + id);
      })
      .catch((err) => {
        console.log("Error in UpdateArticleInfo!" + err);
      });
  };

  render() {
    return (
      <div className="UpdateArticleInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Article</h1>
              <p className="lead text-center">Update Articles's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Article"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Journal name"
                  name="journal_name"
                  className="form-control"
                  value={this.state.journal_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={this.state.published_date}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Volume"
                  name="volume"
                  className="form-control"
                  value={this.state.volume}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Number"
                  name="number"
                  className="form-control"
                  value={this.state.number}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Pages"
                  name="pages"
                  className="form-control"
                  value={this.state.pages}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="doi"
                  name="doi"
                  className="form-control"
                  value={this.state.doi}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="rating"
                  name="rating"
                  className="form-control"
                  value={this.state.rating}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Book
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;
