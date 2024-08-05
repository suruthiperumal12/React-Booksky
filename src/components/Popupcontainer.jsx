import { useState } from "react";
import styles from "./popup.module.css";
export default function Popupcontainer({ books, setBooks }) {
  const [displayVisible, setDisplayVisible] = useState(false);
  const [bookDetials, setBookDetials] = useState({
    title: "",
    author: "",
    description: "",
  });
  function handleSave(e) {
    e.preventDefault();
    if (!bookDetials.title || !bookDetials.author || !bookDetials.description) {
      return;
    }
    const newbooks = { ...bookDetials, id: Date.now() };
    setBooks([...books, newbooks]);
    console.log(books);
    setBookDetials({ title: "", author: "", description: "" });
    setDisplayVisible(false);
  }
  function handleclick() {
    setDisplayVisible(!displayVisible);
  }
  function handleCancel(e) {
    e.preventDefault();
    setDisplayVisible(false);
  }
  return (
    <div>
      <div
        className={`${styles.popupOverlay} ${
          displayVisible ? styles.show : ""
        }`}
      ></div>
      <div
        className={`${styles.popupBox} ${displayVisible ? styles.show : ""}`}
      >
        <div className={styles.popupboxContent}>
          <h2>Add book</h2>
          <input
            onChange={(e) =>
              setBookDetials({ ...bookDetials, title: e.target.value })
            }
            value={bookDetials.title}
            placeholder="Book Title"
          />
          <input
            onChange={(e) =>
              setBookDetials({ ...bookDetials, author: e.target.value })
            }
            value={bookDetials.author}
            placeholder="Book Author"
          />
          <textarea
            onChange={(e) =>
              setBookDetials({ ...bookDetials, description: e.target.value })
            }
            value={bookDetials.description}
            placeholder="Book Description"
          />
          <div>
            <button
              className={styles.popupaddbtn}
              onClick={(e) => handleSave(e)}
            >
              Add
            </button>
            <button
              onClick={(e) => handleCancel(e)}
              className={styles.popupcancelbtn}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <button className={styles.addbtn} onClick={handleclick}>
        +
      </button>
    </div>
  );
}
