import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/modal";
import { FileUpload } from "@/components/file-upload/file-upload";
import { Button } from "@/components/button";
import { ButtonBar } from "@/components/button-bar";
import { CancelIcon, CheckmarkIcon } from "@/components/icons";
import {
  FormProvider,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/form";

const schema = z.object({
  file: z.instanceof(File, { message: "Please upload an image." }),
});

type UploadImageModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (file: File) => void;
  formId?: string;
  modalTitle?: string;
  dragTitle?: string;
  dragDescription?: string;
  selectLabel?: string;
  removeLabel?: string;
  cancelLabel?: string;
  saveLabel?: string;
  accept?: Record<string, string[]>;
  maxSize?: number;
};

export const UploadImageModal: FC<UploadImageModalProps> = ({
  open,
  onOpenChange,
  onSave,
  formId = "upload-image-form",
  modalTitle = "Upload Image",
  dragTitle = "Drag your image here...",
  dragDescription = "JPEG or PNG, up to 50 MB",
  selectLabel = "... or choose an image",
  removeLabel = "Remove image",
  cancelLabel = "Cancel",
  saveLabel = "Save",
  accept = { "image/jpeg": [], "image/png": [] },
  maxSize = 50 * 1024 * 1024,
}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { file: undefined },
  });

  const { handleSubmit, reset } = form;

  const submit = (data: z.infer<typeof schema>) => {
    onSave(data.file);
    onOpenChange(false);
    reset();
  };

  const handleClose = () => {
    onOpenChange(false);
    reset();
  };

  return (
    <FormProvider {...form}>
      <Modal
        open={open}
        onOpenChange={handleClose}
        title={modalTitle}
        footer={
          <ButtonBar
            leftButton={
              <Button fullWidth variant="neutral" onClick={handleClose}>
                {cancelLabel}
                <CancelIcon color="white" />
              </Button>
            }
            rightButton={
              <Button fullWidth variant="primary" type="submit" form={formId}>
                {saveLabel}
                <CheckmarkIcon color="white" />
              </Button>
            }
          />
        }
      >
        <form
          id={formId}
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="file"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <FileUpload
                    file={field.value}
                    onFileChange={field.onChange}
                    title={dragTitle}
                    description={dragDescription}
                    selectLabel={selectLabel}
                    removeLabel={removeLabel}
                    accept={accept}
                    maxSize={maxSize}
                    aria-invalid={!!fieldState.error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Modal>
    </FormProvider>
  );
};
