import PageTitle from "@/app/components/PageTitle";
import ContactSection from "@/app/contacts/ContactContainer/ContactSection";
import CTA from "@/app/contacts/CTA";

export default function Contacts() {
    return (
        <div className="max-w-[1220px] mx-auto flex flex-col items-center justify-center">
            <PageTitle title={"Contacts"} subtitle={"Contacts"} />
            <CTA />
            <ContactSection />
        </div>
    );
}