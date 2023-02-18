import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Reviews.css';
import { GetReviews } from 'services/apiPack';

const Reviews = () => {
  const [data, setData] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await GetReviews(id);
        setData(data.results);
        setIsValid(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <div className="revContainer">
      {data && isValid && (
        <>
          <h3>Reviews</h3>
          <ul>
            {data.map(info => (
              <li key={info.id}>
                <h4>{info.author}</h4>
                <p>{info.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {!data.length && isValid && <h3>Thete is no rewievs</h3>}
    </div>
  );
};

export default Reviews;
