import './App.css'
import {TwitterFollowCard} from './components/TwitterFollowCard'

function App() {
  const format = (userName) => `@${userName}`
  

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={format} isFollowing={true} name='Cristian' userName='cristian' />
      <TwitterFollowCard formatUserName={format} isFollowing={true} name='Cristian' userName='cristian' />
      <TwitterFollowCard formatUserName={format} isFollowing={true} name='Cristian' userName='cristian' />


    </section>
  )
}

export default App
