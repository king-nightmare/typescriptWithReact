import { ReactNode } from "react";


type HeaderProps={
    image:{
        src:string,
        alt:string
    },
    children:ReactNode
}


const Header = ({image,children}:HeaderProps)=>{
    return(
        <div>
            <img src={image.src} alt={image.alt}></img>
            {children}
        </div>
    )
}
export default Header;


/* type CourseimageProp = PropsWithChildren<{image:string,alt:string}>

const Header = ({image,alt,children}:CourseimageProp)=>{
    return(
        <div>
            <img src={image} alt={alt}></img>
            {children}
        </div>
    )
}
export default Header; */