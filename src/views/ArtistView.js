import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag';
import { graphql,Query } from 'react-apollo'
import hit from './hit.png';
import anathema from './anathema.jpg';
import Grid from '@material-ui/core/Grid';
import pf from './pf.jpg';
import scorpions from './scorpions.jpg';
import sam from './sam.jpg';
import florence2 from './florence2.jpg';
import seafret from './seafret.jpg';

import AlbumView from './AlbumView';

const query = gql`
{
  artists {
    id, name

    album {
      id, title
    }
  }
}
`
// const query2 = gql`
// {
//   albums {
//      title, genre, year
//   }
// }
// `



class ArtistView extends React.Component {
  render(){
    // let { data } = this.props
    // if (data.loading || !data.allArtists) {
    //   return <div>Loading ... </div>
    // }
    let images = [anathema, pf, scorpions, sam, florence2, seafret]
    return (
<Query query={query}> 
{({ data, loading, error }) => {

  if (loading) return <div>loading ...</div>;
  if (error) return <p>ERROR</p>;
  console.log(data);
if (data !== undefined)
  return (
    <div>
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
    <div style={{display: 'flex'}}></div>
  </div>
 <Grid container spacing={3} style={{position: 'absolute', left: '700px', top: '150px', width: '40%'}}>
  {data.artists.map((artist,i)=>
  {

  return(
     <Grid item xs={4}>
       <div className="container2">
     <div className="polaroid">
      <img src={images[i]} alt="5 Terre" width="100%" class="image"/>
      <div class="overlay">

    <div class="text" style={{fontSize:'15px'}}>ALBUMS: 
    <br></br>
    <br></br>

    <Link to={`/albums/${artist.album[0].id}/`}>
    {artist.album[0].title}
            </Link>

     

    </div>
  </div>
       <div class="container">
        
        <p>{artist.name}</p>
      </div>
    </div>
    </div>
     </Grid>)})}
  </Grid>


  </div>
  )}}
</Query>

      )
  }
}

ArtistView = graphql(query)(ArtistView)

export default ArtistView 

