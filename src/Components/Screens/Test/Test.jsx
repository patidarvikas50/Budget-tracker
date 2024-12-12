import React from 'react'
import SideNavLayout from '../../Layouts/SideNavLayout/SideNavLayout'
import ATMChip from '../../atoms/ATMChip/ATMChip'
import { IconChartBar } from '@tabler/icons-react'


const Test = () => {
  return (
   <SideNavLayout>
     <div>
      <ATMChip
      label="Progress"
      icon={<IconChartBar size ={20}/>}
      onClick={(e)=> console.log(e, "Event")}
      />


      </div>
   </SideNavLayout>
  )
}

export default Test
