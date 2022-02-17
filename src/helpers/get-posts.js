const url = 'https://jsonplaceholder.typicode.com/posts?userId=';

const getPosts = async userId => {
    const urlUserId = `${url}${userId}`;
    const res = await fetch(urlUserId);
    const posts = await res.json();
    return posts;
}

export default getPosts;
