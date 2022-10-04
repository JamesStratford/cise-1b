const connectDB = require('./config/db');

const articles = require('./routes/api/articles.js');

test('base test', () => {
    pass = 1;
    connectDB();
    articles.get('/api/articles')
    .then(res => {
    this.setState({
        articles: res.data
    })
    })
    .catch(err =>{
    pass = 0
    })
    expect(pass).toEqual(1);
  });