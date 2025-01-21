"use server"
import {supabase} from './supabase';

export async function getServiceSignups() {
    let { data: ServiceRegistrations, error } = await supabase
    .from('ServiceRegistrations')
    .select('*')
    .range(0, 9)
    if(error){
        throw new Error(error.message)
    }
    console.log(ServiceRegistrations)
    return ServiceRegistrations    
} 

export async function signupForService(formData){
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const service = formData.get('service');
    const message = formData.get('message');

    const { data, error } = await supabase
    .from('ServiceRegistrations')
    .insert([
    { name, email, phone, company, service, message },
    ])
    .select()
    if(error){
        throw new Error("Something went wrong")
    }
    console.log(data)
    return data
}

export async function updateServiceRequestStatus(regId, Regstatus){
    
    const status = {status : Regstatus};
    console.log(regId)
    const { data, error } = await supabase
    .from('ServiceRegistrations')
    .update(status)
    .eq("id", regId)
    
    if(error){
        return error
        console.log(error)
    }
    console.log('success')
    return data    
}