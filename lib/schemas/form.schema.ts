import * as z from 'zod';

export const formSchema = z.object({
  numberOfCards: z.string().transform((val) => parseInt(val, 10)),
});
