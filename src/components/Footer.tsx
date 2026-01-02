import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandPinterest,
    IconBrandTiktok,
    IconBrandTwitter,
    IconCopyright,
} from "@tabler/icons-react";

export const Footer = () => {
    return (
        <footer className="flex flex-col justify-evenly items-center gap-2 p-4 bg-bg-primary text-text-primary border-t-2 border-border">
            <section className="flex gap-2">
                <a href="#facebook">
                    <IconBrandFacebook />
                </a>
                <a href="#instagram">
                    <IconBrandInstagram />
                </a>
                <a href="#pinterest">
                    <IconBrandPinterest />
                </a>
                <a href="#twitter">
                    <IconBrandTwitter />
                </a>
                <a href="#tiktok">
                    <IconBrandTiktok />
                </a>
            </section>
            <small className="flex items-center gap-1.5 tracking-wide">
                <IconCopyright size={16} /> {new Date().getFullYear()} Fake Store. All
                rights reserved.
            </small>
        </footer>
    );
};
