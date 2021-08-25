import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/contacts/list/contactsListActions';
import selectors from 'src/modules/contacts/list/contactsListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import contactsEnumerators from 'src/modules/contacts/contactsEnumerators';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFilterSchemas.string(
    i18n('entities.contacts.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.contacts.fields.lastName'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.contacts.fields.email'),
  ),
  cellphone: yupFilterSchemas.string(
    i18n('entities.contacts.fields.cellphone'),
  ),
  whatsapp: yupFilterSchemas.string(
    i18n('entities.contacts.fields.whatsapp'),
  ),
  source: yupFilterSchemas.enumerator(
    i18n('entities.contacts.fields.source'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.contacts.fields.country'),
  ),
  city: yupFilterSchemas.string(
    i18n('entities.contacts.fields.city'),
  ),
  addressStreetName: yupFilterSchemas.string(
    i18n('entities.contacts.fields.addressStreetName'),
  ),
  addressStreetNumber: yupFilterSchemas.string(
    i18n('entities.contacts.fields.addressStreetNumber'),
  ),
  addressStreetComplement: yupFilterSchemas.string(
    i18n('entities.contacts.fields.addressStreetComplement'),
  ),
  statusContact: yupFilterSchemas.boolean(
    i18n('entities.contacts.fields.statusContact'),
  ),
  contactType: yupFilterSchemas.enumerator(
    i18n('entities.contacts.fields.contactType'),
  ),
  businessID: yupFilterSchemas.relationToOne(
    i18n('entities.contacts.fields.businessID'),
  ),
  companyName: yupFilterSchemas.string(
    i18n('entities.contacts.fields.companyName'),
  ),
  website: yupFilterSchemas.string(
    i18n('entities.contacts.fields.website'),
  ),
  linkedinProfile: yupFilterSchemas.string(
    i18n('entities.contacts.fields.linkedinProfile'),
  ),
  instagramProfile: yupFilterSchemas.string(
    i18n('entities.contacts.fields.instagramProfile'),
  ),
  facebookProfile: yupFilterSchemas.string(
    i18n('entities.contacts.fields.facebookProfile'),
  ),
  isDeveloper: yupFilterSchemas.boolean(
    i18n('entities.contacts.fields.isDeveloper'),
  ),
  isActive: yupFilterSchemas.boolean(
    i18n('entities.contacts.fields.isActive'),
  ),
  language: yupFilterSchemas.relationToOne(
    i18n('entities.contacts.fields.language'),
  ),
});

const emptyValues = {
  firstName: null,
  lastName: null,
  email: null,
  cellphone: null,
  whatsapp: null,
  source: null,
  country: null,
  city: null,
  addressStreetName: null,
  addressStreetNumber: null,
  addressStreetComplement: null,
  statusContact: null,
  contactType: null,
  businessID: null,
  companyName: null,
  website: null,
  linkedinProfile: null,
  instagramProfile: null,
  facebookProfile: null,
  isDeveloper: null,
  isActive: null,
  language: null,
}

