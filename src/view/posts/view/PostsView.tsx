import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import PostCategoriesViewItem from 'src/view/postCategories/view/PostCategoriesViewItem';
import PostCommentsViewItem from 'src/view/postComments/view/PostCommentsViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function PostsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.posts.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.posts.fields.description')}
        value={record.description}
      />

      <ImagesViewItem
        label={i18n('entities.posts.fields.postHeaderImage')}
        value={record.postHeaderImage}
      />

      <FilesViewItem
        label={i18n(
          'entities.posts.fields.postDocRelated',
        )}
        value={record.postDocRelated}
      />

      <TextViewItem
        label={i18n('entities.posts.fields.postUrl')}
        value={record.postUrl}
      />

      <UserViewItem
        label={i18n('entities.posts.fields.authors')}
        value={record.authors}
      />

      <PostCategoriesViewItem
        label={i18n('entities.posts.fields.postCategory')}
        value={record.postCategory}
      />

      <PostCommentsViewItem
        label={i18n('entities.posts.fields.comments')}
        value={record.comments}
      />

      <TextViewItem
        label={i18n('entities.posts.fields.source')}
        value={record.source}
      />

      <LanguagesViewItem
        label={i18n('entities.posts.fields.language')}
        value={record.language}
      />

      <CountryViewItem
        label={i18n('entities.posts.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default PostsView;
