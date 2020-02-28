import React, {useState} from 'react'


export default function MainPage(props) {
    const [toggle, setToggle] = useState(false)
    
    const buttonClick = e => {
        e.preventDefault();
        setToggle(!toggle)
    }

    const toProjectPage = () => {
        props.history.push('/projects')
    }

    return (
        <div className='main'>
            <div className='name'>
                <h1>Amber Mohler</h1>
                <p>Full Stack Web Developer (In training)</p>
            </div>
            <div className='quote'>
                <p>If at first you don't succeed,</p>
                <p>call it version 1.0</p>
            </div>
            <button className='star-button-1' onClick={toProjectPage}> </button>
            <button className='star-button-2' onClick={buttonClick}/>
            <div className={toggle ? 'about-me-show' : 'about-me-hide'}>
                <p>I have an extensive background in problem-solving on a daily basis and team-driven environments. I may not be extensively skilled in web development yet, but I am not afraid to put in the time and dedication to tackle any obstacle in my way; currently, that involves learning ReactJS. By the time that I graduate Lambda School as a full-stack web developer, I will know how to build an entire web application with ReactJS and React Redux, how to build a backend server/web API,  Node Frameworks, Python & Object Oriented Programming.</p>
            </div>
            <a className='star-button-3' href='/resume' > </a>
            
            <p>Photo by Taylor Leopold on Unsplash</p>
        </div>
    )
}
