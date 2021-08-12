import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import ProgressBar from "../../serviceReservation/steps/ProgressBar";
import SearchBusinessServicesPage from "../../search/SearchBusinessServicesPage";

function ReservationInitialPage(props){

    const { saveLoading } = props;
    const [ initialValues ] = useState(() => {
        const record = props.record || {};

        return {};
    })

    const form = useForm({
       mode: 'all',
       defaultValues: initialValues,
    });

    const onSubmit = (data) => {
        console.log(data);
        props.history.push('/reservation-business', { data });
    }

    return (
        <>
           <ProgressBar />
           <SearchBusinessServicesPage />
        </>
    );
};

export default ReservationInitialPage;
