import axios from "axios"
import { useEffect, useState } from "react"
import './dashboard.css'

const Dashboard =() =>{
    const [posts,setPosts] = useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      axios.get('https://www.reddit.com/r/reactjs.json').then(res=>{
        const newPosts = res.data.data.children.map(item=>item.data)
        console.log(newPosts);
        setPosts(newPosts)
        setLoading(false)
      }).catch(err=>err)
    },[])
    console.log(posts);
    return (
      <div >
        <h1>Reddit</h1>
        {loading?(<p>Loading....</p>):(posts.map((post,i)=>{ return(
          <div className='card' key={i}>
            
            <small><h5>Posted by {post.author} {Math.floor(post.created / (1000 * 60 * 60 * 24))} days ago</h5></small>
            <h3>{post.title}</h3><br />
            <a href={post.url} target="_blank">original post</a>
  
            <p>{post.selftext}</p>
            <img src={post.secure_media} />
  
           </div> 
            )
        }))}
      </div>
    );
}


export default Dashboard