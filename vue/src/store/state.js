export default {
    /* ---------------- App-State ----------------- */
    app: {
        name: "Twitter",
        logo: "http://localhost:3000/src/assets/images/logo/logo.png",
    },

    /* ---------------- User-State ---------------- */
    user: {
        token: sessionStorage.getItem("TOKEN"),
        data: {},
    },

    /* ---------------- Tweet-State --------------- */
    tweet: {
        loading: false,
        data: [],
    },
    searchTweet: {
        loading: false,
        data: [],
    },
    profileTweet: {
        loading: false,
        data: [],
    },
    peopleTweet: {
        loading: false,
        people: "",
        tweets: [],
    },
};
