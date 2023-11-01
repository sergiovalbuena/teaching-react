export function TwitterFollowCard({ formatUserName, userName, name, isFollowing}) {

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'



  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de '
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          {/* <span className='tw-followCard-infoUserName'>@{userName}</span> */}
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClass}>
          
          {text}
        </button>
      </aside>
    </article>
  )
}
