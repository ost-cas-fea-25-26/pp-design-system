"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider,
  SendIcon,
  Textarea,
  UploadIcon,
} from "@/components";

export const replyFormSchema = z.object({
  replyContent: z.string().min(1, ""),
});

export type ReplyFormProps = {
  placeholder?: string;
  submitButtonText: string;
  uploadButtonText?: string;
  onSubmitHandler: (data: z.infer<typeof replyFormSchema>) => Promise<void>;
  errorMessage: string;
};

export const ReplyForm: FC<ReplyFormProps> = ({
  placeholder,
  submitButtonText,
  uploadButtonText,
  onSubmitHandler,
  errorMessage,
}) => {
  // Inject errorMessage dynamically
  const schema = replyFormSchema.extend({
    replyContent: z.string().min(1, errorMessage),
  });

  const form = useForm<z.infer<typeof replyFormSchema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      replyContent: "",
    },
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <FormField
          name="replyContent"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel aria-label="Reply" className="sr-only">
                Reply
              </FormLabel>
              <FormControl>
                <Textarea placeholder={placeholder ?? ""} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex mt-4 gap-4">
          <div className="grow">
            <Button size="default" fullWidth variant="neutral" type="button">
              {uploadButtonText}
              <UploadIcon color="white" />
            </Button>
          </div>
          <div className="grow">
            <Button size="default" fullWidth variant="primary" type="submit">
              {submitButtonText}
              <SendIcon color="white" />
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
