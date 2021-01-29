import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col'>
            <img className='my-4 w-32 h-32 rounded-full mx-auto' src='/foto.jpg'/>
            <h1 className='text-4xl mb-3 mx-auto'>Olá, eu sou o Victor!</h1>
            <h2 className='text-3xl mb-3 font-bold mx-auto'>Desenvolvedor Full-Stack</h2>
            <div className='mb-3 mx-auto flex'>
                <a href='https://github.com/oliveira-vh' target="blank"><img className='my-4 w-14 h-14 mx-auto' src='/github.png'/></a>
                <a href='https://www.linkedin.com/in/oliveira-vh/' target="blank"><img className='my-4 w-14 h-14 mx-auto' src='/linkedin.png'/></a>
            </div>
        </div>
    )
}

export default Hero
