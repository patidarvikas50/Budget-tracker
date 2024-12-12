import React from 'react'

const ATMTextField = ({name, type, onChange, placeholder,label}) => {
    return (
        <div className='flex flex-col'>
            <label>{label}</label>
            <input
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className='border outline-sky-300 border-slate-400 rounded'
            />
        </div>
    )
}

export default ATMTextField
