import { useState} from 'react';
import Banner from './Componentes/Banner/Banner';
import Form from './Componentes/Form';
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: 'Avenida',
      corPrimaria: '#00FF7F',
      corSecundaria: '#90EE90',
    },
    {
      nome: 'Brasil de Pelotas',
      corPrimaria: '#8B0000',
      corSecundaria: '#FFE4C4',
    },
    {
      nome: 'Caxias',
      corPrimaria: '#800000',
      corSecundaria: '#FFDAB9',
    },
    {
      nome: 'Grêmio',
      corPrimaria: '#0000FF',
      corSecundaria: '#F0F8FF',
    },
    {
      nome: 'Guarany de Bagé',
      corPrimaria: '#B22222',
      corSecundaria: '#FFDAB9',
    },
    {
      nome: 'Juventude',
      corPrimaria: '#32CD32',
      corSecundaria: '#FAFAD2',
    },
    {
      nome: 'Internacional',
      corPrimaria: '#FF0000',
      corSecundaria: '#FFDAB9',
    },
    {
      nome: 'Novo Hamburgo',
      corPrimaria: '#00BFFF',
      corSecundaria: '#E0FFFF',
    },
    {
      nome: 'Santa Cruz',
      corPrimaria: '#000000',
      corSecundaria: '#D3D3D3',
    },
    {
      nome: 'São José-RS',
      corPrimaria: '#000080',
      corSecundaria: '#B0E0E6',
    },
    {
      nome: 'São Luiz',
      corPrimaria: '#FF0000',
      corSecundaria: '#FDF5E6',
    },
    {
      nome: 'Ypiranga-RS',
      corPrimaria: '#FFFF00',
      corSecundaria: '#FFFFE0',
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;
