"use server"
import {supabase} from './supabase';

export async function addTraining(formData){

    const trainingName = formData.get('trainingName')
    const features = formData.get('features')
    const targetMarket = formData.get('targetMarket')
    const certification = formData.get('certification')
    console.log({trainingName, features, targetMarket, certification})
    const { data, error } = await supabase
      .from('Training')
      .insert([
        {trainingName, features, targetMarket, certification},
      ])
      if(error) 
        console.log(error)
      console.log(data)
}