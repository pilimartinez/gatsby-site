import React, {useState} from 'react';
import Member from '../components/Member'

const membersList = [
    {name:'Angie Diaz', profile:'../angie.jpg', twitter:'https://twitter.com/wonderchori'},
    {name:'Mike Rueda', profile:'../mike.jpeg', twitter:'https://twitter.com/mikeledicen'},
    {name:'Pilar Martinez', profile:'../pilar.jpg', twitter:'https://twitter.com/pilisuagi'}
]

const MembersList = () => {

    const [members] = useState(membersList)

  return (
members.map( 
        (member, index)=> <Member name={member.name} profile={member.profile} twitter={member.twitter} key={index}/>
    )
 
  )}

export default MembersList;