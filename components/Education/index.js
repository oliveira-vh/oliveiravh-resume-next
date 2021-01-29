import React from 'react'

const Education = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold text-center uppercase mt-10 mb-5'>Formação</h3>
            <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
                <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                    <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Bacharelado</h4>
                    <p className='text-2xl uppercase'>Engenharia da Computação<br />
                    <span className='text-lg normal-case font-bold'>UFPA</span></p>
                </div>
                <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                    <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Code Bootcamp</h4>
                    <p className='text-2xl uppercase'>Fullstack Master<br />
                    <span className='text-lg normal-case font-bold'>Devpleno</span></p>
                </div>
            </div>
        </div>
    )
}

export default Education
