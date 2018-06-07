var getUser = (id, callback) => {

    var user = {
        id: id,
        name: "jay"
    };

    callback(user)
};

getUser(31, (user) => {
    console.log(user);
})
