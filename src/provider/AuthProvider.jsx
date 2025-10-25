import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {
  const authData = {
    Name : 'shanto'
  };
  return (
    <AuthContext.Provider value={authData}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;
