import React, { useState } from 'react'
import './Sidebar.css'
import { SidebarData } from '../Data/Data';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function Sidebar() {
  const [selected,setSelected]=useState(0)

  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src="https://th.bing.com/th/id/R.bf7f4dd263e281eddb0603316699e5c7?rik=NfqwIV3%2bVQPgMw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_16719.png&ehk=v%2bDQ3FT1qvzytYSji37WZq1rfwY%2b5MYMRY7d8Zao36s%3d&risl=&pid=ImgRaw&r=0" alt='...' />
        <span>
            Sh<span>o</span>ps
        </span>
      </div>
      <div className='menu'>
        {SidebarData.map((item,index)=>{
          return(
            <div className={selected===index?'menu-item active':'menu-item'} key={index}
                  onClick={()=>setSelected(index)}
            >
                <item.icon />
                <span>{item.heading}</span>
            </div>
          )
          })}

          <div className='menu-item'>
            <ExitToAppOutlinedIcon />
          </div>
      </div>
    </div>
  )
}

export default Sidebar
