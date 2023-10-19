import React from 'react'
import Header from '../../componets/Header'

const Home = () => {
  return (

    <>
        <div className='h-screen flex items-center'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 w-10/12 mx-auto'>
                    <h1 className='text-6xl font-bold my-5'>
                        "Technology made simple."
                    </h1>
                    <p className='text-dark text-xl font-medium'>Making technology simple and easy to adapt and implement. We provide Reliable custom solutions for -</p>
                </div>
                <div className='col-span-1'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Home