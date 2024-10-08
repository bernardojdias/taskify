import { z } from "zod";

export const updateListSchema = z.object({
  id: z.string(),
  boardId: z.string(),
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, "Title is too short"),
});
