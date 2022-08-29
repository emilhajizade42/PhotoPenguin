import React, { useContext } from 'react'
import { MyContext } from '../../context'
import './index.css'
function Main(props) {
  const { mobSidebarVisible } = useContext(MyContext)
  return (
    <section>
      <div className="mainBox">
        {props.children}
        <div className={`${mobSidebarVisible ? 'mainBlocker' : null}`}></div>
      </div>
    </section>
  )
}

export default Main
