"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "@/components/modal";
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

import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";

const schema = z.object({
  firstname: z.string().min(1, "First name is required."),
  lastname: z.string().min(1, "Last name is required."),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(32, "Username must be 32 characters or less."),
  bio: z.string().max(500, "Bio must be 500 characters or less."),
});

type FormValues = z.infer<typeof schema>;

type EditProfileModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: FormValues) => void;

  formId?: string;
  modalTitle?: string;

  firstnameLabel?: string;
  firstnamePlaceholder?: string;

  lastnameLabel?: string;
  lastnamePlaceholder?: string;

  usernameLabel?: string;
  usernamePlaceholder?: string;

  bioLabel?: string;
  bioPlaceholder?: string;

  cancelLabel?: string;
  saveLabel?: string;

  defaultValues?: Partial<FormValues>;
};

export const EditProfileModal: FC<EditProfileModalProps> = ({
  open,
  onOpenChange,
  onSave,

  formId = "edit-profile-form",
  modalTitle = "Edit profile",

  firstnameLabel = "First name",
  firstnamePlaceholder = "John",

  lastnameLabel = "Last name",
  lastnamePlaceholder = "Doe",

  usernameLabel = "Username",
  usernamePlaceholder = "john_doe",

  bioLabel = "Bio",
  bioPlaceholder = "Tell us a bit about yourself…",

  cancelLabel = "Cancel",
  saveLabel = "Save",

  defaultValues,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      bio: "",
      ...defaultValues,
    },
  });

  const { handleSubmit, reset } = form;

  const submit = (data: FormValues) => {
    onSave(data);
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
            name="firstname"
            render={({ field, fieldState }) => (
              <FormItem>
                <label className="text-sm font-medium">{firstnameLabel}</label>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={firstnamePlaceholder}
                    aria-invalid={!!fieldState.error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field, fieldState }) => (
              <FormItem>
                <label className="text-sm font-medium">{lastnameLabel}</label>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={lastnamePlaceholder}
                    aria-invalid={!!fieldState.error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <FormItem>
                <label className="text-sm font-medium">{usernameLabel}</label>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={usernamePlaceholder}
                    aria-invalid={!!fieldState.error}
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field, fieldState }) => (
              <FormItem>
                <label className="text-sm font-medium">{bioLabel}</label>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={bioPlaceholder}
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
