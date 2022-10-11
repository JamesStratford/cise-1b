import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    let id = window.location.href.split('/')[4];
    axios
      .get('/api/articles/'+id)
      .then(res => {
        console.log("Print-ShowArticleDetails-API-response: " + res.data);
        this.setState({
          article: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowArticleDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('/api/articles/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowArticleDetails_deleteClick");
      })
  };


  render() {

    const article = this.state.article;
    let ArticleItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ article.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ article.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Journal name</td>
            <td>{ article.journal_name }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ article.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Volume</td>
            <td>{ article.volume }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Number</td>
            <td>{ article.number }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Pages</td>
            <td>{ article.pages }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>DOI</td>
            <td>{ article.doi }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Rating</td>
            <td>{ article.rating }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowArticleDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Article's Record</h1>
              <p className="lead text-center">
                  View Article's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { ArticleItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,article._id)}>Delete Article</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-article/${article._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Article
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default ShowArticleDetails;