import React from 'react'

const Repos = ({filteredRepos}) => {
    return (
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
    )
}

export default Repos
