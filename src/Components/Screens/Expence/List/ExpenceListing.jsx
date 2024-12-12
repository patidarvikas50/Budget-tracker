
import SideNavLayout from '../../../Layouts/SideNavLayout/SideNavLayout'
import MOLTable from '../../../molecules/MOLTable/MOLTable'
import { setCount } from '../../../../slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux'



const ExpenceListing = () => {

  const columns = [
    {
      columnName: "Date",
      fieldName: "date"
    },
    {
      columnName: "Amount",
      fieldName: "amount",
      renderCell: (row) => {
        return <div> &#8377; {row?.amount}</div>
      }
    },
    {
      columnName: "Category",
      fieldName: "category"
    }
  ]

  const rows = [
    {
      date: "20 Feb 2020",
      amount: 500,
      category: "tax"
    },
    {
      date: "10 jan 2020",
      amount: 500,
      category: "travel"
    },
    {
      date: "30 march 2020",
      amount: 500,
      category: " shoping"
    },
  ]
  
  const {count} = useSelector((store)=>{
    return store.counter;
  });

  const dispatch = useDispatch()
  console.log(count)
 
  return (
    <SideNavLayout>
      <div className='flex items-center gap-2 p-4'>
        <div>{count}</div>
        <button onClick={()=> dispatch(setCount(1))} className='p-2 text-white bg-sky-500'>+</button>
      </div>
      <div className='h-full p-4'>
        {/* page Heading */}
        <div className='flex p-2 justify-between items-center'>
          <div className='font-semibold text-slate-600 text-lg'>Expense</div>

          <button
            className=' px-4 py-[1] bg-blue-400 font-semibold text-white rounded-md hover:bg-blue-600'
            onClick={()=>{window.location.replace("add-expense")}}
          >Add</button>
        </div>
      

   
        <div > <MOLTable columns={columns} rows={rows} /></div>

      </div>
    </SideNavLayout>
  )
}

export default ExpenceListing
