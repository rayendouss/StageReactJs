import React, { Component } from 'react'

class Contacts extends Component {
  state={
    items:[],
    isLoaded:false
}

    componentDidMount() {
        fetch('http://localhost:3100/all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data.news ,isLoaded : true })
            })
            .catch(console.log)
    }
    render() {
         var { isLoaded , items} = this.state
        if(!isLoaded){


            return (
                <div className="App">
                       loading
                </div>
            )

        }
        else {
            return (
                <div>
                    <ul>
                        {
                            items.map((item)=>{
                              return(
                              <div>
                                  <a>{item.Description}</a>
                                  <a>{item.Type}</a>
                              </div>
                              )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}
export default Contacts
