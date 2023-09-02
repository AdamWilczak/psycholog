import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "Blog";
import Contact from "Contact";
import Offer from "Offer";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/api/articles")
      .then((response) => response.json())
      .then((articles) => setArticles(articles));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
              <li>
                <Link to="/offer">Oferta</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path="/blog">
              <Blog articles={articles} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/offer">
              <Offer />
            </Route>
          </Switch>
        </main>

        <footer>&copy; 2023</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
