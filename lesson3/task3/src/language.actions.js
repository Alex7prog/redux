export const SET_LANGUAGE = 'LANGUAGE/SET_LANGUAGE';

// action creator
export const setLanguage = lang => {
  return {
    type: SET_LANGUAGE,
    payload: {
      lang,
    },
  };
};
