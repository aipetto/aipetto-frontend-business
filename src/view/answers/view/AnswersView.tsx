import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import QuestionsViewItem from 'src/view/questions/view/QuestionsViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';

function AnswersView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.answers.fields.answer')}
        value={record.answer}
      />

      <UserViewItem
        label={i18n('entities.answers.fields.userID')}
        value={record.userID}
      />

      <TextViewItem
        label={i18n('entities.answers.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.answers.enumerators.type.${record.type}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.answers.fields.isActive')}
        value={
          record.isActive
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <QuestionsViewItem
        label={i18n('entities.answers.fields.questionID')}
        value={record.questionID}
      />

      <LanguagesViewItem
        label={i18n('entities.answers.fields.language')}
        value={record.language}
      />
    </div>
  );
}

export default AnswersView;
