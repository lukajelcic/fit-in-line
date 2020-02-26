import React from 'react';


function NewsCard(props) {
    return (
        <section className="news-card-section">
            <article className="card">

                <div className="news-img">
                    <a href="/">
                        <img style={{ width: 300, height: 200 }} src={props.item.url} alt="/"></img>
                    </a>
                </div>

                <h3 className="entry-title"><a href="/">{props.item.title}</a></h3>

                <div className="entry-meta">
                    <span className="views">
                        <i className="fa fa-heart-o" id="view-fa">{props.item.views}</i>
                    </span>
                    <span className="date">
                        <i className="fa fa-clock-o" id="date-fa">{props.item.date}</i>
                    </span>
                </div>

                <div className="entry-content">
                    <p>{props.item.content}</p>
                </div>
            </article>
        </section>
    )
}

export default NewsCard;