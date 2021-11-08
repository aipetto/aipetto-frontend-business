import React from 'react';
import {getLanguages, i18n} from 'src/i18n';
import actions from 'src/modules/layout/layoutActions';

function I18nFlags(props) {
  const doChangeLanguage = (language) => {
    actions.doChangeLanguage(language);
  };

  return (
    <div className="text-center sm:text-left">
      {getLanguages().map((language) => (
          <button onClick={() => doChangeLanguage(language.id)} className="px-4 py-2 md:text-black text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded">
            {language.label}
          </button>
      ))}
    </div>
  );
}

export default I18nFlags;
