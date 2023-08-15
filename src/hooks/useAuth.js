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

    const { data:access_token } = await axios.post(
      endPoints.auth.login, 
      {
        email,
        password
      },
      options
    ) 

    console.log(access_token)
  }
  return { user, signIn };
}