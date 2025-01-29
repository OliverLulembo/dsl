import { useQuery } from '@tanstack/react-query';
import {getServiceSignups } from '../../api/serviceSignup.ts';

export function getServiceRequests() {
    const {data, isPending} = useQuery({
        queryKey: ['serviceRequests'],
        queryFn: getServiceSignups
    })
    return data
}