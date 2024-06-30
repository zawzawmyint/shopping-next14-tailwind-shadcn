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
  city: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
});

export function PickItUpForm() {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      city: "",
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
          <FormTitle title={"Where would you like to pickup your order?"} />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-14" placeholder="City" {...field} />
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
