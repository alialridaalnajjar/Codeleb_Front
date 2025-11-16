export enum RoleType {
  USER = "student",
  ADMIN = "admin",
}
export type UserRole = {
  username: string;
  email: string;
  password: string;
  role: RoleType;
  created_at: Date;
  profile_photo_url?: string | null;
  DOB?: Date | null;
  location?: string | null;
  first_name: string;
  last_name: string;
};
