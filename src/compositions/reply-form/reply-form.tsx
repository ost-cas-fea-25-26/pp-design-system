"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  ButtonBar,
  CancelIcon,
  CheckmarkIcon,
  FileUpload,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider,
  Modal,
  SendIcon,
  Textarea,
  UploadIcon,
} from "@/components";

export const replyFormSchema = z.object({
  replyContent: z.string().min(1, ""),
  media: z.instanceof(File).optional().or(z.literal(null)),
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
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  // Inject errorMessage dynamically
  const schema = replyFormSchema.extend({
    replyContent: z.string().min(1, errorMessage),
  });

  const form = useForm<z.infer<typeof replyFormSchema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      replyContent: "",
      media: null,
    },
  });

  const handleFileChange = (newFile: File | null) => {
    setFile(newFile);
    form.setValue("media", newFile);
  };

  return (
    <>
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

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="File Upload"
        footer={
          <ButtonBar
            leftButton={
              <Button
                fullWidth
                variant="neutral"
                onClick={() => setOpen(false)}
              >
                Cancel
                <CancelIcon color="white" />
              </Button>
            }
            rightButton={
              <Button
                fullWidth
                variant="primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Save
                <CheckmarkIcon color="white" />
              </Button>
            }
          />
        }
      >
        <div className="flex justify-center items-center w-full h-full min-h-40">
          <div className="w-[20rem]">
            <FileUpload
              file={file}
              onFileChange={handleFileChange}
              title="Drag your file here..."
              description="JPEG or PNG, up to 50 MB"
              selectLabel="... or choose a file"
              removeLabel="Remove file"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
