import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql,Query } from 'react-apollo'


const query2 = gql`
{
    artists {
    
        album {
          title
        }
      }
}
`



export default class AlbumView extends Component {
    render() {
        return (
            <div>
                
<Query query={query2}>


{({data, loading, error}) => {
    if (loading) return <div>loading ...</div>;
    if (error) return <p>ERROR</p>;
    console.log(data);
    if (data !== undefined)
    return(
        <div>

{data.artists.map((artists) => {
            return (
                <div>

                    {artists.album.title}
                   
                    </div>
            )
        }






        )}



        </div>
    )




}





}


</Query>












                
            </div>
        )
    }
}
