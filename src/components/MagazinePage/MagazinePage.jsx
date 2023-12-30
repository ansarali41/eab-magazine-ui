import React from 'react';
import { Link } from 'react-router-dom';
import './MagazinePage.css';

const testData = [
    { key: 1111, value: 'https://i.ibb.co/s10p1d6/pngtree-color-matching-autumn-photography-book-cover-design-image-400413-1.jpg' },
    { key: 1112, value: 'https://i.ibb.co/s10p1d6/pngtree-color-matching-autumn-photography-book-cover-design-image-400413-1.jpg' },
    { key: 1113, value: 'https://i.ibb.co/s10p1d6/pngtree-color-matching-autumn-photography-book-cover-design-image-400413-1.jpg' },
];

const MagazinePage = () => {
    // const [data, setData] = useState(testData);
    return (
        <div className="root">
            <div className="main-container d-flex align-items-center justify-content-center">
                <div>
                    <div>
                        <p className="text-center heading-text fw-bolder">Pick your favorite</p>
                    </div>
                    <div className="row d-flex d-flex align-items-center justify-content-center">
                        {testData?.map(el => (
                            <div className="col-6 p-2" key={el.key}>
                                <div>
                                    <i className="fa-regular fa-circle-check check-icon" />
                                </div>
                                <Link to={`/cover-details/${el.key}`}>
                                    <img className="cover-image" src={el.value} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button type="button" className="button-style">
                            NEXT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagazinePage;
