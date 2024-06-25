/* --------------------- Auth-Mutations --------------------- */
const setUser = (state, user) => {
    state.user.data = user;
};

const setToken = (state, token) => {
    state.user.token = token;
    if (token) {
        sessionStorage.setItem("TOKEN", token);
    } else {
        sessionStorage.removeItem("TOKEN", token);
    }
};

/* --------------------- Tweet-Mutations -------------------- */
const setTweet = (state, [loading, data = null]) => {
    if (data) {
        state.tweet.data = data;
    }
    state.tweet.loading = loading;
};

const setSearchTweet = (state, [loading, data = null]) => {
    if (data) {
        state.searchTweet.data = data;
    }
    state.searchTweet.loading = loading;
};

const setProfileTweet = (state, [loading, data]) => {
    state.profileTweet.loading = loading;
    state.profileTweet.data = data;
};

const setPeopleTweet = (state, [loading, people = null, tweets = null]) => {
    state.peopleTweet.loading = loading;
    if (people) {
        state.peopleTweet.people = people;
    }
    if (tweets) {
        state.peopleTweet.tweets = tweets;
    }
};

/* --------------------- Export-Functions ------------------- */
export {
    setUser,
    setToken,
    setTweet,
    setSearchTweet,
    setProfileTweet,
    setPeopleTweet,
};
