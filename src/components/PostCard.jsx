import React from "react";
import appService from "../../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-full mb-4 overflow-hidden rounded-xl">
                    {featuredImage && (
                    <img
                        src={appService.filePreview(featuredImage)}
                        alt={title}
                        className="w-full h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                    )}
                </div>
                <h2 className='text-lg font-semibold text-indigo-300 hover:text-indigo-400 transition-colors duration-200'>
                    {title}
                </h2>
                </div>

        </Link>
    );
}

export default PostCard;
