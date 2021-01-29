import React from 'react';
import Description from '../components/Description';
import Education from '../components/Education';
import Hero from '../components/Hero';
import getUser from '../utils/getUser';

const Index = ({filteredRepos}) => {
    return (
        <div className='container mx-auto'>
            <Hero/>
            <Description />

            <Education/>

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