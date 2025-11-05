import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FileUpload } from "./file-upload";
import { Button } from "@/components/button";
import {
  FormProvider,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/form";

const meta: Meta<typeof FileUpload> = {
  title: "Components/File Upload",
  component: FileUpload,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);

    return (
      <div className="w-[20rem]">
        <FileUpload
          file={file}
          onFileChange={setFile}
          title="Drag your file here..."
          description="JPEG or PNG, up to 50 MB"
          selectLabel="... or choose a file"
          removeLabel="Remove file"
        />
      </div>
    );
  },
};

const schema = z.object({
  file: z
    .instanceof(File, { message: "Please upload a file." })
    .refine(
      (file) => file.size <= 50 * 1024 * 1024,
      "File must be less than 50MB.",
    ),
});

export const WithForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: { file: undefined },
    });

    const onSubmit = (data: z.infer<typeof schema>) =>
      // eslint-disable-next-line no-alert
      alert(
        `Submitted:\n${JSON.stringify({ file: data.file?.name }, null, 2)}`,
      );

    return (
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-[20rem]"
        >
          <FormField
            control={form.control}
            name="file"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Upload your file</FormLabel>
                <FormControl>
                  <FileUpload
                    file={field.value}
                    onFileChange={field.onChange}
                    title="Drag your file here..."
                    description="JPEG or PNG, up to 50 MB"
                    selectLabel="... or choose a file"
                    removeLabel="Remove file"
                    aria-invalid={!!fieldState.error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    );
  },
};
