import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

let ch=[]
let a=[{title: "Pres. Chinmayanand Saini", date: "2020-10-25"},
{ title: 'event 2', date: '2020-10-05' }]
class Calendar extends Component {
  
  constructor(props){
    super(props);
    this.state={
        data:[],
        dates:[]
    }
  }
  componentDidMount(){
    this.setState({data:this.props.data})
  }
  render() {
    return (
      <>
      { 
        this.state.data.map((item,index)=>{
        ch.push({title: item.name ,date:'2020-09-'+Math.floor((Math.random()*30)+1)})
        })
      }
      {
        console.log(ch)
      }
      <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={a}
          />
      </>
    )
  }
}

export default Calendar