import React from 'react';
import classes from './RepGuide.module.css';
import RepMap from './RepMap/RepMap';
import RepGallery from './RepSidebar/RepGallery/RepGallery';
import RepSidebar from './RepSidebar/RepSidebar'

const RepGuide = () => {
    let Uzb = ['Whi visit?', 'Arts', 'Customs', 'Foreign', 'Whi visit?', 'Customs', 'Foreign', 'Whi visit?', 'Arts', 'Customs', 'Foreign', 'Whi visit?'];
    let otherServices = ['Flights', 'Guides', 'Trains', 'Transportation', 'Visa'];
    let sights = ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva', 'Gijduvan', 'Shakhrisabz', 'Margilan', 'Rishtan', 'Charvak', 'Aral Sea', 'Boysun', 'Chimgan', 'Nurata', 'Termez'];
    let covid = ['Covid updates', 'Covid measures', 'Flexible booking', 'Flexible cancellations']

    let repGall = [
        { title: 'What to pack?', content: '' },
        { title: 'Uzbekistan photos', content: '' },
        { title: 'Uzbekistan videos', content: '' },
        { title: 'Uzbekistan news', content: '' },
        { title: 'Tourist feedbacks', content: '' },
    ]

    return (
        <div className={classes.RepGuide}>
            <div className={classes.col_1}>
                <RepSidebar title="Uzbekistan" links={Uzb}/>
                <RepSidebar title="Other services" links={otherServices}/>
                <RepSidebar title="Cities & Sights" links={sights}/>
                <RepSidebar title="Covid" links={covid}/>
                <RepGallery repGall={repGall}/>
            </div>
            <RepMap/>
        </div>
    );
};

export default RepGuide;