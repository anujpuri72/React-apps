import React from 'react';
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'summer' : 'winter';
    }

}
const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat, new Date().getMonth());
    const text = Season === 'winter' ? 'Kaafi thand hai ghar baith' : 'dhhhup nikli hai bahr jaa';
    const icon = Season === 'winter' ? 'snowflake' : 'sun';
    return (
    <div>
        <div > Season 's Display: It is {Season}</div>
        <i className ={`${icon} icon`} />
        <h1>{text}</h1>
        <i className ={`${icon} icon`} />
    </div>
    );
}
export default SeasonDisplay;