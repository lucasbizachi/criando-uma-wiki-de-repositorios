import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo() {
    return (
       <ItemContainer>
        <h3>Lucas</h3>
        <p>Card-Monalisa</p>
        <hr/>
        <a href="#">Ver Repositório</a><br />
        <a href="#" className='remover'>Remover</a>
       </ItemContainer> 
    )
}

export default ItemRepo;