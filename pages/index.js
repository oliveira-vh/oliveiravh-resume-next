import React from 'react';
import getUser from '../utils/getUser';

const Index = ({filteredRepos}) => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col'>
                <img className='my-4 w-32 h-32 rounded-full mx-auto' src='/foto.jpg'/>
                <h1 className='text-4xl mb-3 mx-auto'>Olá, eu sou o Victor!</h1>
                <h2 className='text-3xl mb-3 font-bold mx-auto'>Desenvolvedor Full-Stack</h2>
                <div className='mb-3 mx-auto flex'>
                    <a href='https://github.com/oliveira-vh' target="blank"><img className='my-4 w-14 h-14 mx-auto' src='/github.png'/></a>
                    <a href='https://www.linkedin.com/in/oliveira-vh/' target="blank"><img className='my-4 w-14 h-14 mx-auto' src='/linkedin.png'/></a>
                </div>
            </div>

            <div className='bg-white rounded-lg shadow-lg py-4 px-4 my-4 mx-8 md:mx-0 md:px-16'>
                <p className='text-lg'>
                    Software Engineer working from design to delivery scalable software products for almost 20 years. I´m able to work in all layers of an application (aka Fullstack Developer) and I´m also have a nice perspective about marketing, product, UX and vision of it.
                </p>
            </div>

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

            <div>
                <h3 className='text-2xl font-bold text-center uppercase mt-10 mb-5'>Conhecimentos</h3>
            </div>

            <div>
                <h3 className='text-2xl font-bold text-center uppercase mt-10 mb-5'>Portfolio</h3>
            </div>
            
            <div className=''>
                <h3 className='text-2xl font-bold text-center uppercase'>Projetos no Github</h3>
                <div className='md:grid md:grid-cols-3 md:gap-1 md:my-4'>
                    {filteredRepos.map(repo => 
                        <div key={repo.id} className='rounded bg-gray-200 m-3 p-4 hover:shadow-xl'>
                            <a href={`https://github.com/${repo.name}`} target='blank'><h3 className='font-bold'>{repo.name}</h3></a>
                            <p>Linguagem: {repo.language}</p>
                            <p>Descrição: {repo.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps(context){
    const { filteredRepos } = await getUser('oliveira-vh')
    return {
        props: {
            filteredRepos
        }
    }
}
export default Index