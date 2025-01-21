"use client"
// import {useEffect, useState} from 'react';
// import {getServiceSignups} from '../../api/serviceSignup.js';
import TopHeader from '../components/topHeader';
import LeftNavigation from '../components/leftNavigation';
import {addTraining} from '@/app/api/trainingService.js'
// import {
//     Table,
//     TableHeader,
//     TableColumn,
//     TableRow,
//     TableBody,
//     TableCell,
//     getKeyValue
// } from '@nextui-org/table';
import { Button} from 'reactstrap';
//import { FormLabel } from '@mui/material';
import { useFormStatus } from 'react-dom';

export default async function ServiceSignups() {
   

    return(
        <>
            <TopHeader />
            <LeftNavigation />
            <div className="main-content">
                <div className="page-content">
                    <div className='card'>
                        <div className='cardHeader'>
                            <h3 className='cardTitle'>Training Setup</h3>
                            <p>Fill in the form below to create a Course and set its dates</p>
                        </div>
                        <div className='cardBody'>
                            <div className="row">
                                <div className="col-lg-6">
                                    <form action={addTraining}>
                                        <div className="form-group">
                                            <label className="form-label">Course Name </label>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                name='trainingName'
                                                defaultValue="Artisanal kale" 
                                                id="example-text-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Features</label>
                                            <textarea 
                                                className="form-control" 
                                                name="features" 
                                                defaultValue="How do I shoot web" 
                                                id="example-search-input"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Who this training is for</label>
                                            <textarea 
                                                className="form-control" 
                                                name='targetMarket' 
                                                defaultValue="Target market for this training"
                                                id="example-email-input"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Certification</label>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                name="certification"
                                                defaultValue="saht" 
                                                id="example-url-input"/>
                                        </div>
                                        <SubmitButton />
                                    </form>   
                                </div>
                            </div>

                        </div>
                    </div>
                        
                </div>
            </div>
        </>
    )
}

function SubmitButton() {
    const {pending} = useFormStatus();
    return(
        <Button disabled={pending} className='btn btn-primary'> <span className="btn_label" data-text="Send Request">Save</span> </Button>
    )
}