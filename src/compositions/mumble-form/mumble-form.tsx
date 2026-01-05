"use client";

import { FC, useState } from "react";
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
import { UploadImageModal } from "@/compositions";

export const mumbleFormSchema = z.object({
  text: z.string().min(1, ""),
  media: z.instanceof(File).optional().or(z.literal(null)),
});

export type MumbleFormProps = {
  placeholder?: string;
  submitButtonText: string;
  uploadButtonText?: string;
  onSubmitHandler: (data: z.infer<typeof mumbleFormSchema>) => Promise<void>;
  errorMessage: string;
  title?: string;
};

export const MumbleForm: FC<MumbleFormProps> = ({
  placeholder,
  submitButtonText,
  uploadButtonText,
  onSubmitHandler,
  errorMessage,
  title,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  // Inject errorMessage dynamically
  const schema = mumbleFormSchema.extend({
    text: z.string().min(1, errorMessage),
  });

  const form = useForm<z.infer<typeof mumbleFormSchema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      text: "",
      media: null,
    },
  });

  const handleFileChange = (newFile: File | null) => {
    form.setValue("media", newFile);
  };

  const handleFormSubmit = async (data: z.infer<typeof mumbleFormSchema>) => {
    await onSubmitHandler(data);
    form.reset();
  };

  return (
    <>
      <FormProvider {...form}>
        {title && <span className="heading-4 mb-4">{title}</span>}
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <FormField
            name="text"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel aria-label="Text" className="sr-only">
                  Text
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
              <Button
                size="default"
                fullWidth
                variant="neutral"
                type="button"
                onClick={() => setOpen(true)}
              >
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

      <UploadImageModal
        open={open}
        onOpenChange={setOpen}
        onSave={handleFileChange}
      />
    </>
  );
};
