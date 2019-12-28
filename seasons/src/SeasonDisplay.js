import React from 'react';
import './SeasonDisplay.css';
const seasonconfig ={
    summer:{
        text:"dhhhup nikli hai bahr jaa",
        iconName:"sun"
    },
    winter:{        
        text:'Kaafi thand hai ghar baith',
        iconName:"snowflake"


    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'summer' : 'winter';
    }

}
const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat, new Date().getMonth());
    // const text = Season === 'winter' ?'Kaafi thand hai ghar baith' : 'dhhhup nikli hai bahr jaa';
    // const icon = Season === 'winter' ? 'snowflake' : 'sun';
    const{text,iconName}=seasonconfig[Season];
    return (
    <div className={`season-display ${Season}`}>

        <i className ={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1> 
        <i className ={`icon-right massive ${iconName} icon`} />
    </div>
    );
}
export default SeasonDisplay;