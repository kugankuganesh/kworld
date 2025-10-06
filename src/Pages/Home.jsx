import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import GlobalApi from '../Services/GlobalApi'

function Home() {
    const [post,setPost]=useState([])
    const [orgPost,setOrgPost]=useState([])

    useEffect(()=>{
        getPost();
    },[])
  const getPost = () => {
  GlobalApi.getPost().then(resp => { 

      
       
     console.log("Blogger API response:", resp.data);
     const items = resp?.data?.items || [];
   const result = items.map((item) => ({
      id: item.id,
        title: item.title || "No Title", 
        desc: extractTextFromHtml(item.content).slice(0, 150) + "...",
        tag: item.labels ? item.labels[0] : "General",
       coverImage: extractImageFromContent(item.content), 
        url: item.url,
        date:item.updated,
        
    }));
    setPost(result);
    setOrgPost(result);
 
  });
  
};

function extractTextFromHtml(html) {
  if (!html) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const extractImageFromContent = (htmlContent) => {
  const div = document.createElement("div");
  div.innerHTML = htmlContent;
  const img = div.querySelector("img");
  return img ? img.src : null;
};

    const filterPost=(tag)=>{
      if(tag=='All')
      {
        setPost(orgPost);
        return ;
      }
      const result=orgPost.filter(item=>item.tag==tag);
      setPost(result);
    }

     const filterSearch = (query) => {
      if (!query) {
        setPost(orgPost);
        return;
      }
      const result = orgPost.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      );
      setPost(result);
    };
  return (
    <div >
      
       {/* Search */}
        <Search selectedTag={(tag)=>filterPost(tag)} onSearch={(query) => filterSearch(query)} />
        {/* IntroPost */}
      {post.length>0? <IntroPost post={post[0]} />:null}
        {/* Blogs */}
      {post.length>0?  <Blogs posts={post}/>:null}
      
    </div>
  )
}

export default Home