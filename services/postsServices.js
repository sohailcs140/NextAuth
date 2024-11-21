"use server"

export async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return  await response.json()
}

export async function getPost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return  await response.json()
}
