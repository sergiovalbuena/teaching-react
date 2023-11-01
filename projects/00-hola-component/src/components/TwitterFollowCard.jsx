export function TwitterFollowCard({ formatUserName, userName, name, isFollowing}) {
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
        <button className="tw-followCard-button">
          <span className='tw-followCard-text'>Seguir</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
