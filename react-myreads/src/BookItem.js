import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import bookShelf from './BookShelf';

const BookItem = ({ data, activeShelf, onUpdate }) => {
    const currentShelf = activeShelf || 'none';

    const onHandleUpdate = (event) => {
        onUpdate(data, event.target.value);
    };

    return (
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} layout>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: data?.imageLinks?.smallThumbnail !== undefined ? `url(${data?.imageLinks?.smallThumbnail})` : 'unset' }}
                    />
                    <div className="book-shelf-changer">
                        <select defaultValue={currentShelf} onChange={onHandleUpdate}>
                            <option disabled>
                                Move to...
                            </option>
                            {bookShelf.map(shelf => {
                                return (
                                    <option key={shelf.id} value={shelf.id}>
                                        {shelf.title}
                                    </option>
                                );
                            })}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{data.title}</div>
                <div className="book-authors">{data.authors && data.authors.join(', ')}</div>
                <div>
                    <Link className="book-details" to={`book/${data.id}`}>Details</Link>
                </div>              
            </div>
        </motion.li>
    );
};

BookItem.propTypes = {
    data: PropTypes.object.isRequired,
    activeShelf: PropTypes.string,
    onUpdate: PropTypes.func.isRequired
};

export default BookItem;