import { useTable } from 'react-table'
import React, { useMemo } from 'react';
import './table.css'
import MOCK_DATA from './dummy_data.json'
import { Component } from 'react';

const COLUMNS = [
  {
    Header: 'ID',
    accessor: '_id'
  },
  {
    Header: 'Title',
    accessor: 'title'
  },
  {
    Header: 'Author',
    accessor: 'author'
  },
  {
    Header: 'Journal',
    accessor: 'journal_name'
  },
  {
    Header: 'Published Date',
    accessor: 'published_date'
  },
  {
    Header: 'Volume',
    accessor: 'volume'
  },
  {
    Header: 'Number',
    accessor: 'number'
  },
  {
    Header: 'Pages',
    accessor: 'pages'
  },
  {
    Header: 'DOI',
    accessor: 'doi'
  },
  {
    Header: 'Last Updated',
    accessor: 'updated_date'
  }
]

export class ArticleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: []
    }
}
componentDidMount() {
  fetch("./api/articles")
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