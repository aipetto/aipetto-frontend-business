import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function PointsChallengesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.pointsChallenges.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.pointsChallenges.fields.points')}
        value={record.points}
      />

      <CountryViewItem
        label={i18n('entities.pointsChallenges.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default PointsChallengesView;
