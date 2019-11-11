import React from 'react';

import { loadPhoto } from '../actions';
import { setAccessTokenUnplash, listPhoto } from '../unsplash';
import { connect } from 'react-redux';

import Photo from '../components/photo';

var isResizeble = false;

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.loadPhotos = this.loadPhotos.bind(this);
        if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === '' || !localStorage.getItem('token'))
            this.setAccessToken();
    }

    loadPhotos() {
        let start = window.localStorage.getItem('start');
        let end = window.localStorage.getItem('end');

        const data = listPhoto(+start, +end)
        console.log(data)
        data.then(d => this.props.loadPhoto(d));
        window.localStorage.setItem('start', +start + 10);
        console.log(start)
    }
    setAccessToken() {
        const code = location.search.split('code=')[1];
        if (code) {
            setAccessTokenUnplash(code);
        }
    }

    componentDidMount() {
        if(!isResizeble) {
            this.loadPhotos();
            isResizeble = true;
        }
    }

    render() {
        return (
          <div>
            <h1>Фотогалерея</h1>
            <div >
              {this.props.photos.map((photo, index) => {
                return <Photo key={index} photo={photo} index={index} />})}
            </div>
            <div className="row">
              <button className="btn" onClick={this.loadPhotos}>Загрузить еще</button>
            </div>
          </div>
)}
}

function mapStateToProps(state) {
    return {
        photos: state.photoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPhoto: (photos) => dispatch(loadPhoto(photos))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
