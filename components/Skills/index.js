import React from 'react'

const Skills = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold text-center uppercase mt-10 mb-5'>Habilidades</h3>
            <div className='mx-6 md:mx-0 md:grid md:grid-cols-4 leading-none bg-white rounded-lg shadow-lg'>
                <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                    <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Linguagens</h4>
                    <p className='text-2xl uppercase'>JavaScript</p>
                    <p className='text-2xl uppercase'>Typescript</p>
                    <p className='text-2xl uppercase'>PHP</p>
                    <p className='text-2xl uppercase'>C</p>
                </div>
                <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                    <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Front-End</h4>
                    <p className='text-2xl uppercase'>HTML/CSS</p>
                    <p className='text-2xl uppercase'>React</p>
                    <p className='text-2xl uppercase'>NextJS</p>
                    <p className='text-2xl uppercase'>VueJS</p>
                    <p className='text-2xl uppercase'>AngularJS 1.8</p>
                </div>
                <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Back-End</h4>
                    <p className='text-2xl uppercase'>Node.JS</p>
                    <p className='text-2xl uppercase'>Express</p>
                    <p className='text-2xl uppercase'>NestJS</p>
                    <p className='text-2xl uppercase'>SQL</p>
                    <p className='text-2xl uppercase'>NoSQL</p>
                </div>
                <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Outros</h4>
                    <p className='text-2xl uppercase'>Jest</p>
                    <p className='text-2xl uppercase'>Git</p>
                    <p className='text-2xl uppercase'>Linux</p>
                    <p className='text-2xl uppercase'>Wordpress</p>
                    <p className='text-2xl uppercase'>Etc...</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
