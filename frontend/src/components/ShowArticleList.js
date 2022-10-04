import React, { Component, useMemo } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { useTable } from 'react-table'

const COLUMNS = [
  {
    Header: 'ID',
  },
  {
    Header: 'Title',
  },
  {
    Header: 'Author',
  },
  {
    Header: 'Journal Name',
  },
  {
    Header: 'Published Date',
  },
  {
    Header: 'Volume',
  },
  {
    Header: 'Number',
  },
  {
    Header: 'Pages',
  },
  {
    Header: 'DOI',
  },
  {
    Header: 'Last Updated',
  }
]

let ArticleTable = (data) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => data, []);

  const tableInstance = useTable({
    columns : COLUMNS,
    data : data
  })
  return (
    <div>
      
    </div>
  )
};

class ShowArticleList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        articles:[]
      };
    }


  componentDidMount() {
      axios
          .get('/api/articles')
          .then(res => {
          this.setState({
              articles: res.data
          })
          })
          .catch(err =>{
          console.log('Error from ShowArticleList');
          })
      };

    render() {
      const articles = this.state.articles;
      console.log("PrintArticle: " + articles);
      let articleList;

      if(!articles) {
        articleList = "there is no article record!";
      } else {
        articleList = articles.map((article, k) =>
          <ArticleCard article={article} key={k} />
        );
      }

      return (
        <div className="ShowArticleList">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
                <h2 className="display-4 text-center">Article List</h2>
              </div>

              <div className="col-md-11">
                <Link to="/create-article" className="btn btn-outline-warning float-right">
                  + Add New Article
                </Link>
                <br />
                <br />
                <hr />
              </div>

            </div>

            <div className="list">
                  {articleList}
            </div>
          </div>
        </div>
      );
    }
}

export default ShowArticleList;