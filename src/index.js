import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from 'SearchBar';
import VideoList from "VideoList";
import VideoDetail from "VideoDetail"
import YTSearch from 'youtube-api-search';


//Create a new Component. This component should produce Some HTML

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos:[]};
    YTSearch({key: API_KEY, term:"surfboards"}, (videos)=>{
     this.setState({ videos });
     //this.setState({videos: videos});
    });
  }
    
   render (){
    return (
     <div>
       <SearchBar />
       <VideoDetail video={this.state.videos[1]}/>
       <div>IT is JUst loading</div>
       <VideoList videos={this.state.videos} />
     </div>
   );
  }
}


// Take component and put it to the page
ReactDOM.render(
  <App/>, 
  document.querySelector(".container")
);
