import React, {useEffect, useState} from 'react'
import appService from '../../appwrite/config'
import {Container, PostCard} from '../components/index'

function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-16 bg-body text-gray-100">
        <Container>
          <div className="flex justify-center items-center h-64">
            <h1 className="text-3xl font-semibold text-indigo-300">
              Login to read posts
            </h1>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className='w-full py-12 bg-body text-gray-100'>
      <Container>
        <div className='flex flex-wrap -m-3'>
          {posts.map((post) => (
            <div key={post.$id} className='p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default HomePage;