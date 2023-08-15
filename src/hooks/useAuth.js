import { useState,useContext, createContext} from "react";
import Cookie from "js-cookie";
import axios from "axios";
import endPoints from "@services/api"

export const AuthContext = createContext();

export const ProviderAuth = ({ children }) => {
  const auth = useProviderAuth();
  return(
    <AuthContext.Provider value={{auth}}>
      {children}
    </AuthContext.Provider>
  ) 
}

export const useAuth = () => {
  return useContext(AuthContext);
}

function useProviderAuth () {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    
    const options = {
      headers: {
        accept: '*/*', 
        'Content-Type': 'application/json',
      }
    }

    try {
      const { data:access_token } = await axios.post(
        endPoints.auth.login, 
        {
          email,
          password
        },
        options
      ) 
      if(access_token){
        Cookie.set('token', access_token.access_token, { expires: 5 })
      }
    } catch (error) {
      console.log(error)
      alert("Email and/or password is incorrect")
    }
    
  }
  return { user, signIn }
}