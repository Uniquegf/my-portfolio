import Link from "next/link";

export default function ConnectBtn(): React.ReactElement {
   const email = "example@example.com";
   const subject = "Let's Connect";
   const body = "Hi, I would like to connect with you regarding...";
  return (
    <Link
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}  
      target="_blank"
      rel="noopener noreferrer"
     className="bg-[#e0f11f] text-gray-900 font-bold p-7 rounded-lg hover:bg-gray-400 transition-colors duration-300 px-36   text-2xl"
    >
     Let&apos;s Talk
    </Link>
  )
}