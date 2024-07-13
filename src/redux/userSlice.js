import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import  {getAuth, signInWithEmailAndPassword} from "firebase/auth"


export const login = createAsyncThunk("user/login", async({email, password})=>
{
    console.log(" 5.line username", email);
    console.log("6.line password", password);
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        const user = userCredential.user
        const token = user.stsTokenManager.accessToken
// console.log("User", user);
        const userData = {
            token,
            user:user
        }
        return userData

    } catch (error) {
        console.log("userSlice 21.line", error);
        throw error
    }
})

const initialState = {
    // login içinde kullandığımız için burada artık ihtiyacımız yk
    // email: null,
    // password: null,
    isLoading: false,
    isAuth:false,
    // yeni tanımlamalar yaptık
    user:null,
    error:null
    // burası artık backend ten alacağız.
    // users:{
    //     email:"test@test.com",
    //     password:"123456"
    // }
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            const toLowerCase = action.payload.toLowerCase()
            state.email = toLowerCase
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        // buna artık ihtiyacımız yok şimdilik
        // setLogin:(state)=>{
        //     if ((state.email===state.users.email)
        //     &&(state.password === state.users.password)) {
        //         console.log(true);
        //         state.isAuth =true
        //     }else{
        //         console.log(false);
        //     }
        // }
    },
    //burası firebase ile ilgili verilerin bekleme,başarılı ve hata durumunu
    //kontrol etme yeri
    extraReducers :(builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.isLoading = true;
            state.isAuth= false;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth=true,
            state.error= null
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false
            state.isAuth = false;
            state.error = action = action.error.message
        })
        
    }
})

export const { setEmail, setPassword, setIsLoading } = UserSlice.actions
export default UserSlice.reducer