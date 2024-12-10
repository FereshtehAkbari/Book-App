import BooksCard from "./BooksCard";
import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import SideCard from "./SideCard";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";
function Books() {
  const [liked, setLiked] = useState([]);
  const [books, setBooks] = useState(bookData);
  const [search, setSearch] = useState([]);
  const handlLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BooksCard
              key={book.id}
              data={book}
              handlLikedList={handlLikedList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
