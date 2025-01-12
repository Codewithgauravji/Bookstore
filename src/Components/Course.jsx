import React from 'react'
import Cards from './Cards'
import list from '../../public/List.json'
import { Link } from 'react-router-dom'

function Course() {
    console.log(list)
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-16 items-center justify-center text-center pt-12'>
                    <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'> Here!</span></h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis eveniet dolor adipisci fuga maxime consequatur quae praesentium accusantium doloribus, officia tempora ea deleniti iure deserunt magnam natus, repellat omnis ipsa, commodi cupiditate. Reprehenderit, suscipit?</p>
                    <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6'>Back</button></Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                   {
                        list.map((item)=>(
                            <Cards key={item.it} item={item}/>
                        ))
                   }
                </div>
            </div>
        </>
    )
}

export default Course