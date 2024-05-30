import React, { useEffect, useState } from 'react';
import { getBookmarks } from '../api/bookmarks';
import BookmarkItem from './BookmarkItem';

const BookmarkList: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<
    chrome.bookmarks.BookmarkTreeNode[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBookmarks()
      .then((bookmarks) => {
        console.log('Fetched bookmarks:', bookmarks);
        setBookmarks(bookmarks);
      })
      .catch((err) => {
        console.error('Error fetching bookmarks:', err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            bookmark={bookmark}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
