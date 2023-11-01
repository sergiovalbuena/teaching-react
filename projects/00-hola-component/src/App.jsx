import { useState } from 'react'
import './App.css'
import {TwitterFollowCard} from './components/TwitterFollowCard'

function App() {
  const format = (userName) => `@${userName}`
  const midudev = {isFollowing: false, name: 'midudev', userName: 'midudev', formatUserName: format}
  const [name, setName] = useState('Cristian')

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={format} isFollowing={true} name='Cristian' userName={name} />
      <TwitterFollowCard formatUserName={format} isFollowing={false} name='banano' userName='banano' />
      <TwitterFollowCard formatUserName={format} isFollowing={true} name='bananin' userName='banianitaa' />
      <TwitterFollowCard {...midudev}/>

<button onClick={() => setName('pedromichel')}>
  Cambio nombre
</button>

    </section>
  )
}

export default App
