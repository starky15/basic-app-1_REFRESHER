import React from 'react';

const ProfileCard = ({img, handle, title}) => {
    return (
        <div className='segment'>
            <div className="ui card">
                <div className="image">
                    <img src={img} alt={title} />
                </div>
                <div className="content">
                    <div className="meta">
                    <span className="date">This is {handle} for help.</span>
                    </div>
                    <div className="description">
                    {title} is always up for your help
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;