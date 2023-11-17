import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Article } from "./Article";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState({});
  const [showLanding, setShowLanding] = useState(true);
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  async function fetchPage(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const pageData = await response.json();
      setPage(pageData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
    return "Completed";
  }

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function handleClick(slug) {
    await fetchPage(slug);
    setShowLanding(false);
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {showLanding ? (
        <PagesList pages={pages} handleClick={handleClick} />
      ) : (
        <Article page={page} setShowLanding={setShowLanding} />
      )}
      <button>Add a new Article</button>
    </main>
  );
};
