import {useState, Suspense} from 'react';
import {getServiceSignups, updateServiceRequestStatus} from '../../api/serviceSignup.ts';
import TopHeader from '../components/topHeader';
import LeftNavigation from '../components/leftNavigation';
import ServiceRequestTable from '../components/serviceRequestsTable.tsx';
import Loading from './loading.js';

import { ServiceRequest } from '../../api/serviceSignup.ts';


export default async function ServiceSignups() {
    return(
        <>
            <TopHeader />
            <LeftNavigation />
            <div className="main-content">
                <div className="page-content">
                    <div className='card'>
                        <div className='cardHeader'>
                            <h3>Service Requests</h3>
                            <p></p>
                        </div>
                        <div className='cardBody'>
                            <Suspense fallback={<Loading />} >
                                <ServiceRequestTable />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

