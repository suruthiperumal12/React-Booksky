import { useEffect, useState } from "react";
import styles from "./Bookcontainer.module.css";
import Popupcontainer from "./Popupcontainer";
export default function Bookcontainer() {
  const [books, setBooks] = useState(() => {
    const savedbooks = localStorage.getItem("books");
    return savedbooks ? JSON.parse(savedbooks) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  function handleDelete(id) {
    const modifiedbooklists = books.filter((book) => book.id !== id);
    setBooks(modifiedbooklists);
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bookcontainer}>
        <h1>The god of small things</h1>
        <h4>Arundhati Roy</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          placeat non odit veniam eius tenetur nostrum, accusantium impedit quas
          ex ea laborum magnam debitis esse quia ipsam excepturi? Dicta, fugiat.
        </p>
        <button className={styles.deletebtn}>Delete</button>
      </div>
      {books.map((book, index) => (
        <div className={styles.bookcontainer} key={index}>
          <h1>{book.title}</h1>
          <h4>{book.author}</h4>
          <p>{book.description}</p>
          <button
            className={styles.deletebtn}
            onClick={() => handleDelete(book.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <Popupcontainer books={books} setBooks={setBooks} />
    </div>
  );
}
