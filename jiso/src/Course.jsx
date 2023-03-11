import React from 'react';

const Course = (props) => {
    return (
        <>
        <div className='hello'>
            <h1 className='bio'>Biography</h1>
            <img src={props.payload[0].img}/>
            <p>{props.payload[0].Spouse}</p>
            <p>{props.payload[0].Awards}</p>
            <p>{props.payload[0].Height}</p>
            <p>{props.payload[0].Children}</p>
            <p>{props.payload[0].Dates}</p>
            <p>{props.payload[0].Batting}</p>
            <p>{props.payload[0].Full}</p>
            <p>{props.payload[0].Born}</p>
            <p>{props.payload[0].Nickname}</p>
            <p>{props.payload[0].Batting}</p>
            <p>{props.payload[0].Bowling}</p>
            <p>{props.payload[0].Role}</p>
            <p>{props.payload[0].Relations}</p>
            <p>{props.payload[0].Father}</p>
            <p>{props.payload[0].Website}</p>
            <p>{props.payload[0].National }</p>
            <p>{props.payload[0].Test }</p>
            <p>{props.payload[0].Last}</p>
            <p>{props.payload[0].ODI}</p>
            <p>{props.payload[0].LastO }</p>
            </div>
        </>
    );
}

export default Course;
