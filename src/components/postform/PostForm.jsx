import React, { useCallback, useEffect } from "react";
import { useForm} from 'react-hook-form'
import {useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Button , Input , Select , RTE} from '../index'
import appService from "../../../appwrite/config";

export default function PostForm ({post}){

    const {register , handleSubmit, watch , setValue , getValues, control} = useForm({
        defaultValues:{
            title:post?.title || '',
            slug:post?.slug || '',
            content:post?.content || '',
            status:post?.status || 'active',
        }
    })

    const navigate = useNavigate();
    const userData = useSelector((status)=> status.auth.userData);

    const submit = async (data) =>{
        if (post){
            const file = data.image?.[0] ? await appService.uploadFile(data.image[0], userData?.$id): null;

            if (file){
                await appService.deleteFile(post.featuredImage)
            }

            const dbPost = await appService.updatePost(post.$id , {
                    ...data ,
                    featuredImage: file ? file.$id : undefined,
                })

            
            if (dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
            }else {
                const file = await appService.uploadFile(data.image[0], userData?.$id);

                if (file){
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    const dbPost = await appService.createPost({
                        ...data ,
                        userId : userData.$id
                    })

                    if (dbPost){
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        }


        const slugTransform = useCallback((value)=>{
            if (value && typeof value === 'string'){
                return value
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-zA-Z\d\s]+/g, "-")
                    .replace(/\s/g, "-");

            }
            return ''
        })

        useEffect(()=>{
            const subscription = watch((value , {name})=>{
                if (name === 'title'){
                    setValue('slug' , slugTransform(value.title) , { shouldValidate: true })
                }
            });

            return ()=>
                subscription.unsubscribe();
            
        },[watch, slugTransform, setValue])


        return (
        <div className="min-h-screen bg-blue-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg border border-blue-200 p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-blue-900 mb-2">
                            {post ? "Update Post" : "Create New Post"}
                        </h1>
                        <p className="text-blue-600/80">
                            {post ? "Edit your existing post content and settings" : "Fill in the details to create a new post"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-8">
                        <div className="w-2/3 px-2">
                            <div className="space-y-6">
                                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Post Details</h3>
                                    <Input
                                        label="Title :"
                                        placeholder="Enter post title"
                                        className="mb-4"
                                        {...register("title", { required: true })}
                                    />
                                    <Input
                                        label="Slug :"
                                        placeholder="post-url-slug"
                                        className="mb-4"
                                        {...register("slug", { required: true })}
                                        onInput={(e) => {
                                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                                        }}
                                    />
                                </div>
                                
                                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Content</h3>
                                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="space-y-6">
                                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Featured Image</h3>
                                    <Input
                                        label="Upload Image :"
                                        type="file"
                                        className="mb-4"
                                        accept="image/png, image/jpg, image/jpeg, image/gif"
                                        {...register("image", { required: !post })}
                                    />
                                    {post && (
                                        <div className="w-full mb-4">
                                            <div className="relative group">
                                                <img
                                                    src={appService.filePreview(post.featuredImage)}
                                                    alt={post.title}
                                                    className="rounded-lg w-full h-48 object-cover border-2 border-blue-200 group-hover:border-blue-500 transition-colors duration-200"
                                                />
                                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Post Settings</h3>
                                    <Select
                                        options={["active", "inactive"]}
                                        label="Status"
                                        className="mb-6"
                                        {...register("status", { required: true })}
                                    />
                                    <Button 
                                        type="submit" 
                                        bgColor={post ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} 
                                        className="w-full py-3 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    > 
                                        {post ? "Update Post" : "Create Post"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    }