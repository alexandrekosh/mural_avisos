
document.addEventListener('DOMContentLoaded', () => {
    updatePost()
})


function updatePost() {
    let promise = fetch('http://localhost:3000/api/all').then(res => {
        return res.json()
    })

    promise.then(json => {

        let postElemnts = ''

        let posts = JSON.parse(json)

        posts.forEach(post => {
            let postElement = 
            `
            <div id="${post.id}" class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>
            `
            postElemnts += postElement
        });
        document.querySelector('#posts').innerHTML = postElemnts
    })
}

function newPost() {
    let title = document.querySelector('#title').value
    let description = document.querySelector('#desc').value
    
    let post = {title, description};

    const options = {
        method: 'POST',
        headers: new Headers({'content-type':'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://localhost:3000/api/new', options).then(res => {
        updatePost()
        document.querySelector('#title').value = ''
        document.querySelector('#desc').value = ''
    })
}