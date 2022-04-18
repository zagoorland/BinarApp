export type User = {
  name?: string;
};

export interface UserContextValue {
  user: User;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name?: string;
    }>
  >;
}
