import React, { Component } from 'react'

class MessagesMenu extends Component{
   
    render() {
        const{ credit, debt } = this.props.summary
        return (
            <div className="navbar-custom-menu">
                 <ul className="nav navbar-nav">
                    <li className="messages-menu">
                        <a href>
                            <i className='fa fa-bank'></i>
                            <span className="label label-success">{credit}</span>
                        </a>
                    </li>
                    <li className="messages-menu">
                        <a href>
                            <i className='fa fa-credit-card'></i>
                            <span className="label label-danger">{debt}</span>
                        </a>
                    </li>
                    <li className="messages-menu">
                        <a href>
                            <i className='fa fa-money'></i>
                            <span className="label label-success">{credit - debt}</span>
                        </a>
                    </li>
                 </ul>
            </div>
        )
    }
}

export default MessagesMenu
