// Success and error handlers
function fetchUserProfile(id, success, error) {
    if (id) {

        success({ name: "Rahul", age: 21 });
    } else {
        error("Unable to fetch user");
    }
}
// represent positive handing
function successCallback(data) {
    console.log(data)
}
// represents error handling
function errorCallback(error) {
    console.error(error)
}
// fetchUserProfile(1, successCallback, errorCallback)
fetchUserProfile(null, successCallback, errorCallback)
fetchUserProfile(1,
    (data) => {
        console.log(data)
    }, (error) => {
        console.error(error)

    });




