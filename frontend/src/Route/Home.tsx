/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import MultiStepForm from '../Component/MultiStepForm'
import { useSelector } from 'react-redux'
import ErrorModal from '../Component/ErrorModal'

const Home = () => {
    const [showform, setShowform] = useState<boolean>(false)
    const state:any = useSelector<any>((state)=>state.reducer);
    

    useEffect(()=>{
        
    },[state.Error])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {showform ? <MultiStepForm setShowform={setShowform} /> : <button className='text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out' onClick={() => setShowform(true)}>Fill Form</button>}
            {state.Error && <ErrorModal/>}
        </div>
    )
}

export default Home
