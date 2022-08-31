import f4life from './assets/images/f4life.jpg';
import emprestimo from './assets/images/JWT.png';
import gitHubNav from './assets/images/githubnav.jpg';
import portfolio from './assets/images/portfolio.jpg';

export const data = {
    projetos: [
        {
            titulo: 'GitHub Navigator',
            imagem: gitHubNav,
            descricao: 'Digite um nome de usuário do GitHub e navegue pelos seus repositórios, seguidores e pessoas seguidas. Projeto criado em REACT com design responsivo.',
            linkDemo: 'https://githubnav.netlify.app/',
            linkGitHub: 'https://github.com/wagnerkaba/desafio-github'
        },
        {
            titulo: 'F4Life Moradias Universitárias',
            imagem: f4life,
            descricao: 'Projeto criado para uma empresa fictícia de moradias universitárias. Foi utilizado HTML, CSS e Javascript na criação. Possui design responsivo.',
            linkDemo: 'https://f4life-moradias.netlify.app/',
            linkGitHub: 'https://github.com/wagnerkaba/desafio-dev'
        },
        {
            titulo: 'Empréstimo API',
            imagem: emprestimo,
            descricao: 'REST API para sistema de análise de crédito e cadastro de pessoas com autenticação por meio de tokens JWT. Projeto criado em JAVA e Spring Boot.',
            linkDemo: 'https://documenter.getpostman.com/view/19070115/UVXgKwqz',
            linkGitHub: 'https://github.com/wagnerkaba/credito_jwt'
        },
        {
            titulo: 'Portfólio',
            imagem: portfolio,
            descricao: 'Este portfólio foi criado em REACT e não poderia deixar de constar nesta lista como um dos meus projetos pessoais. Possui design responsivo.',
            linkDemo: '',
            linkGitHub: 'https://github.com/wagnerkaba/portfolio-react'
        },
    ]

}