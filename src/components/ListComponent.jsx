import React, { Component } from "react";
import PhoneService from '../services/phoneService'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phones: []
        }
        this.deletePhone = this.deletePhone.bind(this)
        this.addPhone = this.addPhone.bind(this)
        this.editPhone = this.editPhone.bind(this)
    }


    deletePhone(id){
        console.log("Đây là deletedPhone")
        PhoneService.deletePhone(id).then( res => {
         const newPhone = this.state.phones.filter((data) => data.id !== id)
            this.setState({phones: newPhone});
        });
    }

    viewPhone(id) {
        this.props.history.push(`view-phone/${id}`)
    }

    editPhone(id) {
        this.props.history.push(`/add-phone/${id}`)
    }

    componentDidMount() {
        this.get();
        console.log("Đây là didmount")
    }

    get(){
        PhoneService.getPhone().then((res) => {
            this.setState({phones: res.data.data})
        })
    }
    addPhone() {
        this.props.history.push('add-phone/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Phone List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPhone}>Add Phone</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Color</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th colSpan={3}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.phones.map(
                                        phone => 
                                        <tr key = {phone.id}>
                                             <td> {phone.name} </td>   
                                             <td> {phone.color}</td>
                                             <td> {phone.brand}</td>
                                             <td> {phone.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editPhone(phone.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePhone(phone.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPhone(phone.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListComponent