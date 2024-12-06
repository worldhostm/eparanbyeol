import { usePathname } from 'next/navigation';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface ConstantType{
    menuPath : string;
    setMenuPath:Dispatch<SetStateAction<string>>;
}

const ConstantContext = createContext<ConstantType | undefined>(undefined);

interface Props{
    children : ReactNode
}

export const ConstantProvider : React.FC<Props>=({children})=>{
  const path = usePathname();
  const [menuPath, setMenuPath] = useState(path);

  return (
    <ConstantContext.Provider value={{
      menuPath,setMenuPath
    }}>
      {children}
    </ConstantContext.Provider>
  )
}

export const useConstandContext=():ConstantType=>{
  const context = useContext(ConstantContext);
  if(context === undefined){
    throw new Error('ConstantContext undefined');
  }
  return context;
}
