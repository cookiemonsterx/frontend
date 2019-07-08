import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag';
import { graphql,Query } from 'react-apollo'
import hit from './hit.png';
import anathema1 from './anathema1.jpg';
import Grid from '@material-ui/core/Grid';
import pf from './pf.jpg';
import scorpions from './scorpions.jpg';

const query = gql`
{
  artists {
    id, name
  }
}
`
class ArtistView extends React.Component {
  render(){
    // let { data } = this.props
    // if (data.loading || !data.allArtists) {
    //   return <div>Loading ... </div>
    // }
    return (
<Query query={query}> 
{({ data, loading, error }) => {
  if (loading) return <div>loading ...</div>;
  if (error) return <p>ERROR</p>;


if (data !== undefined)

  return (
    <div style={{height:'100vh'}}>
      
    <p style={{ margin: '100px 50px 75px 200px', fontFamily:'BebasNeue Bold', color:'white', fontSize:'50px', position: 'absolute', float: 'right', textAlign: 'center'}}> AMP UP</p>
     <br></br>
     <br></br>
     <br></br>
     <p style={{margin: '100px 50px 75px 200px', fontFamily:'BebasNeue Bold', color:'white', fontSize:'50px', position: 'absolute', float: 'right', textAlign: 'center'}}> THOSE DBS</p>

     <br></br>
     <br></br>
     <br></br>
     <br></br>
     
     

     <p style={{margin: '100px 50px 75px 200px', fontFamily:'BebasNeue Bold', color:'white', fontSize:'25px', position: 'absolute', float: 'right', textAlign: 'center'}}> MAKE MUSIC ON THE GO</p>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

     

     <img src={hit} style={{margin: '100px 50px 75px 200px'}} alt="Logo" width="10%" />

     {/* <img src={anathema} style={{margin: '50px 50px 175px 1000px'}} alt="Logo" width="10%" /> */}

    <div style={{display: 'flex'}}>
    
  </div>


     <Grid container spacing={3} style={{position: 'absolute', left: '700px', top: '150px', width: '40%'}}>
        <Grid item xs={4}>
        {/* <img src={anathema1}  alt="Logo" width="90%" /> */}


        <div className="polaroid">
  <img src={anathema1} alt="5 Terre" width="100%"/>
  <div class="container">
  <p>ANATHEMA</p>
  </div>
</div>



        </Grid>
        <Grid item xs={4}>



        <div className="polaroid">
  <img src={pf} alt="5 Terre" width="100%"/>
  <div class="container">
  <p>PINK FLOYD</p>
  </div>
</div>

        
        </Grid>
        <Grid item xs={4}>
        <div className="polaroid">
  <img src={scorpions} alt="5 Terre" width="100%"/>
  <div class="container">
  <p>SCORPIONS</p>
  </div>
</div>
        </Grid>
        
      </Grid>

      {data.artists.map((item,i) => {
        console.log(item)
        return(
        <div key= {item.id}>
        {/* <p key= {item.id}>
        <Link to={'/albums/${item.id}'}>
          {item.artist}
          </Link>
          </p> */}
           {item.name}
           
          </div>)}
      )}
      </div>
  )}}
</Query>

      )
  }
}

ArtistView = graphql(query)(ArtistView)

export default ArtistView 

