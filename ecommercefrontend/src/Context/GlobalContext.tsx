import React, { useState, useEffect, createContext,ReactNode  } from "react";
import axios from "axios";
import {Shoe} from "../Types/ShoeType"
import { User } from "../Types/UserType";
interface ShoesContextProps {
  children: ReactNode;
}



export const shoesContext = createContext<[Shoe[], React.Dispatch<React.SetStateAction<Shoe[]>>]>([[], () => {}]);
export const userContext = createContext<[User, React.Dispatch<React.SetStateAction<User>>]>([{} as User, () => {}]);
export const DataProvider: React.FC<ShoesContextProps> = (props) => {
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [user, setUser] = useState<User>({
    // Define the shape of your Shoe object
    userID: 0,
    userName: "",
    email: "",
    passwordhash: "",
    
  });

  useEffect(() => {
    // Fetch shoes data when the component mounts
    axios
      .get("https://localhost:7212/api/Shoes")
      .then((response) => {
        setShoes(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching shoes data:", error);
      });
  }, []);
  return (
    <shoesContext.Provider value={[shoes, setShoes]}>
      <userContext.Provider value={[user, setUser]}>
      {props.children}
      </userContext.Provider>
    </shoesContext.Provider>
  );
};
