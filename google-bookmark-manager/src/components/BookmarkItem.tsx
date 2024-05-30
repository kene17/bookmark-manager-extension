import React from 'react';

interface BookmarkItemProps {
  bookmark: chrome.bookmarks.BookmarkTreeNode;
}

const BookmarkItem: React.FC<BookmarkItemProps> = ({ bookmark }) => {
  const handleOpenBookmark = () => {
    if (bookmark.url) {
      window.open(bookmark.url, '_blank');
    }
  };

  if (bookmark.children) {
    return (
      <ul>
        {bookmark.children.map((child) => (
          <BookmarkItem
            key={child.id}
            bookmark={child}
          />
        ))}
      </ul>
    );
  }

  return (
    <li>
      {bookmark.url ? (
        <a
          href='#'
          onClick={handleOpenBookmark}
        >
          {bookmark.title}
        </a>
      ) : (
        <span>{bookmark.title}</span>
      )}
    </li>
  );
};

export default BookmarkItem;
