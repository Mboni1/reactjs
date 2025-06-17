import React from 'react';
import Article from './components/Article';

const sampleArticle = {
  title: "FIFA Club World Cup",
  content: "Real Madrid Are The Champions",
  tags: ["Romano", "Guillerm Blague", "La Liga"],
  date: "2025-06-17T09:00:00Z",
  author: "Claude"
};

function App() {
  return (
    <div>
      <h1>Breaking News</h1>
      <Article article={sampleArticle} onTagClick={(tag) => alert(`Tag: ${tag}`)} />
    </div>
  );
}

export default App;


