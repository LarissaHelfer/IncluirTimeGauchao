import './Jogador.css'

const Jogador = ({ nome, imagem, posicao, corDeFundo}) => {
    return (
    <div className='jogador'>
        <div className='cabecalho' style={{background: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{posicao}</h5>
        </div>
    </div>
    )
}

export default Jogador