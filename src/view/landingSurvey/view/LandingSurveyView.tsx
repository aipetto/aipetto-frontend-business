import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function LandingSurveyView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.landingSurvey.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.landingSurvey.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.landingSurvey.fields.numberOfPets')}
        value={record.numberOfPets}
      />

      <CustomViewItem
        label={i18n('entities.landingSurvey.fields.interests')}
        value={record.interests}
        render={(values) =>
          (values || []).map((value) => (
            <div key={value}>
              <span>{value
                ? i18n(
                  `entities.landingSurvey.enumerators.interests.${value}`,
                  )
                : null}</span>
            </div>
          ))
        }
      />

      <TextViewItem
        label={i18n('entities.landingSurvey.fields.extraInfo')}
        value={record.extraInfo}
      />

      <TextViewItem
        label={i18n('entities.landingSurvey.fields.allowReceiveNotifications')}
        value={
          record.allowReceiveNotifications
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.landingSurvey.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.landingSurvey.fields.longitude')}
        value={record.longitude}
      />

      <CustomViewItem
        label={i18n('entities.landingSurvey.fields.petProfession')}
        value={record.petProfession}
        render={(values) =>
          (values || []).map((value) => (
            <div key={value}>
              <span>{value
                ? i18n(
                  `entities.landingSurvey.enumerators.petProfession.${value}`,
                  )
                : null}</span>
            </div>
          ))
        }
      />

      <TextViewItem
        label={i18n('entities.landingSurvey.fields.address')}
        value={record.address}
      />

      <CountryViewItem
        label={i18n('entities.landingSurvey.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default LandingSurveyView;
