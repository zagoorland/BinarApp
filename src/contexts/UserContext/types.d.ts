export type User = {
  username?: string;
};

export interface UserContextValue {
  user: User;
  setUser: React.Dispatch<
    React.SetStateAction<{
      username?: string;
    }>
  >;
}
