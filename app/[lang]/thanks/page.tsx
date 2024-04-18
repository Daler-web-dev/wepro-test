import Image from "next/image";

interface thanksProps {

}

const thanks: React.FC<thanksProps> = async () => {
    return (
        <>
            <section>
                <div className="custom-container flex items-center justify-around py-16 max-xl:py-14">
                    <div className="mb-20">
                        <h2 className="mb-4">Ваша заявка принята!</h2>
                        <p className="text-2xl max-xl:text-xl max-md:text-lg leading-normal">
                            Мы работаем каждый день с 10:00 до 19:00 (кроме воскресений).
                        </p>
                        <p className="text-2xl max-xl:text-xl max-md:text-lg leading-normal">
                            Телефон для справок: +998 (90) 197-71-00
                        </p>
                    </div>
                    <div className="max-w-xs max-xl:max-w-[250px] max-md:hidden">
                        <Image
                            src={"/images/tick.webp"}
                            width={1000}
                            height={1000}
                            alt="tick"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="custom-container mb-10">
                    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                    <div className="elfsight-app-851dbf41-45e9-4c81-86ce-081fb250ce87" data-elfsight-app-lazy></div>
                </div>
            </section>  
        </>
    );
}

export default thanks;