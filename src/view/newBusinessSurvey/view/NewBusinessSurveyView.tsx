import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';

function NewBusinessSurveyView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.nameBusiness')}
        value={record.nameBusiness}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.numberOfPlaces')}
        value={record.numberOfPlaces}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.contactName')}
        value={record.contactName}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.contactEmail')}
        value={record.contactEmail}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.contactPhone')}
        value={record.contactPhone}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.cellphoneForSMS')}
        value={record.cellphoneForSMS}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.digitalNetworks')}
        value={record.digitalNetworks}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications')}
        value={
          record.allowReceiveNotifications
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <CustomViewItem
        label={i18n('entities.newBusinessSurvey.fields.services')}
        value={record.services}
        render={(values) =>
          (values || []).map((value) => (
            <div key={value}>
              <span>{value
                ? i18n(
                  `entities.newBusinessSurvey.enumerators.services.${value}`,
                  )
                : null}</span>
            </div>
          ))
        }
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.address')}
        value={record.address}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.newBusinessSurvey.fields.longitude')}
        value={record.longitude}
      />
    </div>
  );
}

export default NewBusinessSurveyView;
