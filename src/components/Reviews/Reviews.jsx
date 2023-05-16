import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Reviews.css';
import { GetReviews } from 'services/apiPack';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await GetReviews(id);
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <div className="revContainer">
      {data && (
        <>
          <h3 className="revTitle">Reviews</h3>
          <ul className="revList">
            {data.map(info => (
              <li key={info.id}>
                <h4 className="revSubtitle">{info.author}</h4>
                <p className="revText">{info.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {!data.length && <h3>Thete is no rewievs</h3>}
    </div>
  );
};

export default Reviews;
