import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql,Query } from 'react-apollo'


const query2 = gql`
query AlbumView($id: Int) {
  artist(id: $id) {
    id
    name
    album{
      id
      title
    }
  }
}
`





export default class AlbumView extends Component {
    render() {
        return (
            <div>
                
<Query
variables={{id:this.props.match.params.id}}
query={query2}>


{({data, loading, error}) => {
    if (loading) return <div>loading ...</div>;
    if (error) return <p>ERROR</p>;
    console.log(data);
    if (data !== undefined)
    return(
        <div>

{data.artist.album[0].title}
   </div>
    )

}

}


</Query>


                
            </div>
        )
    }
}


AlbumView = graphql(query2)(AlbumView)