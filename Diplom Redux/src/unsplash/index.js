import Unsplash, { toJson } from 'unsplash-js';


export const unsplash = new Unsplash({
  applicationId:"b68affaf980d31ea84bfcf00615259bde49eef79fa53c1ebb63b3bfff165a840",
  secret:"9aa4e9137138dd70cce583c32c16027fe965f24a85c067133f00b572cde24a25",
  callbackUrl: "https://hattrick-3.github.io/Hattrick-3.github.io/Diplom%20Redux/index.html/auth",

});
export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const setAccessTokenUnplash = (code) => {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json =>{
            localStorage.setItem('token', json.access_token)}
        );
};


export const listPhoto = (start, end,access_token) => {
    unsplash.auth.setBearerToken(access_token);
    return unsplash.photos.listPhotos(start, end, "latest")
        .then(res => res.json());
};

export const likePhoto = (id,access_token) => {
    unsplash.auth.setBearerToken(access_token);
    unsplash.photos.likePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};

export const unLikePhoto = (id,access_token) => {
    unsplash.auth.setBearerToken(access_token);
    unsplash.photos.unlikePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};
