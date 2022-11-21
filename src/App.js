import React from 'react';
import ProfileCard from './ProfileCard';

const App = () =>{
    const data = [{
        image:'alexa.png',
        title:'Alexa',
        handle:'@alexa99'},
    {
        image:'siri.png',
        title:'Siri',
        handle:'@siri23'
    },{
        image:'cortana.png',
        title:'Cortana',
        handle:'@cortana453'
    }]

return(<div>
        <h3 class="ui block header">
        Virtual Assistant for you!
        </h3>
        <div className="ui equal width grid">
            <div className="row">
                <div className="column">
                    <ProfileCard title={data[0]['title']} img={data[0]['image']} handle={data[0]['handle']}/>
                </div>
                <div className=" column">
                    <ProfileCard title={data[1]['title']} img={data[1]['image']} handle={data[1]['handle']}/>
                </div>
                <div className=" column">
                    <ProfileCard title={data[2]['title']} img={data[2]['image']} handle={data[2]['handle']}/>
                </div>
                </div>
            </div>
        </div>)
};

export default App;