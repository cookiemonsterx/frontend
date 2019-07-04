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
    <div>
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

