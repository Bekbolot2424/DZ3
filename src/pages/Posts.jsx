import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts?limit=5')
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Посты</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="pb-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;