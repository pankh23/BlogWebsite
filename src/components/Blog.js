import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

export const Blog = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[900px] py-8 flex flex-col gap-y-7 mt-[70px] mb-[60px] '>
      {loading ? (

<div className="flex justify-center items-center min-h-[70vh]">
          <Spinner /> 

          </div>
      ) : (
          posts.length === 0 ? (
              <div>
                  <p>No Post Found</p>
              </div>
          ) : (
              posts.map((post) => (
                  <div key={post.id}>
                      <p className='font-bold text-sm'>{post.title}</p>

<p className='text-[13px]'>

    By <span className='italic'>{post.author}</span> on <span className='font-bold'>{post.category}</span>

</p>

<p className='text-[13px] mt-[6px]'>Posted on {post.date}</p>

<p className='text-[15px] mt-[10px]'>{post.content}</p>

<div className='flex gap-x-3'>

    {post.tags.map((tag, index) => (

        <span key={index} className='text-blue-700 underline font-bold text-[10px] mt-[4px]'>{` #${tag}`}</span>

    ))}

</div>
                  </div>
              ))
          )
      )}
    </div>
  );
}

export default Blog;