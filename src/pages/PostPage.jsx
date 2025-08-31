import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appService from "../../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function PostPage() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appService.getPost(slug).then((post) => {
                if (post) {
                    console.log('Post data received:', post);
                    console.log('Featured image ID:', post.featuredImage);
                    setPost(post);
                } else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appService.deletePost(post.$id).then((status) => {
            if (status) {
                appService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
  <div className="py-8 bg-body min-h-screen text-gray-100">
    <Container>
      <div className="w-full flex flex-col items-center mb-6 relative bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-4">
        {post.featuredImage ? (
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={appService.filePreview(post.featuredImage)}
              onError={(e) => {
                console.log('Image failed to load:', e);
                appService.ensureFileReadable(post.featuredImage, userData?.$id);
              }}
              onLoad={() => console.log('Image loaded successfully')}
              alt={post.title}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        ) : (
          <p className="text-gray-400 text-sm mt-2">No featured image</p>
        )}

        {isAuthor && (
          <div className="absolute right-6 top-6 flex gap-3">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-indigo-500 hover:bg-indigo-600">Edit</Button>
            </Link>
            <Button bgColor="bg-red-500 hover:bg-red-600" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>

      <div className="w-full mb-6 text-center">
        <h1 className="text-3xl font-bold text-indigo-300">{post.title}</h1>
      </div>

      <div className="browser-css bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-inner prose prose-indigo max-w-4xl mx-auto">
        {parse(post.content)}
      </div>
    </Container>
  </div>
) : null;

}