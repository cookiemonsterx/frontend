import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql,Query } from 'react-apollo'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const query2 = gql`
query AlbumView($id: Int) {
  album(id: $id) {
    id
    title
    genre
    year
    cover
    songSet {
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


 
 <img src={require('../img/'+data.album.cover)} style={{ display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '30px',
  width: '30%',
  border: '1px solid #ddd', borderRadius: '4px', padding: '5px'}} alt="Logo" width="33%" />

<div style= {{textAlign: 'center'}}>
<div style={{display: ' inline-block'}}>
    <div>
<p style={{backgroundColor:'black', fontFamily:'BebasNeue Bold', color:'white', fontSize:'20px'}}>GENRE:</p>

<p className={'text1'} style={{ textAlign:'center'}}>{data.album.genre}</p> 
</div>

<div>
<p style={{ backgroundColor:'black',textAlign:'center', fontFamily:'BebasNeue Bold', color:'white', fontSize:'20px'}}>YEAR:</p>
<p className={'text1'} style={{ textAlign: 'center'}}> {data.album.year}</p>
</div>

<div>
<p style={{backgroundColor:'black',textAlign:'center', fontFamily:'BebasNeue Bold', color:'white', fontSize:'20px'}}>SONGS:</p>
<p className={'text1'} style={{ textAlign: 'center'}}> {data.album.songSet[0].title} </p>

</div>
</div>
</div>

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