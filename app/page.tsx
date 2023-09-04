'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePostToAPI } from '@/lib/api.service';
import { formSchema } from '@/lib/schemas/form.schema';
import { useRouter } from 'next/navigation';

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfCards: 1,
    },
  });

  const mutation = usePostToAPI();
  const router = useRouter();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    data.numberOfCards = Number(data.numberOfCards);
    mutation.mutate(data);
    router.push('/loteria');
  };

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center  before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl  after:absolute  after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl  before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
        <Card>
          <CardHeader>
            <CardTitle>
              Ingresa el número de tablas de lotería a generar
            </CardTitle>
            <CardContent>
              <Form {...form}>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="numberOfCards"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Número de tablas a generar
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <Button type="submit">Generar</Button>
                </form>
              </Form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
