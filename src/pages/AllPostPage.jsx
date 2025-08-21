import React, { useEffect, useState } from "react";
import {Container , PostCard} from '../components/index'
import appService from "../../appwrite/config";


function AllPostPage(){
    const [posts , setPosts] = useState([]);

    useEffect(()=>{
        appService.getPosts([]).then((posts)=>{
            if (posts){
                setPosts(posts.documents);
            }
        })
    },[]);


    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div key={post.$id} className="p-2 w-1/5" >
                            <PostCard {...post}/>
                        </div>
                        
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPostPage;