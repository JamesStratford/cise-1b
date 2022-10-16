import { render, screen } from '@testing-library/react';
import App from './App';
import {expect} from 'chai';

// test('base test', () => {
//   //render(<App />);
//   //const linkElement = screen.getByText(/Article List/i);
//   //expect(linkElement).toBeInTheDocument();
//   let x = 2 * 3;
//   expect(x).toEqual(6);
// });

let chai = require('chai');

var assert = chai.assert;

describe("Testing add new article to add to the table", () => {
  it("it should create new entry", (done) => {
    const data = {
      title: "Testing",
      author: "Tester",
      journal_name: "unit testing",
      published_date: "1/1/22",
      volume: "1",
      number: "1",
      pages: "2",
      doi: "3",
    };
  chai
    .request(server)
    .post("/create-article")
    .send(data)
    .end((err, res) => {
      res.should.have.status(201);
      res.body.should.have.property("token");
      done();
    });
  });
});
