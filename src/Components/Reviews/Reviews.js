
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{

        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Reviews :</h2>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', margin:'0 200px'}} >
           
           {
               reviews.map(review=><Review key={review.id} review={review}></Review>).slice(0,3)
           }

         
           <Link to='/reviews'> <button style={{backgroundColor:'rgb(169, 14, 14)', padding:'10px', color:'white', border:'0', cursor:'pointer', fontWeight:'bold' }} >All Reviews </button></Link>
           
           
       </div>
        </div>
    );
};

export default Reviews;