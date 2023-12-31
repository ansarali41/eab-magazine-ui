import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './MagazinePage.css';
import { AppContext } from '../../App.js';

const MagazinePage = () => {
    const { data, setData } = useContext(AppContext);
    const [selectedCover, setSelectedCover] = useState({});

    const handleSelect = key => {
        const updatedData = data.map(item => (item.key === key ? { ...item, selected: !item.selected } : { ...item, selected: false }));
        setData(updatedData);

        // select cover
        const selected = updatedData.find(item => item.key === key);
        setSelectedCover(selected);
    };
    console.log('data', data);
    console.log('selectedCover', selectedCover);
    return (
        <div className="root">
            <div className="main-container d-flex align-items-center justify-content-center">
                <div>
                    <div>
                        <p className="text-center heading-text fw-bolder">Pick your favorite</p>
                    </div>
                    <div className="row d-flex d-flex align-items-center justify-content-center">
                        {data?.map(el => (
                            <div className={`col-6 p-2`} key={el.key}>
                                <div>
                                    <i className={`fa-regular fa-circle-check  ${el.selected ? 'selected-check-icon' : 'check-icon'}`} onClick={() => handleSelect(el.key)} />
                                </div>
                                <Link to={`/cover-details/${el.key}`}>
                                    <img className="cover-image" src={el.value} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    {selectedCover?.key ? (
                        <div className="mt-4">
                            <Link className="next-btn-link" to={`/cover-details/${selectedCover.key}`}>
                                <button type="button" className="button-style">
                                    NEXT
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <button type="button" className="button-style" disabled style={{ cursor: 'not-allowed' }}>
                                NEXT
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MagazinePage;
