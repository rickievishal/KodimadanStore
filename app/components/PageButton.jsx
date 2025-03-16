import React from 'react'

const PageButton = ({children,className}) => {
  return (
        <button className={`${className} rounded-r-full rounded-l-full px-4 border-[1px]`}>{children}</button>
  )
}

export default PageButton