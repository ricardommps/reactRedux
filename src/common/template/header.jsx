import React,{ Component } from  'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { getSummary } from '../../dashboard/dashboardActions'
import Navbar from './navbar'

class Header extends Component {
    componentWillMount(){
        this.props.getSummary()
    }
    render(){
        return (
            <header className='main-header'>
                <a href='/#/' className='logo'>
                    <span className='logo-mini'><b>My</b>M</span>
                    <span className='logo-lg'>
                        <i className='fa fa-money'></i>
                        <b> My</b>Money
                    </span>
                </a>
                <nav className='navbar navbar-static-top'>
                    <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
                    <Navbar summary={this.props.summary}/>
                </nav>
            </header>
        )
    }
}
const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)
