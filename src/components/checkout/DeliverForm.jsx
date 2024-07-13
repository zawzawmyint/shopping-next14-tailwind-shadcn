"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { placeOrder } from "@/actions/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { resetBags } from "@/lib/features/bags/bagsSlice";
import { useAppDispatch } from "@/lib/hooks";
import FormTitle from "./FormTitle";
import { SubmitButton } from "./SubmitButton";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

export function DeliverForm() {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    const result = await placeOrder(form.getValues());
    dispatch(resetBags());
    toast({
      title: "Your order has been submitted, Owner will be notified",
      description: <div>Enjoy shopping!</div>,
    });
  };

  return (
    <Form {...form}>
      <form
        action={(e) => {
          form.handleSubmit(onSubmit)();
        }}
        addressclassName="w-2/3 space-y-6"
      >
        <div className="flex flex-col gap-5 w-full sm:w-[70%]">
          <FormTitle title={"Enter your name and address:"} />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-14" placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-14" placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-14"
                    placeholder="Address or Postcode"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormTitle title={"What's your contact information?"} />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-14" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-14"
                    placeholder="Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}
