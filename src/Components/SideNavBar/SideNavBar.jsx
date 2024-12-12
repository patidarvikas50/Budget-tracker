import React, { } from 'react'

const navigation = [
    {
        label: "Income",
        path : 'income'
    },
    {
        label: "Expense",
        path :'expense'
    },
    {
        label: "P&L",
        path :'profit-and-loss'
    },
    {
        label: "User",
        path: "user"
    },
    // {
    //     label: "add-expense",
    //     path :'add-expense'
    // },
    

]

const SideNavBar = () => {
    // const [selected, setSelected] = useState("");
    const currentPath = window.location.pathname?.split("/")?.[1];
    return (
        <div className='h-full w-full py-8 bg-blue-300'>
            <ul>
                {navigation?.map((navItem, index) => {
                    const { label,path } = navItem;

                    const isActive = path === currentPath
                    // console.log(isActive, "isactiv")
                    return (
                        <li key={index}
                            className={`px-10 py-2 cursor-pointer  hover:bg-white font-semibold ${
                                isActive && " bg-black text-white transition-all duration-500 hover:text-black font-semibold"
                            }`}
                            onClick={() => window.location.replace(path)}
                        >
                            {label}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideNavBar

