import { produtos } from './data.js'
import logo from './assets/logo.png'
import banner from './assets/banner.png'

// Só a tela de produtos por enquanto.
// Busca, menu, ícone de usuário e botões ainda não fazem nada.
export default function App() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Salvação EPIs" />
        <div className="busca">
          <input placeholder="pesquise aqui" />
        </div>
        <div className="usuario">login
        </div>
      </header>

      <nav className="menu">
        <span>Proteção</span>
        <span>Ocular</span>
        <span>Capacetes</span>
        <span>Altura</span>
      </nav>

      <section className="conteudo">
        <img className="banner" src={banner} alt="Proteja suas mãos no trabalho" />

        <div className="produtos">
          {produtos.map((p) => (
            <div className="produto" key={p.id}>
              <img src={p.img} alt={p.nome} />
              <p>{p.nome}</p>
              <button>Preço sob consulta</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
