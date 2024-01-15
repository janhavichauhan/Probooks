

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Index() {
  const [books, setBooks] = useState([]); 
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", {
          headers: { "Authorization": "whatever-you-want" },
        });
        console.log(response);
        setBooks(response.data.books);
      } catch (error) {
        console.error(error); 
      }
    }

    fetchData();
  }, []);

  const bookSearch = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Body">
     

      <div className="Books">
        {bookSearch.map((book, id) => (
          <div className="Book" key={id}>
            <h3>{book.title}</h3>
             <img src={book.imageLinks.thumbnail} alt={book.title} />
             <div className="author">{book.authors}</div>
             <div className="ratings">⭐{book.averageRating}Rating</div>
             {/* <div className="description">{book.description}</div> */}
             <div className="publisher">{book.publisher}</div>
             <div className="pageCount">{book.pageCount}</div>
             <div className="publishedDate">{book.publishedDate}</div>
             <div className="language">{book.language}</div>
             <div className="categories">{book.categories}</div>
             {/* <div className="previewLink">{book.previewLink}</div>
             <div className="infoLink">{book.infoLink}</div>
             <div className="canonicalVolumeLink">{book.canonicalVolumeLink}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;


