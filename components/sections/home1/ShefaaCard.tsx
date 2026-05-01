import Image from "next/image";

type StatProps = {
    number: string;
    label: string;
};

function Stat({ number, label }: StatProps) {
    return (
        <div>
            <div className="text-white text-lg md:text-xl font-semibold">{number}</div>
            <div className="text-white text-xs md:text-sm">{label}</div>
        </div>
    );
}

export default function ShefaaCard() {
    return (
        <section className="container pb-120">
            <div
                className="relative w-full max-w-[340px] md:max-w-[1000px] h-[75vh] md:h-[60vh] md:max-h-[520px] p-[1px] rounded-2xl mx-auto
                bg-[radial-gradient(80%_220%_at_-10%_-10%,#11b3aa,transparent),radial-gradient(80%_200%_at_110%_110%,#11b3aa,transparent)]"
            >
                <div
                    className="w-full h-full overflow-hidden rounded-2xl bg-[#000814]
                    bg-[radial-gradient(90%_140%_at_15%_20%,rgba(17,179,170,0.2),transparent)]"
                >
                    <div className="relative z-10 flex flex-col lg:flex-row h-full">
                        <div className="lg:w-2/3 p-6 flex flex-col justify-between">
                            <div>
                                <Image src="/shefaa-logo.webp" width={160} height={40} className="h-8 md:h-10 mb-4 w-auto" alt="Shefaa logo" />

                                <h2 className="text-white text-xl md:text-3xl mb-3">منصة شفاء</h2>

                                <p className="text-white text-sm md:text-base leading-6 line-clamp-5">
                                    منصة شفاء وهي منصة تقنية تهدف إلى تسهيل تقديم الخدمات العلاجية
                                    والاجهزة الطبية للمحتاجين وتحسين تجربة المستخدم.
                                </p>
                            </div>

                            <div className="flex gap-6 mt-6">
                                <Stat number="+500" label="مستخدم نشط" />
                                <Stat number="+100M" label="حجم المعاملات" />
                                <Stat number="+50" label="شريك استراتيجي" />
                            </div>
                        </div>

                        <div className="lg:w-1/3 h-48 md:h-full">
                            <Image
                                src="/shefaa-screen.webp"
                                width={420}
                                height={520}
                                className="w-full h-full object-cover rounded-bl-2xl"
                                alt="Shefaa platform preview"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
