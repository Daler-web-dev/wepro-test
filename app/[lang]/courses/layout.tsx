export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
