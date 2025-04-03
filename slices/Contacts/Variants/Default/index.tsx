import Container from "@/components/Container";
import { Section, SectionHeadline } from "@/components/Section";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContactItems from "../../components/ContactItems";
import { LocationSolid, PhoneSolid, MailSolid } from "@/components/icons";
import Image from "next/image";
import lineBuildings from "../../../../public/line-building.png";

export type DefaultProps = SliceComponentProps<Content.ContactsSlice>;

const Default = ({ slice, index, slices, context }: DefaultProps) => {
  return (
    <Section>
      <Container className="relative min-h-[462px] justify-start">
        <Image
          src={lineBuildings}
          alt="Line Buildings"
          width={940}
          height={517.5}
          className="absolute -bottom-16 -right-10 w-[466px] lg:-bottom-40 lg:-right-20 h-[256.55px] lg:w-[940px] lg:h-[517.5px] object-contain"
        />
        <SectionHeadline>{slice.primary.headline}</SectionHeadline>
        <div className="flex flex-col gap-4 self-stretch">
          <ContactItems>
            <LocationSolid className="w-8 h-8 aspect-square text-primary" />
            <h3 className="flex-[1_0_0]">{slice.primary.address}</h3>
          </ContactItems>
          <ContactItems>
            <PhoneSolid className="w-8 h-8 aspect-square text-primary" />
            <h3 className="flex-[1_0_0]">{slice.primary.contact_number}</h3>
          </ContactItems>
          <ContactItems>
            <MailSolid className="w-8 h-8 aspect-square text-primary" />
            <h3 className="flex-[1_0_0]">{slice.primary.email_address}</h3>
          </ContactItems>
        </div>
      </Container>
    </Section>
  );
};

export default Default;
