import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import './home.css'


let count;
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            pictures:[1,2,3,4,5,6,7]
        }
    }
    componentDidMount(){
        this.setState({data:this.props.data})
    }
    render(){
        return (
        <div className="container-fluid" id="body">
            {this.state.data.map((item,index)=>{
            
               return <div className="row ">
                <div className="col-12  d-flex justify-content-center">
                    <br/><br/>
                <div class="ui card">
                        
                <div class="content">
                    <div class="right floated meta">
                    {
                    (item.status.match("Inactive")?
                    (<i className="fa fa-camera" style={{color:"#FF6961"}}></i>):
                    (<i className="fa fa-camera" style={{color:"#77DD77"}}></i>))
                    }
                    </div>
                    <div class="left floated author">
                    {(item.gender.match("Male"))
                    ?(<img class="ui avatar image" src="boy.jpg"/>)
                    :(<img class="ui avatar image" src="girl.jpg"/>)
                    }
                       
                    </div>
                    <span><b>{item.name}</b> <br/> {item.email.split("@")[0] }</span>
                    
                </div>
                    <div class="image">
                    
                    {(Math.random() >= 0.5)?(
                    <img className="d-block w-100" src={`https://picsum.photos/40`+index%10} alt="First slide"/>):(
                    <Carousel interval={null}  controls={false} touch={true}>
                    {count=(Math.floor(Math.random()*10))+2}
                    {
                        this.state.pictures.map((index)=>{
                            if(index<=count){
                            return <Carousel.Item>
                                <img
                            className="d-block w-100"
                            src={`https://picsum.photos/`+(Math.floor(Math.random()*1000)+400)}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        }
                        })
                    }
                    </Carousel>)
                    }
                    </div>
                    <div class="content">
                        
                    </div>
                </div>
            </div>
            </div>
        
            })}
            
        </div>
    )
}}

export default Home;