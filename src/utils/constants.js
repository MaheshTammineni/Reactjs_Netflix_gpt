export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVTAR = "https://avatars.githubusercontent.com/u/92023481?v=4";

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
}

// export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w700";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";
export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"},{identifier: "hindi", name: "Hindi"}];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
