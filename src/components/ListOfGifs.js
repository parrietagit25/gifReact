import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGift'

export default function ListOfGifs({params}){

    const {keyword} = params
    const [loading, setLoading] = useState(false)

    const [gifs, setGifs] = useState([])

    useEffect(function (){ // esto solo de ejecuta 1 vez cuando se renderiza el componente
        setLoading(true)
        getGifs({keyword})
      .then(gifs=> {
        setGifs(gifs)
        setLoading(false)
      })
      }, [keyword])

      if (loading) {
        return <li>Cargando ...</li>
      }

    return <div> 
    {
        gifs.map(({id,title,url})=>
            <Gif 
            key={id}
            title={title} 
            url={url} 
            id={id} 
            />    
        ) 
    }
</div>

}