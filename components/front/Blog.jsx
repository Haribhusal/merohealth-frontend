/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Loading from "../Loading";

const Blog = ({ count, showMoreLink, title }) => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@merohealth`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, count);

  return (
    <section className="articles py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex mb-3 align-items-end justify-content-between">
            <div className="titlewrapper">
              <h3 className="title text_p text-capitalize">{title} </h3>{" "}
            </div>
            {showMoreLink && (
              <Link href="/blog-page">
                <a>
                  <button className="btn btn_p_dim px-3 py-2 d-flex align-items-center">
                    Find More Blogs
                    <i className="las la-arrow-right ml-2"></i>
                  </button>
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {isLoading && <Loading />}
            <div className="articleWrapper">
              {finalData.map((item, index) => (
                <div key={index} className="aitem">
                  <Link href={item.link}>
                    <a target="_blank">
                      <article className="article gap">
                        <figure className="flex3">
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt=""
                              className="img-fluid"
                            />
                          )}
                        </figure>

                        <div className="details p-3 flex5">
                          <div className="meta small mb-3 text-muted d-flex flex-row gap align-items-start">
                            <div className="item">
                              <i className="las la-tag f16"></i>
                              <span className="text-muted">
                                {item.categories
                                  .slice(0, 2)
                                  .map((cat, index) => (
                                    <span
                                      key={index}
                                      className="bg_p_dim rounded px-2 py-1 mr-2 "
                                    >
                                      {cat}
                                    </span>
                                  ))}
                              </span>
                            </div>
                          </div>
                          <h5 className="title mb-2">{item.title}</h5>

                          <p className="text-muted small">
                            {item.content
                              .replace(/(<([^>]+)>)/gi, "")
                              .slice(0, 150)}
                            ...
                          </p>
                          <div className="meta small mt-3 text-muted d-flex flex-row gap align-items-start">
                            <div className="item">
                              <i className="las la-calendar-alt f16"></i>
                              <span className="text-muted">
                                <time dateTime="2019-01-01">
                                  {item.pubDate.split(" ")[0]}
                                </time>
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
