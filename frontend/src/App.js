import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import IndexScreen from './screens/IndexScreen'
import QuestionScreen from './screens/QuestionScreen'
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen'
import AboutUs from './screens/AboutUs'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import QuestionListScreen from './screens/QuestionListScreen'
import QuestionEditScreen from './screens/QuestionEditScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container fluid>
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/question/:id' component={QuestionScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/questionlist'
            component={QuestionListScreen}
            exact
          />
          <Route
            path='/admin/questionlist/:pageNumber'
            component={QuestionListScreen}
            exact
          />
          <Route path='/admin/question/:id/edit' component={QuestionEditScreen} />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/Q' component={HomeScreen} exact />
          <Route path='/AboutUs' component={AboutUs} exact />
          <Route path='/' component={IndexScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
