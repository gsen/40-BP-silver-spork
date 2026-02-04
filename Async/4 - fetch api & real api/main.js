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

function showLoader() {
    document.getElementById("status").textContent = "loading..."
}
function clearLoader() {
    document.getElementById("status").textContent = ""

}

function fetchPosts(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json())
}

function fetchComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(response => response.json())
}

function showComments(comments) {
    console.log(comments)
    //         < ul >
    //                 <li>comment 1</li>
    //                 <li>comment 2</li>
    //                 <li>comment 3</li>
    //             </ul >
}

function showPosts(post) {
    const postElement = document.getElementById("post");
    postElement.innerHTML = `<article id=${post.id}>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <section id="comments">
            <h2>comments</h2>
            <ul>
                <li>comment 1</li>
                <li>comment 2</li>
                <li>comment 3</li>
            </ul>
        </section>
    </article>`;
    return post.id;
}

document.querySelector("#show").addEventListener("click", function () {
    showLoader();
    fetchPosts(document.querySelector("#posts-id").value)
        .then(showPosts)
        .then(fetchComments)
        .then(showComments)
        .finally(clearLoader)
})



