module.exports = {
    post: [
        {
            id: "7dsfh8",
            title: "Basket",
            description: "Jogo de basket as 9pm"
        },
    ],

    getAll(){
        return this.post
    },

    newPost(title, description){
        this.post.push({id: generatoID(), title, description})
    },

    deletePost(id){
        
    }
}

function generatoID() {
    return Math.random().toString(36).substring(2, 9)
}