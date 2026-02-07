// fetch - this fn allows us to make http requests in the browser


// // fetchUsers 

// users data => db, json, some storage

fetch("http://127.0.0.1:5500/Async/3%20-%20Promise%20-%20the%20solution/example%20-%20data%20fetch%20&%20save%20simulation/user.json")
    .then(result => {
        console.log(result)
        // result.text().then(res => console.log(res))
        // JSON.parse
        return result.json();
    }).then(data => console.log(data))
    .catch(error => console.log(error))


// https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(result => console.log(result))

function showLoader(content = "loading...") {
    document.getElementById("status").textContent = content;
}
function clearLoader() {
    document.getElementById("status").textContent = ""

}

function fetchPosts(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response =>
        response.json()
    )
}

// function fetchComments(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(response => {response.json()})
// }
function fetchComments(postId) {
    showLoader("fetching comments...")
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
}

function fetchUsers(comments) {
    showLoader("fetching user...")
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            return comments.map(comment => {
                // users.find(user=> user.email === comment.email)
                // using random index to attach a user with comment
                return {
                    ...comment,
                    user: users[Math.floor(Math.random() * users.length)]
                }

            })
        })
}

function showComments(comments) {
    if (comments.length) {
        const commentsElement = document.querySelector("#post-comments");
        const commentsContainer = document.createElement("ul");
        for (let comment of comments) {
            const commentsElement = document.createElement("li");
            commentsElement.id = comment.id;
            commentsElement.textContent = `${comment.name}, by - ${comment.user.name}`;
            commentsContainer.append(commentsElement);
        }

        commentsElement.append(commentsContainer);
    }

}

function showPosts(post) {
    showLoader("fetching posts....")
    const postElement = document.getElementById("post");
    postElement.innerHTML = `<article id=${post.id}>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <section id="post-comments">
            <h2>comments</h2>
        </section>
    </article>`;
    return post.id;
}

document.querySelector("#show").addEventListener("click", function () {
    showLoader();
    fetchPosts(document.querySelector("#posts-id").value)
        .then(showPosts)
        .then(fetchComments)
        .then(fetchUsers)
        .then(showComments)
        .finally(clearLoader)
})



