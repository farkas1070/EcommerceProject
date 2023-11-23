import React,{useState} from 'react';
import Navbar from '../Home/Components/Navbar';
import CartSection from "./Components/CartSection"
export interface IAppProps {
}

export default function App (props: IAppProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen}></Navbar>
        <CartSection></CartSection>
    </div>
  );
}
