import Image from "next/image";

export default function  LedZeppelin() {
    return (
        <div style={{ width: "50vw", height: "100vh", position: "relative" }}>
            <Image
                src="/Led_Zeppelin.jpg"
                alt="Led Zeppelin"
                fill
                style={{ objectFit: "cover" }}
                aria-hidden
            />
        </div>
    )
}