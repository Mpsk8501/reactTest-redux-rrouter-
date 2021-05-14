import { Switch, Route } from 'react-router-dom'

import MainPage from './pages'
import UserPage from './pages/userPage'
import AlbumsPage from './pages/albumsPage'
import MainLayout from './hoc/mainLayout'

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/userPage" component={UserPage} />
        <Route path="/albumsPage" component={AlbumsPage} />
      </Switch>
    </MainLayout>
  )
}

export default App
