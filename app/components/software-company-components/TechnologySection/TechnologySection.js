import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import cnIcon1 from '@/public/images/competencies/1.png'
import cnIcon2 from '@/public/images/competencies/2.png'
import cnIcon3 from '@/public/images/competencies/3.png'
import cnIcon4 from '@/public/images/competencies/4.png'
import cnIcon5 from '@/public/images/competencies/5.png'
import cnIcon6 from '@/public/images/competencies/6.png'
import cnIcon7 from '@/public/images/competencies/7.png'
import cnIcon8 from '@/public/images/competencies/8.png'
import cnIcon9 from '@/public/images/competencies/9.png'
import cnIcon10 from '@/public/images/competencies/10.png'
import cnIcon11 from '@/public/images/competencies/11.png'
import cnIcon12 from '@/public/images/competencies/12.png'
import cnIcon13 from '@/public/images/competencies/13.png'
import cnIcon14 from '@/public/images/competencies/14.png'
import cnIcon15 from '@/public/images/competencies/15.png'
import cnIcon16 from '@/public/images/competencies/16.png'
import Image from 'next/image';


const TechnologyList = [
    {
        Id: '1',
        sIcon: cnIcon1,
        title: 'PHP',
    },
    {
        Id: '2',
        sIcon: cnIcon2,
        title: 'JavaScript',
    },
    {
        Id: '3',
        sIcon: cnIcon3,
        title: 'PostgreSQL',
    },
    {
        Id: '4',
        sIcon: cnIcon4,
        title: 'Swift',
    },
    {
        Id: '5',
        sIcon: cnIcon5,
        title: 'Typescript',
    },
    {
        Id: '6',
        sIcon: cnIcon6,
        title: 'Python',
    },
    {
        Id: '7',
        sIcon: cnIcon7,
        title: 'G318',
    },
    {
        Id: '8',
        sIcon: cnIcon8,
        title: 'Java',
    },
    {
        Id: '9',
        sIcon: cnIcon9,
        title: 'Ruby',
    },
    {
        Id: '10',
        sIcon: cnIcon10,
        title: 'C++',
    },
    {
        Id: '11',
        sIcon: cnIcon11,
        title: 'React Js',
    },
    {
        Id: '12',
        sIcon: cnIcon12,
        title: 'Laraval',
    },
    {
        Id: '13',
        sIcon: cnIcon13,
        title: 'Ruby',
    },
    {
        Id: '14',
        sIcon: cnIcon14,
        title: 'C++',
    },
    {
        Id: '15',
        sIcon: cnIcon15,
        title: 'React Js',
    },
    {
        Id: '16',
        sIcon: cnIcon16,
        title: 'Laraval',
    },
]


const TechnologySection = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (

        <div className="section_space">
            <div className="heading_block text-center">
                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                    Our competencies
                </div>
            </div>

            <div className="tab_block_wrapper">
                <Nav tabs className="nav justify-content-center">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            All Competencies
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            Databases
                        </NavLink>
                    </NavItem>
                     */}
                </Nav>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.slice(0, 16).map((technology, cnt) => (
                                <div className="col-2" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <Image src={technology.sIcon} alt="" />
                                        {/* <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    {/* <TabPane tabId="2">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.slice(3, 12).map((technology, cnt) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <div className="iconbox_icon">
                                            <Image src={technology.sIcon} alt="" />
                                        </div>
                                        <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                     */}
                </TabContent>
            </div>
        </div>
    )
}

export default TechnologySection;