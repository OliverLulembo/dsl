import sImg1 from '../../public/images/services/5.jpg'
import sImg2 from '../../public/images/services/8.jpg'
import sImg3 from '../../public/images/services/7.jpg'
import sImg4 from '../../public/images/services/4.jpg'
import sImg5 from '../../public/images/services/9.jpg'
import sImg6 from '../../public/images/services/2.jpg'
import sImg7 from '../../public/images/services/3.jpg'
import sImg8 from '../../public/images/services/6.jpg'



const Services = [
    {
        Id: '1',
        sImg:sImg1,
        title: 'Security Awareness Training',
        slug: 'IT-Management-Services',
        thumb1:'Strategy',
        thumb2:'Consultation',
        col:'col-4',
        description:'Visit new places to discover with a Tourist Visa. We deliver your documents ...',
    },
    {
        Id: '2',
        sImg:sImg2,
        title: 'Vulnerability Assessment and Penetration Testing',
        slug: 'Data-Tracking-and-Security',
        thumb1:'Management',
        thumb2:'Transfer',
        col:'col-4',
        description:'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '3',
        sImg:sImg3,
        title: 'Managed Security Service, Security Operation Centre (SOC)',
        slug: 'Website-Development',
        thumb1:'Landing Page',
        thumb2:'Plugins',
        col:'col-4',
        description:'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '4',
        sImg:sImg4,
        title: 'Governance Risk and Compliance',
        slug: 'Modern-Technology-Solution',
        thumb1:'Consultation',
        thumb2:'solution',
        col:'col-4',
        description:'Embarking on a journey of higher education in a foreign country opens doors to...',
    },
    {
        Id: '5',
        sImg:sImg5,
        title: 'Cyber Threat Intelligence',
        slug: 'Incidence REsponse and Malware Analysis',
        thumb1:'Website',
        thumb2:'Mobile App',
        col:'col-4',
        description:'Expert Guidance for a Seamless Immigration Journey Expert Guidance...',
    },
    {
        Id: '6',
        sImg:sImg6,
        title: 'Incident Response and Malware Analysis',
        slug: 'Website-Development',
        thumb1:'Landing Page',
        thumb2:'Plugins',
        col:'col-4',
        description:'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '7',
        sImg:sImg7,
        title: 'Security Program Implementation',
        slug: 'Modern-Technology-Solution',
        thumb1:'Consultation',
        thumb2:'solution',
        col:'col-4',
        description:'Embarking on a journey of higher education in a foreign country opens doors to...',
    },
    {
        Id: '8',
        sImg:sImg8,
        title: 'PCEB Accredited Training',
        slug: 'Incidence Response and Malware Analysis',
        thumb1:'Website',
        thumb2:'Mobile App',
        col:'col-4',
        description:'Expert Guidance for a Seamless Immigration Journey Expert Guidance...',
    },
    {
        Id: '9',
        sImg:sImg1,
        title: 'Information Technology Service Management',
        slug: 'Information Technology Service Management',
        thumb1:'Website',
        thumb2:'Mobile App',
        col:'col-4',
        description:'Expert Guidance for a Seamless Immigration Journey Expert Guidance...',
    },
    // {
    //     Id: '6',
    //     sImg:icon1,
    //     title: 'Incidence Response and Malware Analysis',
    //     slug: 'Custom Software Development',
    //     col:'col-4',
    //     features: ['Software architecture design', 'System integration services', 'Data migration services', 'Legacy app modernization']
    // },
    // {
    //     Id: '7',
    //     sImg:icon2,
    //     title: 'Security Program Implementaion',
    //     slug: 'Audit-&-IT-Consulting-Services',
    //     col:'col-4',
    //     features: ['TechGuard Audit', 'CyberSafe Audit & IT Consulting', 'AssuranceEdge & IT Consulting', 'IT Sentry Audit & IT Consulting']
    // },
    // {
    //     Id: '8',
    //     sImg:icon3,
    //     title: 'ISO Certified Training (PECB Certified)',
    //     slug: 'Web-Application-Design-and-Development',
    //     col:'col-4',
    //     features: ['Web app development services', 'Web portal development services', 'Website development services', 'Offshore web development']
    // },
    // {
    //     Id: '9',
    //     sImg:icon4,
    //     title: 'Mobile App Design and Development',
    //     slug: 'Mobile-App-Design-and-Development',
    //     features: ['Android development services', 'iOS app development services', 'Mobile application design services', 'Enterprise mobile app development']
    // },
    // {
    //     Id: '10',
    //     sImg:icon5,
    //     title: 'Best UI/UX Design Services',
    //     slug: 'Best-UI/UX-Design-Services',
    //     features: ['PixelPerfection UI/UX Design', 'DesignCraft UI/UX Design', 'CreativeWave UI/UX Design', 'InterfaceGenius UI/UX Design']
    // },
    // {
    //     Id: '11',
    //     sImg:icon6,
    //     title: 'Maintenance and Customer Support',
    //     slug: 'Maintenance-and-Customer-Support',
    //     features: ['CareCraft Maintenance', 'FixItPro Maintenance', 'TechCare Maintenance', 'AssistEdge Maintenance']
    // },
    // {
    //     Id: '12',
    //     sImg:icon7,
    //     title: 'Strategic Planning and Execution',
    //     slug: 'Strategic-Planning-and-Execution',
    //     description:'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
    // },
    // {
    //     Id: '13',
    //     sImg:icon8,
    //     title: 'Business Process Optimization',
    //     slug: 'Business-Process-Optimization',
    //     description:'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
    // },
    // {
    //     Id: '14',
    //     sImg:icon9,
    //     title: 'Digital Transformation Consulting',
    //     slug: 'Digital-Transformation-Consulting',
    //     description:'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
    // },
    // {
    //     Id: '15',
    //     sImg:icon10,
    //     title: 'Strategic Planning and Execution',
    //     slug: 'Strategic-Planning-and-Executions',
    //     description:'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
    // },
    // {
    //     Id: '16',
    //     sImg:icon11,
    //     title: 'Change Management Solutions',
    //     slug: 'Change-Management-Solutions',
    //     description:'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
    // },
    // {
    //     Id: '17',
    //     sImg:icon12,
    //     title: 'Performance Metrics and KPI Development',
    //     slug: 'Performance-Metrics-and-KPI-Development',
    //     description:'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
    // },
]    

export default Services;