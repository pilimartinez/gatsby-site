import React,{useState} from 'react';

const eventsList = [
  { event:'Javascript', venue:'Stensul', date:'12/09/19', img:''  },
  { event:'Open Source', venue:'Iúnigo', date:'09/10/19', img:''  },
  { event:'React for Begginers', venue:'OLX', date:'02/11/19', img:''  },
  { event:'UX/UI', venue:'Coderio', date:'03/12/19', img:''  },
  { event:'Lightning Talks', venue:'Real Trends', date:'18/12/19', img:''  },
  { event:'React: Cat Generator', venue:'Media Monks', date:'17/01/20', img:''  },
  { event:'Vue for Begginers', venue:'Ripio', date:'18/02/20', img:''  }
]

const Card = () => {

  const [events] = useState(eventsList)

  return (
  <div>
  <table>
    <tbody>
      <tr>
        <th>💻</th>
        <td>📍</td>
        <td>📅</td>
      </tr>
      {events.map( 
                    (e, index)=>    
                    <tr key={index}>     
                    <th>{e.event}</th>
                    <td>{e.venue}</td>
                    <td>{e.date}</td>
                    </tr>
                )}
    </tbody>
  </table>
  </div>
  )
}

export default Card;