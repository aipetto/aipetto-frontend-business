import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function QuestionsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.questions.fields.question')}
        value={record.question}
      />

      <TextViewItem
        label={i18n('entities.questions.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.questions.enumerators.type.${record.type}`,
          )
        }
      />

      <UserViewItem
        label={i18n('entities.questions.fields.userID')}
        value={record.userID}
      />

      <TextViewItem
        label={i18n('entities.questions.fields.isActive')}
        value={
          record.isActive
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <LanguagesViewItem
        label={i18n('entities.questions.fields.language')}
        value={record.language}
      />

      <CountryViewItem
        label={i18n('entities.questions.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default QuestionsView;
