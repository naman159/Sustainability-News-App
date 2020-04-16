import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    var url = '/v2/everything?' +
          'q=Sustainability&' +
          'sortBy=popularity&' +
          'apiKey=8cf61293b6c6493a875aa43562e078bb';

    /*var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(articles => console.log({articles}));*/
        axios.get(url)
        .then(res => {
          // Set state with result
          this.setState({ articles: res.data.articles });
          console.log(this.state.articles[0]);
        });
  }

  render() {
    return (
      <div className="App">
          <h1>Latest on Sustainability</h1>
        {this.state.articles.map((article) => (
          <a href={article.url}>
            <div className="ba pa3 ma3">
              <h3>{article.title}</h3>
              <p>{article.content} -{article.author}</p>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

export default App;
