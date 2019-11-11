import React from 'react';
import {Link, NavLink} from "react-router";

const Photo = (props) => {
console.log(props)
    const { photo, index } = props;
    return (
      <div className="block_photo">
        <div className="block_profile">
          <a href={photo.user.links.html}>
            <img className='profile_img'src={photo.user.profile_image.small}/>&nbsp;&nbsp;{photo.user.name}
          </a>
        </div>
        <Link to = {`/photo/${index}`}><img src={photo.urls.regular} className='photo' title='Увеличить фото'/></Link>
        <div className='date'>
          <span className='created'>Опубликовано {photo.created_at}</span>
          <span className='likes'>
            <span className="val_likes">{photo.likes}</span>
            <span> Нравится</span>
          </span>
        </div>
      </div>
    );
};

export default Photo;
