import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag';
import { graphql,Query } from 'react-apollo'

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
      
    <p style={{fontFamily:'BebasNeue Bold', color:'white', fontSize:'50px', position: 'absolute', float: 'right', textAlign: 'center'}}> AMP UP</p>
     <br></br>
     <br></br>
     <br></br>
     <p style={{fontFamily:'BebasNeue Bold', color:'white', fontSize:'50px', position: 'absolute', float: 'right', textAlign: 'center'}}> THOSE DBS</p>

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

