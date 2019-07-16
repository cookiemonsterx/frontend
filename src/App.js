import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ArtistView from './views/ArtistView'
import AlbumView from './views/AlbumView'
// import AlbumView from './views/AlbumView'
// import SongView from './views/SongView'
import { ApolloProvider } from 'react-apollo'
  import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import NavBar from './components/NavBar'
import bg from './components/bg.jpg';
import logo2 from './logo2.png';
import { width } from '@material-ui/system';
import { relative } from 'path';




const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8000/graphql/'
})

const client = new ApolloClient({
  cache:cache,
  link:link
})

const bgStyle = {  
   backgroundImage: `url(${bg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  maxHeight: '100vh'
 
};


  
//   const networkInterface = createLiteral({
//     uri: 'http://localhost:8000/graphql',
//     batchInterval: 10,
//     opts: {
//       credentials: 'same-origin',
//     },
//   })
  
 /* const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',

  })*/
  



class App extends Component {
  render() {
    return (
     
        <ApolloProvider client={client}>
      <Router>
        {/* <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/albums/">Albums</Link></li>
            <li><Link to="/songs/">Songs</Link></li>
            
          </ul> */}
          
          <NavBar />
          {/* <img src={bg} alt="bg" /> */}
          
          <div style={bgStyle}>
          <Route exact path="/" component={ArtistView} />
          
          </div>
          
         <Route exact path="/albums/:id/" component={AlbumView} />
        
          {/* <Route exact path="/songs/" component={SongView} />  */}
        
        {/* </div> */}
        <hr></hr>
        <div style={{marginTop: '10px'}}>
<p style={{margin: '100px 50px 0px 200px', fontFamily:'BebasNeue Bold', color:'black', fontSize:'50px', position: 'absolute', textAlign: 'center'}}>GET PRODUCIN' WITH MUSICDB</p>
      <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <p style={{margin: '100px 50px 0px 200px', fontFamily:'BebasNeue Bold', color:'black', fontSize:'25px', position: 'absolute', textAlign: 'center'}}>PICK YOUR PREFERRED INSTRUMENT</p>
     <br></br>
     <br></br>
     <p style={{margin: '100px 50px 0px 200px', fontFamily:'BebasNeue Bold', color:'red', fontSize:'15px', position: 'absolute', textAlign: 'center'}}>PICK THE INSTRUMENTS YOU NEED TO COMPOSE YOUR PIECE</p>
     
</div>
<br></br>
 <br></br>
  <br></br>
  <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

     
<div style={{backgroundColor:'black', width: "100%"}}>
<footer className="footer" style={{width: "100%", display: 'flex', alignItems: 'center'}}>





  <div style={{width: "30%"}}>
  <img src={logo2} style={{margin: '100px 0px 75px 200px'}} alt="Logo" width="33%" />

  </div>
<div style={{width: "30%"}}>

<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center'}}> PROFILE </p>
<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center'}}> SIGN IN </p>
<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center'}}> MUSIC </p>

</div>



</footer>

<div style={{display: 'flex'}}>

<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center', marginLeft: '50px', marginRight: '50px'}}> LEGAL </p>
<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center', marginRight: '50px'}}> PRIVACY CENTRE </p>
<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center', marginRight: '50px'}}> PRIVACY POLICY </p>
<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center', marginRight: '50px'}}> COOKIES </p>
<p style={{  fontFamily:'BebasNeue Bold', color:'white', fontSize:'15px',  textalign: 'center', marginRight: '50px'}}> ABOUT ADS </p>
  
</div>
</div>

      </Router>
      </ApolloProvider>
   
    )
  }
}

export default App