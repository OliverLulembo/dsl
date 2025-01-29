"use client"
import eyeIcon from '@/public/images/icons/icon_eye.svg';
import Image from 'next/image.js';
import { ServiceRequest } from '../../api/serviceSignup.ts';
import { useState, useEffect } from 'react';
import {getServiceSignups, updateServiceRequestStatus} from '../../api/serviceSignup.ts';
import { revalidatePath } from 'next/cache.js';
import { toast } from 'react-hot-toast';


export default async function ServiceRequestTable(){
    const [activeRequest, setActiveRequest] = useState<ServiceRequest | null>(null);
    const [showTable, setShowTable] = useState(true);
    const [showSingleRequest, setShowSingleRequest] = useState(false);
    const [requests, setRequests] = useState<any[]>([]);
    function openRequest(serviceRequest: ServiceRequest){
        //setActiveRequest(requests?.filter((req) => req.id === serviceRequestId));
        setActiveRequest(serviceRequest);
        console.log(serviceRequest);
        setShowTable(false);
        setShowSingleRequest(true);
    }
    function showAllRequests(){
        setShowTable(true);
        setShowSingleRequest(false);
    }
    interface statusMap {
        new: string;
        actioned: string;
        spam: string;
    }
    const statusMap = {
        'new' : 'badge bg-primary-subtle text-primary',
        'actioned' : 'badge bg-success-subtle text-success',
        'spam' : 'badge bg-danger-subtle text-danger',
    }
    useEffect(() => {async function getServiceSignupArray() {
        const signups = await getServiceSignups();
        setRequests(signups);
        }
        getServiceSignupArray()
        }, [])
    //const requests = await getServiceSignups()
    return (
        <>
        {showSingleRequest && <button className='button-primary' onClick={() => showAllRequests()}>All Requests</button> }
        
       
            {showTable && (<table id="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Service</th>
                <th>Date Created</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead> {requests?.map(request => (
                <tbody>
                <tr>
                    <td>{request.name}</td>
                    <td>{request.company}</td>
                    <td>{request.service}</td>
                    <td>{request.created_at}</td>
                    <td><span className={statusMap[request.status]}>{request.status}</span></td>
                    <td><Image src={eyeIcon} alt='View' onClick={() => openRequest(request)}/></td>
                </tr>
                </tbody>
            )
            )}</table>)}
        {showSingleRequest && (activeRequest ? <ViewServiceRequest serviceRequest={activeRequest}/> : <></> )}
        </>
    )
}

interface Props { serviceRequest: ServiceRequest; }
const ViewServiceRequest : React.FC<Props> = ({ serviceRequest }) => {

    async function changeStatus(sta: string){

        console.log(sta);
        console.log(serviceRequest.id);
        const result = await updateServiceRequestStatus(serviceRequest.id, sta)
        toast.success('Successfully updated service request status!');
        //revalidatePath("/backoffice/serviceSignups");
        //return result;
    }

    return(
    <>
        <div className='backoffice-row'>
            <div className="col-6">
                <div className="form-group">
                    <label className="form-label">Name </label>
                    <input 
                        className="form-control" 
                        disabled
                        type="text" 
                        defaultValue= {serviceRequest.name}
                        />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label className="form-label">Company </label>
                    <input 
                        className="form-control" 
                        disabled
                        type="text" 
                        defaultValue= {serviceRequest.company}
                        />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col-6">
                <div className="form-group">
                    <label className="form-label">Phone </label>
                    <input 
                        className="form-control" 
                        disabled
                        type="text" 
                        defaultValue= {serviceRequest.phone}
                        />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label className="form-label">Email </label>
                    <input 
                        className="form-control" 
                        disabled
                        type="text" 
                        defaultValue= {serviceRequest.email}
                        />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col-6">
                <div className="form-group">
                    <label className="form-label">Service </label>
                    <input 
                        className="form-control" 
                        disabled
                        type="text" 
                        defaultValue= {serviceRequest.service}
                        />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label className="form-label">Message </label>
                    <textarea 
                        className="form-control" 
                        disabled 
                        defaultValue= {serviceRequest.message}
                        />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col-6">
                <button className='btn btn-primary' onClick={() =>changeStatus('actioned')}> Actioned
                </button>
            </div>
            <div className="col-6">
                <button className="btn btn-danger" onClick={() => changeStatus('spam')}>
                    Mark as spam
                </button>
            </div>
        </div>
    </>
    );
}