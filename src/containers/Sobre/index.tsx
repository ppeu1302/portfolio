import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae natus
      eius soluta! Voluptate dolor esse atque at id blanditiis quis, quidem
      quasi sit itaque nulla adipisci maiores, facere cupiditate enim!
    </Paragrafo>
    <GithubSecao>
      <img src="https://streak-stats.demolab.com?user=ppeu1302&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
