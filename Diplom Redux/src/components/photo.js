import React from 'react';
import {Link, NavLink} from "react-router";

const Photo = (props) => {
console.log(props)
    const { photo, index } = props;
    return (
      <div className="block_photo">
        <div >
          <a href={photo.user.links.html}><img src={photo.user.profile_image.small}/>{photo.user.name}</a>
        </div>
        <Link to = {`/photo/${index}`}><img src={photo.urls.regular} className='photo' /></Link>
        <div className='date'>
          <span>Опубликовано {photo.created_at}</span>
          <span className='likes'>
            <span className='val_likes'>  {photo.likes} Нравится</span>
          </span>
        </div>
      </div>
    );
};

export default Photo;
