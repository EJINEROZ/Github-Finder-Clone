import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <div>
     <UserSearch />
      <UserResults />
        {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
    </div>
  )
}

export default Home
