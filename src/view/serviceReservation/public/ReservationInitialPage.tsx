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
            <div className="antialiased overflow-hidden overflow-y-scroll">

            <div className="hero w-full">
                <div className="container mx-auto mt-2">
                    <div className="py-0 md:py-16 hero__content text-center w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative fade-in fade-in-first">
                        <ProgressBar />
                    </div>
                    <div className="text-center fade-in fade-in-second">
                        <motion.div
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ stiffness: 150 }}
                        >
                            <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">

                                <FormProvider {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)}>
                                        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
                                            <InputFormItem
                                                name="surname"
                                                label={i18n('entities.customer.fields.surname')}
                                                required={false}
                                            />
                                        </div>

                                        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
                                            <RadioFormItem
                                                name="gender"
                                                label={i18n('entities.customer.fields.gender')}
                                                options={customerEnumerators.gender.map(
                                                    (value) => ({
                                                        value,
                                                        label: i18n(
                                                            `entities.customer.enumerators.gender.${value}`,
                                                        ),
                                                    }),
                                                )}
                                                required={false}
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                                disabled={saveLoading}
                                                type="button"
                                                onClick={form.handleSubmit(onSubmit)}
                                            >
                                                <FontAwesomeIcon
                                                    className="mr-2"
                                                    icon={faSave}
                                                />
                                                {i18n('common.save')}
                                            </button>
                                        </div>
                                    </form>
                                </FormProvider>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default ReservationInitialPage;
