import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import bookShelf from './BookShelf';

const ListBook = ({ books, onUpdate }) => {

    return (
        <div>
            <div className="list-books">
                <div className="list-books-title"><h1>My Reading</h1></div>
                <div className="list-books-content">
                    {bookShelf.map(bookShelf => {
                        return (
                            <div key={bookShelf.id}>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">{bookShelf.title}</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {books.filter(book => book.shelf === bookShelf.id).map(bookInShelf => (
                                                <BookItem key={bookInShelf.id} data={bookInShelf} activeShelf={bookShelf.id} onUpdate={onUpdate} />
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="open-search">
                <Link to={'/search'}>Search a book</Link>
            </div>
        </div>
    );
};


ListBook.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default ListBook;