import React, { useState } from 'react';
import './App.css';
import SearchField from '../src/_components/_search/searchField';
import RepoCard from '../src/_components/_repoCard/repoCard';
import axios from 'axios';
import { Row, Col } from 'reactstrap';

function App() {
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortCriterion, setSortCriterion] = useState('stars');

  const handleSearch = () => {
    const searchQuery = `${query} in:name`;

    axios
      .get('https://api.github.com/search/repositories', {
        params: {
          q: searchQuery,
          sort: sortCriterion,
          order: sortOrder,
        }
      })
      .then((response) => {
        setRepos(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching data from GitHub API:', error);
      });
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    const selectedCriterion = event.target.value;
    setSortCriterion(selectedCriterion);
  };

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Repository Search</h1>
        <SearchField onSearch={handleSearch} query={query} onChange={handleQueryChange} />

        <div className="sorting">
          <label>Sort by:</label>
          <select value={sortCriterion} onChange={handleSortChange}>
            <option value="stars">Stars</option>
            <option value="watchers">Watchers</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
            <option value="created_at">Created At</option>
            <option value="updated_at">Updated At</option>
          </select>

          <label>Order:</label>
          <select value={sortOrder} onChange={handleOrderChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>

        <Row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {repos.map((repo) => (
            <Col key={repo.id} md="4" style={{ marginBottom: '20px' }}>
              <RepoCard repo={repo} />
            </Col>
          ))}
        </Row>
      </header>
    </div>
  );
}

export default App;