const previewRenders = {
  firstName: {
    label: i18n('entities.contacts.fields.firstName'),
    render: filterRenders.generic(),
  },
  lastName: {
    label: i18n('entities.contacts.fields.lastName'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.contacts.fields.email'),
    render: filterRenders.generic(),
  },
  cellphone: {
    label: i18n('entities.contacts.fields.cellphone'),
    render: filterRenders.generic(),
  },
  whatsapp: {
    label: i18n('entities.contacts.fields.whatsapp'),
    render: filterRenders.generic(),
  },
  source: {
    label: i18n('entities.contacts.fields.source'),
    render: filterRenders.enumerator('entities.contacts.enumerators.source',),
  },
  country: {
      label: i18n('entities.contacts.fields.country'),
      render: filterRenders.relationToOne(),
    },
  city: {
    label: i18n('entities.contacts.fields.city'),
    render: filterRenders.generic(),
  },
  addressStreetName: {
    label: i18n('entities.contacts.fields.addressStreetName'),
    render: filterRenders.generic(),
  },
  addressStreetNumber: {
    label: i18n('entities.contacts.fields.addressStreetNumber'),
    render: filterRenders.generic(),
  },
  addressStreetComplement: {
    label: i18n('entities.contacts.fields.addressStreetComplement'),
    render: filterRenders.generic(),
  },
  statusContact: {
    label: i18n('entities.contacts.fields.statusContact'),
    render: filterRenders.boolean(),
  },
  contactType: {
    label: i18n('entities.contacts.fields.contactType'),
    render: filterRenders.enumerator('entities.contacts.enumerators.contactType',),
  },
  businessID: {
      label: i18n('entities.contacts.fields.businessID'),
      render: filterRenders.relationToOne(),
    },
  companyName: {
    label: i18n('entities.contacts.fields.companyName'),
    render: filterRenders.generic(),
  },
  website: {
    label: i18n('entities.contacts.fields.website'),
    render: filterRenders.generic(),
  },
  linkedinProfile: {
    label: i18n('entities.contacts.fields.linkedinProfile'),
    render: filterRenders.generic(),
  },
  instagramProfile: {
    label: i18n('entities.contacts.fields.instagramProfile'),
    render: filterRenders.generic(),
  },
  facebookProfile: {
    label: i18n('entities.contacts.fields.facebookProfile'),
    render: filterRenders.generic(),
  },
  isDeveloper: {
    label: i18n('entities.contacts.fields.isDeveloper'),
    render: filterRenders.boolean(),
  },
  isActive: {
    label: i18n('entities.contacts.fields.isActive'),
    render: filterRenders.boolean(),
  },
  language: {
      label: i18n('entities.contacts.fields.language'),
      render: filterRenders.relationToOne(),
    },
}

function ContactsListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <div className="border-gray-200 dark:border-gray-600 border rounded-md mb-2">
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <InputFormItem
                name="firstName"
                label={i18n('entities.contacts.fields.firstName')}      
              />
              <InputFormItem
                name="lastName"
                label={i18n('entities.contacts.fields.lastName')}      
              />
              <InputFormItem
                name="email"
                label={i18n('entities.contacts.fields.email')}      
              />
              <InputFormItem
                name="cellphone"
                label={i18n('entities.contacts.fields.cellphone')}      
              />
              <InputFormItem
                name="whatsapp"
                label={i18n('entities.contacts.fields.whatsapp')}      
              />
              <SelectFormItem
                  name="source"
                  label={i18n('entities.contacts.fields.source')}
                  options={contactsEnumerators.source.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.contacts.enumerators.source.${value}`,
                      ),
                    }),
                  )}
                />
              <CountryAutocompleteFormItem  
                name="country"
                label={i18n('entities.contacts.fields.country')}        
              />
              <InputFormItem
                name="city"
                label={i18n('entities.contacts.fields.city')}      
              />
              <InputFormItem
                name="addressStreetName"
                label={i18n('entities.contacts.fields.addressStreetName')}      
              />
              <InputFormItem
                name="addressStreetNumber"
                label={i18n('entities.contacts.fields.addressStreetNumber')}      
              />
              <InputFormItem
                name="addressStreetComplement"
                label={i18n('entities.contacts.fields.addressStreetComplement')}      
              />
              <SelectFormItem
                name="statusContact"
                label={i18n('entities.contacts.fields.statusContact')}
                options={[
                  {
                    value: true,
                    label: i18n('common.yes'),
                  },
                  {
                    value: false,
                    label: i18n('common.no'),
                  },
                ]}
              />
              <SelectFormItem
                  name="contactType"
                  label={i18n('entities.contacts.fields.contactType')}
                  options={contactsEnumerators.contactType.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.contacts.enumerators.contactType.${value}`,
                      ),
                    }),
                  )}
                />
              <BusinessAutocompleteFormItem  
                name="businessID"
                label={i18n('entities.contacts.fields.businessID')}        
              />
              <InputFormItem
                name="companyName"
                label={i18n('entities.contacts.fields.companyName')}      
              />
              <InputFormItem
                name="website"
                label={i18n('entities.contacts.fields.website')}      
              />
              <InputFormItem
                name="linkedinProfile"
                label={i18n('entities.contacts.fields.linkedinProfile')}      
              />
              <InputFormItem
                name="instagramProfile"
                label={i18n('entities.contacts.fields.instagramProfile')}      
              />
              <InputFormItem
                name="facebookProfile"
                label={i18n('entities.contacts.fields.facebookProfile')}      
              />
              <SelectFormItem
                name="isDeveloper"
                label={i18n('entities.contacts.fields.isDeveloper')}
                options={[
                  {
                    value: true,
                    label: i18n('common.yes'),
                  },
                  {
                    value: false,
                    label: i18n('common.no'),
                  },
                ]}
              />
              <SelectFormItem
                name="isActive"
                label={i18n('entities.contacts.fields.isActive')}
                options={[
                  {
                    value: true,
                    label: i18n('common.yes'),
                  },
                  {
                    value: false,
                    label: i18n('common.no'),
                  },
                ]}
              />
              <LanguagesAutocompleteFormItem  
                name="language"
                label={i18n('entities.contacts.fields.language')}        
              />
            </div>

            <div className="px-4 py-2 text-right">
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faSearch}
                />
                {i18n('common.search')}
              </button>
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
                onClick={onReset}
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faUndo}
                />
                {i18n('common.reset')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default ContactsListFilter;