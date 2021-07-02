import React, {useState} from 'react';
import { i18n } from 'src/i18n';
import {FormProvider, useForm} from 'react-hook-form';
import ProgressBar from "../../serviceReservation/steps/ProgressBar";
import customerEnumerators from "../../../modules/customer/customerEnumerators";
import InputFormItem from "../../shared/form/items/InputFormItem";
import RadioFormItem from "../../shared/form/items/RadioFormItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-regular-svg-icons";
import { motion } from 'framer-motion';
import ReactGoogleMaps from "../../shared/maps/ReactGoogleMaps";
import BusinessListFilter from "../../business/list/BusinessListFilter";
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
