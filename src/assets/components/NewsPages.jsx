import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router'
import InfoBtn from './InfoBtn'

// Creazione del interazione con la pagina news con i paramtri del url.

export default function NewsPages() {
    const { name, id } = useParams();
    const id_news = Number(id);

  return (
    <div className='main-sc'>
        <Header />
        <div className="container news column">
         <div>
           <h2>{name}</h2>
           <p>News-id:{id_news}</p>
         </div>
         <p className='col-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Ut eget auctor nibh. Nam iaculis lectus augue. 
             Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
             Etiam sed enim vitae augue gravida gravida. Aenean quis pretium justo. 
             Nunc malesuada purus mauris, sit amet sodales massa laoreet ultricies. 
             Praesent vitae lorem ac ipsum hendrerit rhoncus vel non metus. Nulla a tortor dolor. 
             Quisque lectus purus, posuere ut interdum at, molestie a libero. 
             Aenean consectetur suscipit facilisis. Morbi eu orci sed sapien pulvinar tristique vitae vel enim. 
             Nulla luctus purus ut turpis mollis bibendum. Aenean imperdiet felis sit amet mollis pellentesque. 
            Pellentesque vestibulum pellentesque arcu eget sollicitudin. Morbi vitae mollis leo.</p>
        </div>
        <Footer />
        <InfoBtn />
    </div>
  )
}
