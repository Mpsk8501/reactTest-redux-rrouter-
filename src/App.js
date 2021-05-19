import { Switch, Route } from 'react-router-dom'

import MainPage from './pages'
import UserPage from './pages/userPage'
import AlbumsPage from './pages/albumsPage'
import Games from './pages/games'
import MainLayout from './components/mainLayout'

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/userPage" component={UserPage} />
        <Route path="/albumsPage" component={AlbumsPage} />
        <Route path="/games" component={Games} />
      </Switch>
    </MainLayout>
  )
}

export default App
