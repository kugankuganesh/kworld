import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile1 from '../assets/Images/profile.png';

function IntroPost({post}) { 
  // console.log('post',{post});
  const navigate=useNavigate();  
  return (
    <div className='grid grid-cols-1 cursor-pointer
     md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'  
     onClick={()=>navigate('blog-detail/'+post.id)}>
        <img src={post.coverImage} className='
        rounded-2xl object-cover w-full h-full'/>
        <div>
            <h4 className='text-red-500'>{post.tag}</h4>
            <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
            <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.desc}</h4>
            
             <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 block"
          >
            Read More
          </a>
        <div className='flex items-center mt-5'>
            <img src={Profile1}
            className='w-[50px] rounded-full'/>
            <div className='ml-2'>
                <h3 className='font-bold '>Kugankuganesh</h3>
                <h3 className='text-gray-500'>{post.date}</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IntroPost