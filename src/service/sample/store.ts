export type Store = {
  loading: boolean;
  articles: Article[];
};
export type Article = {
  title: string;
  url: string;
};

export const initialVal: Store = {
  loading: false,
  articles: [],
};

export enum ActionType {
  SET_ARTICLES = 'SET_ARTICLES',
}

type Action = {
  type: ActionType;
  payload?: Article[];
};

export const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ARTICLES:
      return {
        loading: false,
        articles: [
          { title: 'title1', url: 'https://test1' },
          { title: 'title2', url: 'https://test2' },
          { title: 'title3', url: 'https://test3' },
          { title: 'title4', url: 'https://test4' },
          { title: 'title5', url: 'https://test5' },
        ],
      };
  }
  return state;
};
