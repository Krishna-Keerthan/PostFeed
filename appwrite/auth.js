import conf from '../conf/conf.js'
import {ID , Client , Account} from 'appwrite'

export class AuthService{
    
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl) 
                .setProject(conf.appwriteProjectId);
                
        this.account = new Account(this.client);
    }

    async createAccount({email , password , name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email , password , name);
            if(userAccount){
                return await this.login({email , password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Application account creation Error ::" , error)
            throw error;
        }
    }

    async login({email , password}){
        try {
           return await this.account.createEmailPasswordSession(email , password);
        } catch (error) {
            console.log("Application Session Login Error ::" , error)
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            
            const currentUser = await this.account.get();
            console.log("Current User:", currentUser);
            return currentUser;
        } catch (error) {
            if (error.code === 401) {
                // User is not logged in
                return null;
            }
            throw error;
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            // Gracefully ignore guest/unauthorized errors
            if (error?.code === 401 || error?.message?.toLowerCase().includes('guests')) {
                return true;
            }
            console.log("Application Session Logout Error ::" , error)
            throw error;
        }
    }

    async isLoggedIn(){
        try {
            const user = await this.account.get();
            return !!user;
        } catch (error) {
            return false;
        }
    }
}

const authService = new AuthService();

export default authService;