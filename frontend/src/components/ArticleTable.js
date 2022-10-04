import { useTable } from 'react-table'
import React, { useMemo } from 'react';
import './table.css'
import MOCK_DATA from './dummy_data.json'

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

export const ArticleTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  return (
    <table {... getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroups => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {
              headerGroups.headers.map(column =>(
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))
            }
          </tr>
          ))
        }
      </thead>
      <tbody {... getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }
              </tr>
          )
          })
        }
      </tbody>
    </table>
  )
};