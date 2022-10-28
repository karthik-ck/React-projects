import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const Ratings = ({rating,style,onClick}) => {
  return (
    <div>
      {[...Array(5)].map((_,index)=>(
        <span key={index} onClick={()=>onClick(index)} style={style}>
            {rating >index ?(
               <AiFillStar fontSize="20px" />
            ):(
              <AiOutlineStar fontSize="20px" />
            )}
        </span>
      ))}
    </div>
  )
}

export default Ratings
