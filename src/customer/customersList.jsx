import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { customers } from './customerActions'

class CustomersList extends Component {
    componentWillMount(){
        this.props.customers()
    }

    renderRows(){
        const list = this.props.customersList || []
        console.log(">>>>renderRows",list)
        return <h1>Teste</h1>
        
    }
    render() {
        return (
            <div>
                {this.renderRows()}
            </div>
        )
    }
}

const mapStateToProps = state =>({customersList: state.customers.customersList})
const mapDispathToProps = dispatch => bindActionCreators(
    {
        customers
    },dispatch)
export default connect(mapStateToProps, mapDispathToProps)(CustomersList)