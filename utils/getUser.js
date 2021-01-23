const getUser = async(username) => {
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await resRepos.json();

    const extractData = repo => ({
        id: repo.id,
        name: repo.full_name,
        language: repo.language,
        description: repo.description
    })
    const starsFilter = repo => repo.stargazers_count > 0

    const filteredRepos = repos
                            .filter(starsFilter)
                            .map(extractData);

    return {
        filteredRepos
    }
}

export default getUser