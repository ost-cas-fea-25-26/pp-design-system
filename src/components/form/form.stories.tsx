import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import {
  FormProvider,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./index";

const schema = z.object({
  firstName: z.string().min(2, "First name is required."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

const meta: Meta = {
  title: "Form",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: { firstName: "", email: "", message: "" },
    });

    const onSubmit = (data: z.infer<typeof schema>) =>
      // eslint-disable-next-line no-alert
      alert(`Submitted:\n${JSON.stringify(data, null, 2)}`);

    return (
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-[20rem]"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel disabled>Disabled Field</FormLabel>
            <FormControl>
              <Input placeholder="Disabled" disabled />
            </FormControl>
          </FormItem>

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    );
  },
};
