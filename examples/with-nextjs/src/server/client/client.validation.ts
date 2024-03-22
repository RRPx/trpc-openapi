import { z, type TypeOf } from "zod";

const GENDER = ["male", "female"] as const;

const clientInfoValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
  nickName: z.string(),
  age: z.string(),
  image: z.string(),
  image2: z.string(),
  image3: z.string(),
  birthday: z.date(),
  email: z.string().nonempty("Email is required").email("should be valid mail"),
  telephone_number: z
    .string()
    .nonempty("Phone number is required")
    .min(6, "Minimum 6 digits needed"),
  firebase_auth_id: z.string(),
  gender: z.enum(GENDER),
});

const params = z.object({
  id: z.string(),
});

const updateAccountInfoSchema = z.object({
  id: z.string({ required_error: "User id is required." }),
  nick_name: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  age: z.string().optional(),
  telephone_number: z.string().optional(),
  firebase_auth_id: z.string().optional(),
  verification_image: z.string().optional(),
  image: z.string().optional(),
  image2: z.string().optional(),
  image3: z.string().optional(),
});

export type ParamsInput = TypeOf<typeof params>;
export type UpdateAccountInfoInput = TypeOf<typeof updateAccountInfoSchema>;

export const ClientZodSchema = {
  params,
  clientInfoValidation,
  updateAccountInfoSchema,
};

export const clientReserveValidation = z.object({ id: z.string() });
