import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import VaccineTypesViewItem from 'src/view/vaccineTypes/view/VaccineTypesViewItem';
import ProvidersViewItem from 'src/view/providers/view/ProvidersViewItem';
import PlaceViewItem from 'src/view/place/view/PlaceViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function PetVaccinesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <VaccineTypesViewItem
        label={i18n('entities.petVaccines.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.petVaccines.fields.uniqueVetVaccineCode')}
        value={record.uniqueVetVaccineCode}
      />

      {record.datetimeTaken && <TextViewItem
        label={i18n(
          'entities.petVaccines.fields.datetimeTaken',
        )}
        value={moment(record.datetimeTaken).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <ProvidersViewItem
        label={i18n('entities.petVaccines.fields.veterinarianID')}
        value={record.veterinarianID}
      />

      <PlaceViewItem
        label={i18n('entities.petVaccines.fields.placeTaken')}
        value={record.placeTaken}
      />

      <BusinessViewItem
        label={i18n('entities.petVaccines.fields.businessID')}
        value={record.businessID}
      />

      <CountryViewItem
        label={i18n('entities.petVaccines.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default PetVaccinesView;
