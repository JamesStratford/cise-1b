import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleCard = (props) => {
    const  article  = props.article;

    return(
        <div className="card-container">
            <img src="https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview-300x252.png" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-article/${article._id}`}>
                        { article.title }
                    </Link>
                </h2>
                <h3>{article.author}</h3>
                
            </div>
        </div>
    )
};

export default ArticleCard;