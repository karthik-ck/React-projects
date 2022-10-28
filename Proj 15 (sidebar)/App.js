import React from 'react'
import './App.css'
import {AccountCircleRounded, AssignmentTurnedInRounded, AttachMoneyRounded, BarChartRounded, ColorLensRounded, DashboardRounded, SettingsRemoteRounded, TocRounded} from '@mui/icons-material';
import Item from './component/Item';
import {motion} from 'framer-motion'

function App() {
  return (
    <div className='App'>
      <div className='sidebarcontainer'>
         <div className='sidebar'>
          <motion.div
           whileHover={{
            scale:1.2,
            rotate:180,
            backgroundColor:"gray",
            border:"1px solid blue",
            transition:{
              delay:0.2,
              duration:0.4
            }
           }}
           className='menu_icon'>
              <TocRounded />
          </motion.div>
            <div className='profile'>
              <img src="https://avatarfiles.alphacoders.com/193/193241.jpg" alt='...' />
            </div>
            <div className='groups'>
              <div className='group'>
                <h5 className='text-bold'>ANALYTICS</h5>
                <Item icon={<DashboardRounded />}
                name="Dashboard"/>
                 <Item icon={<BarChartRounded />}
                name="Performance"/>
              </div>
              <div className='group'>
                <h5>CONTENTS</h5>
                <Item icon={<AttachMoneyRounded />}
                name="Sales"/>
                 <Item icon={<AssignmentTurnedInRounded />}
                name="Checklist"/>
                <Item icon={<AccountCircleRounded />}
                name="Customers"/>
              </div>
              <div className='group'>
                <h5>CUSTOMIZATION</h5>
                <Item icon={<SettingsRemoteRounded />}
                name="Segments"/>
                 <Item icon={<ColorLensRounded />}
                name="themes"/>
              </div>
            </div>
         </div>
      </div>

      <div className='bodycontainer'>

      </div>
    </div>
  )
}

export default App
