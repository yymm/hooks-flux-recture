export type User = {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
};

export type Organization = {
  name: string;
  username: string;
  slug: string;
  profile_image: string;
  profile_image_90: string;
};

export type DevtoArticle = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: Date;
  tag_list: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  published_timestamp: Date;
  user: User;
  organization: Organization;
};

type Store = {
  loading: boolean;
  articles: DevtoArticle[];
};

export const initialVal: Store = {
  loading: false,
  articles: [],
};

export enum ActionType {
  FETCH_DEVTO_ARTICLES = 'FETCH_DEVTO_ARTICLES',
}

type Action = {
  type: ActionType;
  payload?: DevtoArticle[];
};

export const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_DEVTO_ARTICLES:
      if (action.payload) {
        return {
          ...state,
          loading: false,
          articles: action.payload,
        };
      } else {
        return state;
      }
  }
  return state;
};
