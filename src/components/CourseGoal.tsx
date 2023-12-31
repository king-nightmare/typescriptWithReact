
import { PropsWithChildren } from "react";

type CourseGoalProp = PropsWithChildren<{title:string}>
export default function CourseGoal({title,children}:CourseGoalProp){
return(
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>delete</button>
    </article>
) 
} 

/* const CourseGoal:React.FC<CourseGoalProp> = ({title,children})=>{
    return(
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>delete</button>
    </article>
) 
}

export default CourseGoal; */
