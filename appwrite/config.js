import conf from '../conf/conf.js'
import {Client ,ID , Storage ,Databases , Query, Permission, Role} from 'appwrite'

export class Services{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , status , featuredImage , slug , content , userId}){
        try {
            return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
                
            }
        )
        
        
        } catch (error) {
            console.log("Application service :: create Post :error : ", error);
            
        }
        
        
    }

    async updatePost(slug , {title , status , featuredImage , content}){
        try {
            return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
        } catch (error) {
            console.log("Application service :: upadate Post :error : ", error);
            return false;
        }
        
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;
        } catch (error) {
            console.log("Application service :: delete Post :error : ", error);
            return false;
        }
        
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Application service :: get Post :error : ", error);
            return false;
        }
    }
    
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Application Service :: Get Posts (lists) : error", error);
            return false;
        }
    }


    // File Upload Services 
    async uploadFile(file, userId){
        try {
            const writeRole = userId ? Role.user(userId) : Role.users();
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [
                    Permission.read(Role.any()),
                    Permission.write(writeRole)
                ]
            )
        } catch (error) {
            console.log("Application Service :: UploadFile: error", error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true;
        } catch (error) {
            console.log("Application Service :: DeleeteFile: error", error);
            return false;
        }
    }

    async ensureFileReadable(fileID, userId){
        try {
            const writeRole = userId ? Role.user(userId) : Role.users();
            await this.bucket.updateFile(
                conf.appwriteBucketId,
                fileID,
                undefined,
                [
                    Permission.read(Role.any()),
                    Permission.write(writeRole)
                ]
            );
            return true;
        } catch (error) {
            // ignore if we lack permission to update; preview may still work for public files
            return false;
        }
    }

    async fileExists(fileID) {
        if (!fileID) return false;
        try {
            await this.bucket.getFile(conf.appwriteBucketId, fileID);
            return true;
        } catch (error) {
            console.log('File does not exist:', fileID, error);
            return false;
        }
    }

    filePreview(fileID){
        if (!fileID) {
            console.log('filePreview: No fileID provided');
            return '';
        }
        try {
            // Construct the URL manually to match the working format
            const baseUrl = conf.appwriteUrl;
            const bucketId = conf.appwriteBucketId;
            const projectId = conf.appwriteProjectId;
            
            const url = `${baseUrl}/storage/buckets/${bucketId}/files/${fileID}/view?project=${projectId}&mode=admin`;
            
            console.log('filePreview: fileID:', fileID, 'constructed URL:', url);
            return url;
        } catch (error) {
            console.log('filePreview error:', error);
            return '';
        }
    }
}

const appService = new Services;

export default appService;