import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar,Badge, Nav,Image, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container fluid>
          <LinkContainer to='/'>
              <Navbar.Brand><Image src={"/uploads/logo.jpeg"} width={60}  height={50} roundedCircle fluid/><strong style={{fontSize: 28}}>    Cryptic</strong></Navbar.Brand>
          </LinkContainer>
                   <Navbar.Brand href="/Q" >
               <Badge pill variant="primary">

                       <strong style={{fontSize: 16}}>Questions</strong>
            </Badge>
                   </Navbar.Brand>
                   <Navbar.Brand href="/AboutUs" >
               <Badge pill variant="primary">

                       <strong style={{fontSize: 16}}>About Us</strong>
            </Badge>
                   </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo ? (
                <NavDropdown style={{fontSize: 16}} title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer style={{fontSize: 16}} to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown style={{fontSize: 16}} title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/questionlist'>
                    <NavDropdown.Item>Questions</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
