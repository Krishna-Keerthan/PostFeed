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
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    {post.featuredImage ? (
                        <div>
                            <p className="text-white text-sm mb-2">Debug: Image ID: {post.featuredImage}</p>
                            <img
                                src={appService.filePreview(post.featuredImage)}
                                onError={(e) => {
                                    console.log('Image failed to load:', e);
                                    appService.ensureFileReadable(post.featuredImage, userData?.$id);
                                }}
                                onLoad={() => console.log('Image loaded successfully')}
                                alt={post.title}
                                className="rounded-xl"
                            />
                        </div>
                    ) : (
                        <p className="text-white text-sm">No featured image</p>
                    )}

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}