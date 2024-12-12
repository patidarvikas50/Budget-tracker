import React from 'react'

const MOLTable = ({columns,rows}) => {
    
    return (
        <table className='w-full border-zinc-600'>
            <thead>
                <tr>
                    {columns?.map((column, index) => {
                        return (
                            <th
                                align='left'
                                key={index}
                                className='p-2 border border-slate-500'

                            >{column?.columnName}</th>
                        )
                    })}

                </tr>
            </thead>

            <tbody>
                {rows?.map((row, index) => {
                    return (
                        <tr key={index}>
                            {columns?.map((column, colIndex)=>{
                                const {fieldName,renderCell} = column
                                return (
                                    <td key={colIndex}
                                    className='p-1 border-[2px]'>

                                    {renderCell ? renderCell?.(row) : row?.[fieldName]}</td>

                                )
                            })}
                        </tr>
                    )
                })}


            </tbody>
        </table>
    )
}

export default MOLTable
