import React from 'react'

export const Header = ({nwArray, asMethod}) => {
    return (
        <>
            <header>
                <nav className='navbar bg-dark'>
                    <div className="d-flex container">
                        <button type='button' onClick={()=>{nwArray()}} className="btn btn-outline-success" id='NewArray'>
                            New Array
                        </button>
                        <select className="btn bg-dark text-light nav-item dropdown" id='DropDown'>
                            <option value="Bubble">Bubble Sort</option>
                            <option value="Insertion">Insertion Sort</option>
                            <option value="Selection">Selection Sort</option>
                        </select>
                        <button type='button' id='start' onClick={()=>{asMethod()}} className='btn btn-danger'>
                            Start
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
