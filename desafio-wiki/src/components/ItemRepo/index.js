import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo({repo}) {
    return (
       <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <hr/>
        <a href={repo.html_url} rel="noreferrer" target="blank" >Ver Repositório</a><br />
        <a href="#" rel="noreferrer" className='remover'>Remover</a>
       </ItemContainer> 
    )
}

export default ItemRepo;