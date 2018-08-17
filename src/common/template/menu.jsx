import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Clientes' icon='edit'>
            <MenuItem path='customer'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)