import PageTitle from "@/app/components/PageTitle";
import ContactSection from "@/app/contacts/ContactContainer/ContactSection";

export default function Contacts() {
    return (
        <div className="max-w-[1220px] mx-auto flex flex-col items-center justify-center">
            <PageTitle title={"Contacts"} subtitle={"Contacts"} />
            <ContactSection />
        </div>
    );
}