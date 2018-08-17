import React,{ Component } from  'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Customers from './customersList'


class Customer extends Component {

    render() {
    
        return (
            <div>
                <ContentHeader title='Clientes' small='Versão 1.0' />
                <Content>
                    <h1>Cadastro de Cliente</h1>
                    <Customers/>
                </Content>
            </div>
        )
    }
}

export default Customer