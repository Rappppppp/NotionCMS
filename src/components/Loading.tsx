"use client"

import React from 'react'
import { Hearts } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='h-screen bg-primary-darker fixed inset-0 flex items-center justify-center z-10'>
            <Hearts
                height="150"
                width="150"
                color="#FFEA8A"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading
