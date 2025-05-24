import React from 'react'
import TCard from './TCard'
import './SectionTeam.css'
const SectionTeam = () => {
 const team=[{
    t:"Direktor"
 },
 {
    t:"Yurist"
 },
 {
    t:"Operator"
 },
 {
    t:"Administrator"
 }]
    return (
    <>
    <section id='team'>
        <div className="container">
            <h2>Bizning jamoa</h2>
            <div className="tcards">
                {team.map((todo, index)=>(<TCard key={index} t={todo.t}/>))}
            </div>
        </div>
    </section>
    </>
  )
}

export default SectionTeam