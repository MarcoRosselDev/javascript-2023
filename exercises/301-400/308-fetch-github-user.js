// ejercicio 308: obtener la informacion de usuarios de GitHub usando la API Ferch.

const url = 'https://api.github.com/users/MarcoRosselDev'

fetch(url)
.then((respuesta) => respuesta.json())
.then((data) => {
    console.log(data);
}).catch((error)=>{
    console.error(error);
})

/* respuesta -->
{
    login: 'MarcoRosselDev',
    id: 97572795,
    node_id: 'U_kgDOBdDXuw',
    avatar_url: 'https://avatars.githubusercontent.com/u/97572795?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/MarcoRosselDev',
    html_url: 'https://github.com/MarcoRosselDev',
    followers_url: 'https://api.github.com/users/MarcoRosselDev/followers',
    following_url: 'https://api.github.com/users/MarcoRosselDev/following{/other_user}',
    gists_url: 'https://api.github.com/users/MarcoRosselDev/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/MarcoRosselDev/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/MarcoRosselDev/subscriptions',
    organizations_url: 'https://api.github.com/users/MarcoRosselDev/orgs',
    repos_url: 'https://api.github.com/users/MarcoRosselDev/repos',
    events_url: 'https://api.github.com/users/MarcoRosselDev/events{/privacy}',
    received_events_url: 'https://api.github.com/users/MarcoRosselDev/received_events',
    type: 'User',
    site_admin: false,
    name: 'marco rossel',
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 75,
    public_gists: 0,
    followers: 0,
    following: 1,
    created_at: '2022-01-12T02:10:29Z',
    updated_at: '2023-02-25T20:15:28Z'
}

*/