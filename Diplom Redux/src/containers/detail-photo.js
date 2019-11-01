import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from "react-router";
import { likePhoto, unLikePhoto } from '../unsplash';
import { like, unlike } from "../actions/";

class DetailPhoto extends Component {

    constructor(props) {
        super(props);
        const { params } = props;
        this.state = {
            id_photo: '',
        }
    }

    componentDidMount() {
        const photos = this.props.photos;
        const id = this.props.params.id;
        const id_photo = photos[+id].id;

        this.setState(
            {
                id_photo
            }
        )
    }

    goBack() {

        this.props.history.goBack()
    }

    changeLikePhotoStatus() {
        const id = this.props.params.id;
        let status = this.props.photos[+id].liked_by_user;

        if (!status) {
            likePhoto(this.state.id_photo,localStorage.getItem('token'));
            this.props.likePhotoAction(this.state.id_photo);
        } else {
            unLikePhoto(this.state.id_photo,localStorage.getItem('token'));
            this.props.unlikePhotoAction(this.state.id_photo);
        }
    }

    render() {
        const id = this.props.params.id;
        let className = this.props.photos[+id].liked_by_user ? 'like' : 'not_like'

        return (
              <div className='container'>
                <div>
                  <div>
                    <a href={this.props.photos[+id].user.links.html}><img src={this.props.photos[+id].user.profile_image.small}/>{this.props.photos[+id].user.name}</a>
                  </div>
                  <img className ='full_photo'src={this.props.photos[+id].urls.regular}/>
                  <div className='date'>
                    <span>Опубликовано {this.props.photos[+id].created_at}</span>
                    <span className='likes'>
                      <button className={className} onClick={this.changeLikePhotoStatus.bind(this)}></button>
                      <span className='val_likes'>  {this.props.photos[+id].likes}</span>
                    </span>
                  </div>
                </div>
                <div>
                    <button  className='back'  onClick={browserHistory.goBack}> Вернуться к ленте </button>
                </div>
                </div>
              );
            }}


function mapStateToProps(state) {
    return {
        photos: state.photoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        likePhotoAction: (id) => dispatch(like(id)),
        unlikePhotoAction: (id) => dispatch(unlike(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPhoto);
