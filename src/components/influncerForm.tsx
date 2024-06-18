"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { InfluencerCampaignForm, getCampaignForm } from "@/lib/api";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function InfluencerForm({ campaignId }: { campaignId: string }) {
  const {
    data: campaignFormFields,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => await getCampaignForm(campaignId),
    queryKey: ["campaignFormFields"],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InfluencerCampaignForm>({
    defaultValues: {
      default_fields: [],
      socials: [],
      custom_fields: [],
    },
  });

  async function formSubmitFn(data: any) {
    const formattedData: InfluencerCampaignForm = {
      default_fields: [
        data.default_fields[0] || "",
        data.default_fields[1] || "",
        data.default_fields[2] || "",
      ],
      socials: data.socials.map((social: string) => social || ""),
      custom_fields:
        campaignFormFields?.custom_fields.map((field, index) => ({
          ...field,
          answer: data.custom_fields[index]?.answer || "",
        })) || [],
    };

    console.log("FORM SUBMITTED: ", formattedData);
  }

  if (isLoading) return <div className="min-h-screen">Loading...</div>;

  if (isError)
    return (
      <div className="min-h-screen text-red-500">
        Failed to fetch campaign form fields. TRY REFRESHING BROWSER!!!
      </div>
    );

  return (
    <form
      className="flex flex-col gap-6 md:gap-7 mx-auto lg:w-[65%] my-10 md:my-20 form-shadow md:p-10 rounded-3xl"
      onSubmit={handleSubmit(formSubmitFn)}
    >
      <h2 className="text-base font-semibold">Apply Now</h2>

      {campaignFormFields?.default_fields.includes("name") && (
        <div>
          <InputHeading>Name</InputHeading>
          <Input
            placeholder="Your Name"
            type="text"
            {...register("default_fields.0", { required: true })}
          />
          {errors.default_fields?.[0] && (
            <ErrorSpan>This field is required</ErrorSpan>
          )}
        </div>
      )}

      {campaignFormFields?.default_fields.includes("email") && (
        <div>
          <InputHeading>Email</InputHeading>
          <Input
            placeholder="Your email"
            type="email"
            {...register("default_fields.1", { required: true })}
          />
          {errors.default_fields?.[1] && (
            <ErrorSpan>This field is required</ErrorSpan>
          )}
        </div>
      )}

      {campaignFormFields?.default_fields.includes("phone") && (
        <div>
          <InputHeading>Phone Number</InputHeading>
          <Input
            placeholder="Your phone number"
            type="tel"
            {...register("default_fields.2", { required: true })}
          />
          {errors.default_fields?.[2] && (
            <ErrorSpan>This field is required</ErrorSpan>
          )}
        </div>
      )}

      <div>
        <InputHeading>Your Socials</InputHeading>
        <div className="flex flex-col gap-6">
          {campaignFormFields?.socials.map((social, index) => (
            <div key={social}>
              <div className="flex gap-3 items-center">
                <figure>
                  <Image
                    src={`/images/${social}.png`}
                    alt={`${social} logo`}
                    height={40}
                    width={40}
                    className="aspect-square"
                  />
                </figure>
                <div className="w-full relative">
                  <Input
                    placeholder={`${
                      social.charAt(0).toUpperCase() + social.slice(1)
                    } Username`}
                    type="text"
                    className="px-9"
                    {...register(`socials.${index}`, { required: true })}
                  />
                  <AtherateSymbol />
                </div>
              </div>
              {errors.socials?.[index] && (
                <ErrorSpan>This field is required</ErrorSpan>
              )}
            </div>
          ))}
        </div>
      </div>

      {campaignFormFields?.custom_fields.map((field, index) => (
        <div key={field.name}>
          <InputHeading>{field.question}</InputHeading>
          {field.type === "boolean" ? (
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id={`custom_fields.${index}.yes`}
                value="yes"
                {...register(`custom_fields.${index}.answer`, {
                  required: field.is_required,
                })}
              />
              <label htmlFor={`custom_fields.${index}.yes`}>Yes</label>
              <input
                type="radio"
                id={`custom_fields.${index}.no`}
                value="no"
                {...register(`custom_fields.${index}.answer`, {
                  required: field.is_required,
                })}
              />
              <label htmlFor={`custom_fields.${index}.no`}>No</label>
            </div>
          ) : (
            <Input
              placeholder="Your answer"
              type="text"
              {...register(`custom_fields.${index}.answer`, {
                required: field.is_required,
              })}
            />
          )}
          {errors.custom_fields?.[index]?.answer && (
            <ErrorSpan>This field is required</ErrorSpan>
          )}
        </div>
      ))}

      <div className="md:flex md:justify-end my-3">
        <Button
          className="bg-purple-700 w-full lg:w-fit hover:bg-purple-800"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

function AtherateSymbol() {
  return (
    <span className="absolute top-0 w-10 h-full flex items-center justify-center text-base font-semibold">
      @
    </span>
  );
}

function InputHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-normal pb-2">{children}</p>;
}

function ErrorSpan({ children }: { children: React.ReactNode }) {
  return <p className="text-red-500 text-sm font-normal pt-2">{children}</p>;
}
