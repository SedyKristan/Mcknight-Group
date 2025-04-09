import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Section, SectionHeadline } from "@/components/Section";
import ContactItems from "../../components/ContactItems";
import { LocationSolid, PhoneSolid, MailSolid } from "@/components/icons";
import Image from "next/image";
import lineBuildings from "../../../../public/line-building.png";
import Container from "@/components/Container";

export type DefaultProps = SliceComponentProps<Content.ContactsSlice>;

const Default = ({ slice, index, slices, context }: DefaultProps) => {
  const { section_id, headline, address, contact_number, email_address } =
    slice.primary;
  const sectionId = (section_id?.toString() || "contact").toLowerCase();

  const formatPhoneNumber = (phone: string) => {
    // Remove all non-numeric characters
    return phone.replace(/\D/g, "");
  };

  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <Section id={sectionId}>
      <Container className="relative min-h-[462px] justify-start">
        <Image
          src={lineBuildings}
          alt="Line Buildings"
          width={940}
          height={517.5}
          className="absolute -bottom-16 -right-10 w-[466px] lg:-bottom-40 lg:-right-20 h-[256.55px] lg:w-[940px] lg:h-[517.5px] object-contain"
        />
        <SectionHeadline>{headline}</SectionHeadline>
        <div className="flex flex-col gap-4 self-stretch">
          <a
            href={getGoogleMapsUrl(address ?? "")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <ContactItems>
              <LocationSolid className="w-8 h-8 aspect-square text-primary" />
              <h3 className="flex-[1_0_0]">{address}</h3>
            </ContactItems>
          </a>
          <a
            href={`sms:${formatPhoneNumber(contact_number ?? "")}`}
            className="hover:opacity-80 transition-opacity"
          >
            <ContactItems>
              <PhoneSolid className="w-8 h-8 aspect-square text-primary" />
              <h3 className="flex-[1_0_0]">{contact_number}</h3>
            </ContactItems>
          </a>
          <a
            href={`mailto:${email_address}`}
            className="hover:opacity-80 transition-opacity"
          >
            <ContactItems>
              <MailSolid className="w-8 h-8 aspect-square text-primary" />
              <h3 className="flex-[1_0_0]">{email_address}</h3>
            </ContactItems>
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Default;
