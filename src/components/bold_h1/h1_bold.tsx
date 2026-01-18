type H1BoldProps = {
    children?: React.ReactNode;
    href: string;
};

export function H1Bold({ children, href }: Readonly<H1BoldProps>) {
    return (
        <a href={href}>
            <h1 className="font-bold text-xl">{children}</h1>
        </a>);
}