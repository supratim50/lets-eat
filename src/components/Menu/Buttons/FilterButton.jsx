import React from 'react'

const FilterButton = ({children, onClick, newActivation}) => {
  return (
    <button 
        onClick={(e) => onClick(e.target.innerText)} 
        className={`m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ${newActivation === children && 'bg-orange-600 text-white'} `}>
            {children}
        </button>
  )
}

export default FilterButton