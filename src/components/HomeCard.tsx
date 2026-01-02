import type { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    text: string;
}

export const HomeCard = ({ icon, title, text }: Props) => (
    <article className="flex flex-col items-center bg-bg-secondary gap-4 p-4 rounded-xl min-w-70 max-w-75">
        {icon}
        <div className="text-center text-pretty">
            <h3 className="text-h3-responsive text-text-primary">{title}</h3>
            <p className="text-text-secondary text-justify">{text}</p>
        </div>
    </article>
);
