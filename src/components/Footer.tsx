
type FooterProps = { title: string }

const Footer = ({ title }: FooterProps) => {
    return (
        <section className="bg-customYellow flex justify-end">
            <img src={title} alt="logo" />
        </section>
    )
}

export default Footer