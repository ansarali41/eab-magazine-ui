import React from 'react';
import { Link } from 'react-router-dom';
import coverImage from '../../images/cover-image.jpg';
import './MagazineDetails.css';

const MagazineDetails = () => {
    return (
        <div className="root">
            <div className="main-container d-flex align-items-center justify-content-center">
                <div>
                    <div className="row d-flex d-flex align-items-center justify-content-center">
                        <div className="p-2">
                            <img className="image-details" src={coverImage} alt="" />
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="mt-4">
                            <Link to={`/thank-you`}>
                                <button type="button" className="button-style">
                                    PUBLISH AT THE
                                    <br />
                                    NEWSSTAND
                                </button>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <Link to={`/`}>
                                <button type="button" className="button-style">
                                    DISCARD AND
                                    <br />
                                    START OVER
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagazineDetails;
