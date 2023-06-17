import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

function DetailsBook() {
    const [book, setBook] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        (async function get() {
            try {
                const res = await BooksAPI.get(id);
                setBook(res);
            } 
            catch (err) {
                console.log(err);
                throw err;
            }
        })();
    }, [id]);

    console.log(id)
    return (
        <div>
            <Link to="/" className="close-search">Close</Link>
            {book && (
                <div className="book-details">
                    <div className='book-detail-img'>
                        {book?.imageLinks?.thumbnail !== undefined && <img src={book.imageLinks.thumbnail} alt={`Book cover: ${book.title}`} className="book-detail-img" />}
                    </div>              
                    <div className='book-details-info'>
                        <h1 className="book-detail-title">{book.title}</h1>
                        <strong className="book-detail-subtitle">{book.subtitle}</strong>
                        {book.authors && <p className="book-detail-authors"><strong>Author(s):</strong> {book.authors.join(', ')}</p>}

                        {book.averageRating ? <p className="book-detail-rating"><strong>Rating:</strong> {book.averageRating}</p> : <p className="book-detail-rating"><strong>No Rating:</strong> 0 </p>}
                        <div className="Stars" style={{float : 'left', paddingRight : '5px', '--rating' : book.averageRating ? book.averageRating : '0'}} aria-label="Rating of this product is 2.3 out of 5."></div>

                        {book.categories && <p className="book-detail-categories"><strong>Categories:</strong> {book.categories.join(', ')}</p>}
                        {book.publishedDate && <p className="book-detail-published"><strong>Published:</strong> {book.publishedDate}</p>}
                        <div className="book-detail-description">
                            {book.description ? book.description : <p> Not have description.</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailsBook;