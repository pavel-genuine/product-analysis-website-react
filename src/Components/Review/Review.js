import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = (props) => {

    const {name, img, review,rating}=props.review

    return (
        <div className='review' >
            <img style={{width:'85%' ,border:'1px solid rgb(169, 14, 14)', borderRadius:'50%', margin:'20px' }} src={img} alt="" />
            <div style={{ padding:'10px'}} >
            <h4 style={{margin:'2px'}}>Reviewer : {name}</h4>
            <h4 style={{margin:'2px'}}>Review :</h4>
            <p style={{margin:'2px'}} title={review.length<150?'':review} >{review.length<150? review:review.slice(0,150)+'...'}</p>
            
            {rating===5?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></React.Fragment> :''}
            
            {rating===4?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></React.Fragment> :''} 
            
            {rating===4.5?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon></React.Fragment> :''} 
            </div>
        </div>
    );
};

export default Review;