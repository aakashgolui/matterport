import React, { Component } from 'react'

class ContactUs extends Component {
    constructor(props) {
        console.log('Constructor called')
        super(props)
        this.state = {
            name: "Akash Golui",
            names: [
                'Amit', 'Sweta'
            ],
            age:'22'
        }
    }

    render() {
        console.log('Render called')
        return (
            <div className="abc">


                {this.state.name}
                <button onClick={()=> {
                    this.setState({
                        name: 'Amit'
                    })
                }}>Update Name</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('Component did mount called')
    }

    componentDidUpdate(){
        console.log('Component did update called')
    }

    componentWillUnmount(){
        console.log('Component will unmount called')
    }

}
export default ContactUs;
