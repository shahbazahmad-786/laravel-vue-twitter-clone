import axiosClient from "../axios";

/* -------------------- Auth-Actions -------------------- */
/* Get-User */
const getUser = ({ commit }, data) => {
    return axiosClient.get("/user", data).then(({ data }) => {
        commit("setUser", data);
        return data;
    });
};

/* Login */
const register = ({ commit }, data) => {
    return axiosClient.post("/register", data).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
    });
};

/* Register */
const login = ({ commit }, data) => {
    return axiosClient.post("/login", data).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
    });
};

/* Logout */
const logout = ({ commit }) => {
    return axiosClient.post("/logout").then((response) => {
        commit("setToken", null);
        return response;
    });
};

/* -------------------- Tweet-Actions ------------------- */
/* Create-Tweet */
const createTweet = ({ commit }, data) => {
    const form = new FormData();
    form.append("tweet", data.tweet);
    form.append("file", data.file);
    data = form;

    return axiosClient.post("/tweets", data);
};

/* Get-Tweets */
const getTweets = ({ commit }) => {
    commit("setTweet", [true]);
    return axiosClient.get("/tweets").then(({ data }) => {
        commit("setTweet", [false, data]);
        return data;
    });
};

/* Search-Tweets */
const searchTweets = ({ commit }, { search = "" } = {}) => {
    commit("setSearchTweet", [true]);
    return axiosClient
        .get("/tweets/search", { params: { search } })
        .then(({ data }) => {
            commit("setSearchTweet", [false, data]);
            return data;
        });
};

/* Get-Profile-Tweets */
const getProfileTweets = ({ commit }) => {
    commit("setProfileTweet", [true]);
    return axiosClient.get("/tweets/profile").then((response) => {
        commit("setProfileTweet", [false, response.data]);
    });
};

/* Get-People-Tweets */
const getPeopleTweets = ({ commit }, id) => {
    commit("setPeopleTweet", [true]);
    return axiosClient.get(`/tweets/people/${id}`).then(({ data }) => {
        commit("setPeopleTweet", [false, data.people, data.tweets]);
        return data;
    });
};

/* Delete-Tweet */
const showTweet = ({ commit }, id) => {
    return axiosClient.get(`/tweets/${id}`);
};

/* Delete-Tweet */
const deleteTweet = ({ commit }, id) => {
    return axiosClient.delete(`/tweets/${id}`);
};

/* ------------------ Export-Functions ------------------ */
export {
    getUser,
    register,
    login,
    logout,
    createTweet,
    getTweets,
    searchTweets,
    getProfileTweets,
    getPeopleTweets,
    showTweet,
    deleteTweet,
};
