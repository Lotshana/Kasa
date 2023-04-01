import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <main className="Error404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={'/'} className="ErrortoHome">
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </main>
    )
}

export default Error404