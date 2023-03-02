import React, { Component } from 'react'
import phoneService from '../services/phoneService'

class ViewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            phones: {}
        }
    }

    componentDidMount(){
        phoneService.getPhoneById(this.state.id).then( res => {
            this.setState({phones: res.data.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Phone Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.phones.name }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewComponent