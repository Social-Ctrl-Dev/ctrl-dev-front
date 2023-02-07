export interface IUserData {
  id: number;
  name: string;
  email: string;
  phone: string;
  link_portfolio: string;
  info_profile?: any;
  avatar: string;
  posts: number;
  code?: any;
  is_verified: boolean;
  provider: string;
  supabase_uid: string;
  role_id?: any;
  created_at: string;
  updated_at: string;
  password?: any;
  phone_is_verified: boolean;
}

export interface ILoginResponse {
  ok: boolean;
  message: string;
  result: IUserData;
}
