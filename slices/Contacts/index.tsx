import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contacts`.
 */
export type ContactsProps = SliceComponentProps<Content.ContactsSlice>;

/**
 * Component for "Contacts" Slices.
 */
const Contacts: FC<ContactsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contacts (variation: {slice.variation}) Slices
    </section>
  );
};

export default Contacts;
