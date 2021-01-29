import React from 'react';
import Description from '../components/Description';
import Education from '../components/Education';
import Hero from '../components/Hero';
//import Portfolio from '../components/Portfolio';
import Repos from '../components/Repos';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import PageHead from '../components/PageHead';

const Index = ({filteredRepos}) => {
    return (
        <div className='container mx-auto'>
            <PageHead/>
            <Hero/>
            <Description />
            <Education/>
            <Skills/>
            {/*
            <Portfolio/>
            */}
            <Repos filteredRepos={filteredRepos}/>
            <Footer/>
        </div>
    )
}
export async function getServerSideProps(context){
    const request = await fetch(process.env.API_URL + 'api/getUser');
    const { filteredRepos } = await request.json();
    return {
        props: {
            filteredRepos
        }
    }
}
export default Index