"use client"
import {useEffect, useState, useCallback} from 'react';
import {getServiceSignups, updateServiceRequestStatus} from '../../api/serviceSignup.js';
import TopHeader from '../components/topHeader';
import LeftNavigation from '../components/leftNavigation';
import eyeIcon from '@/public/images/icons/icon_eye.svg';
import Image from 'next/image.js';
import {
    Table,
    TableHeader,
    TableColumn,
    TableRow,
    TableBody,
    TableCell,
    getKeyValue
} from '@nextui-org/table';
import { revalidatePath } from 'next/cache.js';

export default function ServiceSignups() {
    const columns = [
        {   
            key : 'name',
            label : 'Name'
        },
        {   
            key : 'company',
            label : 'Company'
        },
        {   
            key : 'created_at',
            label : 'Date Submitted'
        },
        {   
            key : 'service',
            label : 'Service'
        },
        {   
            key : 'status',
            label : 'Status'
        },
        {   
            key : 'id',
            label : 'Action'
        },
        
    ]
    
    const [showTable, setShowTable] = useState(true);
    const [showSingleRequest, setShowSingleRequest] = useState(false);
    const [requests, setRequests] = useState([]);
    const [activeRequest, setActiveRequest] = useState({});
    useEffect(() => {async function getItems() {
            setRequests(await getServiceSignups().then());
            }
            getItems()
        }
     ,[])
     const statusMap = {
        'new' : 'badge bg-primary-subtle text-primary',
        'actioned' : 'badge bg-success-subtle text-success',
        'spam' : 'badge bg-danger-subtle text-danger',
     }
     function showAllRequests(){
        setShowTable(true);
        setShowSingleRequest(false);
     }
     function openRequest(serviceRequest){
        //setActiveRequest(requests?.filter((req) => req.id === serviceRequestId));
        setActiveRequest(serviceRequest.item);
        console.log(serviceRequest.item);
        setShowTable(false);
        setShowSingleRequest(true);
     }
     const renderCell = useCallback((item, columnkey) => {
        const cellValue = item[columnkey]

        switch(columnkey){
            case 'name':
                return(
                    <>{cellValue}
                    </>
                )
            case 'email':
                return(
                    <>{cellValue}
                    </>
                )
            case 'created_at':
                return(
                    <>{cellValue}
                    </>
                )
            case 'status':
                return(
                    <span className={statusMap[item.status]}>{cellValue}
                    </span>
                )
            case 'company':
                return(
                    <>{cellValue}</>
                )
            case 'service':
                return(
                    <>{cellValue}</>
                )
            case 'id':
                return(
                    <span><Image src={eyeIcon} alt='View' onClick={() => openRequest({item})}/></span>
                )
            default:
                {cellValue}
        }
     }, [])
    return(
        <>
            <TopHeader />
            <LeftNavigation />
            <div className="main-content">
                <div className="page-content">
                    <div className='card'>
                        <div className='cardHeader'>
                            <h3>Service Requests</h3>
                            <p>Click on a row to view a service request</p>
                            {showSingleRequest && <button className='btn btn-primary' onClick={() => showAllRequests()}>All Requests</button> }
                        </div>
                        <div className='cardBody'>
                            {   showTable && (<Table aria-label="Example table with dynamic content">
                                <TableHeader columns={columns}>
                                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                </TableHeader>
                                <TableBody items={requests} emptyContent={"No requests to display"}>
                                    {(item) => 
                                        <TableRow key={item.id}>
                                            {(columnkey) => <TableCell>{renderCell(item, columnkey)}</TableCell>}
                                        </TableRow>}
                                </TableBody>
                            </Table>)
                            }{showSingleRequest && (<ViewServiceRequest serviceRequest={activeRequest}/>)}
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

function ViewServiceRequest({ serviceRequest }){

    async function changeStatus(sta){
        console.log(sta);
        console.log(serviceRequest.id);
        const result = await updateServiceRequestStatus(serviceRequest.id, sta)
        console.log(result)
        revalidatePath("/backoffice/serviceSignups");
        //return result;
    }

    return(
    <>
        <div className='row'>
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