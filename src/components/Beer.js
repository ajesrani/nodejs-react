import React, { Component } from 'react';

//https://kennethscoggins.medium.com/using-the-infinite-scrolling-method-to-fetch-api-data-in-reactjs-c008b2b3a8b9
class Beer extends Component { 
    state = {
        beers: [],
        page: 1
    };

    fetchData = (pageNum) => {
        let beerUrl = 'https://api.punkapi.com/v2/beers?page='+pageNum;
        fetch(beerUrl)
           .then(res=>res.json())
           .then(data => {
              this.setState({
                  beers: [...this.state.beers,...data]
              })
           })
        }

        infiniteScroll = () => {
            // End of the document reached?
            if (window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight){
             
               let newPage = this.state.page;
               newPage++;
                this.setState({
                     page: newPage
                });
               this.fetchData(newPage);
               }
            }

    componentDidMount = () => {
        window.addEventListener('scroll', this.infiniteScroll);
        this.fetchData(this.state.page);
    }
    
    render() {
             
        return (
        <div>
            {this.state.beers.map((beerdata,idx) => (<div style={{
width: "200px",
height: "200px",
display: "inline-block",
margin: "20px",
border: "1px solid black"
}}>
   <div style={{fontSize:'10pt'}}>{beerdata.name}</div>
   <img src={beerdata.image_url} alt="" style={{width: '30px', float: 'left',paddingRight: '10px',paddingBottom: '10px'}}/>
   <p style={{fontSize:'10pt'}}>{beerdata.tagline}</p>
</div>))}
        </div>
      )
    }
  }

  export default Beer;