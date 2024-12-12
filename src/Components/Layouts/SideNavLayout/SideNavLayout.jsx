import React  from 'react'
import AppHeader from '../../AppHeader/AppHeader'
import SideNavBar from '../../SideNavBar/SideNavBar'



const SideNavLayout = ({children}) => {
    //console.log(children)
  return (
    <div className="h-screen w-screen">
        <div className='h-[80px]'>
          <AppHeader/>
        </div>

        <div className='flex bg-white h-[calc(100%-80px)] overflow-auto'>
          <div className='h-full w-[200px]'>
            <SideNavBar/>
          </div>

          <div className='flex-1 text-black'>
         {children}
            </div>
        </div>
       </div>
  )
}

export default SideNavLayout
