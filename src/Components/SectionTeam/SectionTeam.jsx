import React from 'react'
import TCard from './TCard'
import './SectionTeam.css'
const SectionTeam = ({t}) => {
 const team=[{
    t:t("Direktor")
 },
 {
    t:t("Yurist")
 },
 {
    t:t("Operator")
 },
 {
    t:t("Administrator")
 }]
    return (
    <>
    <section id='team'>
        <div className="container">
            <h2>{t("Bizning jamoa")}</h2>
            <div className="tcards">
                {team.map((todo, index)=>(<TCard key={index} t={todo.t}/>))}
            </div>
        </div>
    </section>
    </>
  )
}

export default SectionTeam