import React from 'react';
import './table.css'

import { Component } from 'react';

export class ArticleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: []
    }
}
componentDidMount() {
  fetch("http://localhost:8082/api/articles")
  .then(res => res.json())
  .then(
      (articles) => {
          this.setState({ articles: articles });
      },
      (error) => {
          alert(error);
      }
  )
}
  render() {
        return (<table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Journal</th>
                    <th>Published Date</th>
                    <th>Volume</th>
                    <th>Number</th>
                    <th>Pages</th>
                    <th>DOI</th>
                    <th>Last Updated</th>
                </tr>
            </thead>
 
            <tbody>
                {this.state.articles.map(articles =>
                    <tr>
                        <td>{articles.title}</td>
                        <td>{articles.author}</td>
                        <td>{articles.journal_name}</td>
                        <td>{articles.published_date}</td>
                        <td>{articles.volume}</td>
                        <td>{articles.number}</td>
                        <td>{articles.pages}</td>
                        <td>{articles.doi}</td>
                        <td>{articles.updated_date}</td>
                    </tr>
                )}
            </tbody>
        </table>);
    }
};