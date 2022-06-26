
import React, { Component } from 'react'
import CardSect from './components/CardSect';
import Header from './components/Header';

export class App extends Component {
  constructor(){
    super();
    this.state={
      id:"bitcoin",
      Data:{}
    } 
    }
    fetchdata = async ()=>{
      let data =await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
      let jsondata= await data.json();
this.setState({id:this.state.id,Data:jsondata})
// console.log(this.state.Data);
    }

    componentDidMount(){
   this.fetchdata()

    }
  render() {
    return (
    <>
    <Header/>
      {/* <h1>{this.state.id}</h1> */}
      <h2>{this.state.Data.coingecko_score}</h2>
      <CardSect   coinName={this.state.Data.name} currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"] : ""}
          mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h : ""}
          ath={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""} atl={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""}
          sentiment={this.state.Data.sentiment_votes_up_percentage} high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h["usd"] : ""}
          low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["usd"] : ""}/>
      </>
    )
  }
}

export default App