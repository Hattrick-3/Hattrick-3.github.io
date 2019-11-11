import Unsplash, { toJson } from 'unsplash-js';


export const unsplash = new Unsplash({
  applicationId:"1d6674a7f078b2dc709b30fc011e7d1cd7a820862056acb4fd6af493137a4404",
  secret:"c8feb8f8541c2c586a6958b75bf16867639dea31d9e679584d743fc7bdd9646b",
  //callbackUrl: "http://localhost:8080/auth",
  callbackUrl: "http://aleks2s5.beget.tech/auth",

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
