import {
  UserIcon,
  ShieldCheckIcon,
  ClipboardDocumentIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    id: 1,
    title: "Sunat Anak",
    description: "Layanan sunat untuk anak dengan metode modern dan minim rasa sakit.",
    icon: <UserIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 2,
    title: "Sunat Dewasa",
    description: "Proses sunat yang aman dan nyaman untuk usia dewasa.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 3,
    title: "Sunat Khusus",
    description: "Sunat khusus untuk individu dengan kondisi kesehatan atau kebutuhan medis tertentu.",
    icon: <ClipboardDocumentIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 4,
    title: "Konsultasi Sunat",
    description: "Dapatkan konsultasi dari tenaga medis ahli sebelum sunat.",
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 5,
    title: "Perawatan Luka",
    description: "Layanan perawatan luka pasca sunat untuk penyembuhan cepat.",
    icon: <HeartIcon className="w-8 h-8 text-sumod-bl3" />,
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-14 py-10">
      <div className="p-2 space-y-2">
        <h1 className="text-2xl font-bold text-sumod-bl3">Sunat Modern</h1>
        <p className="text-start text-base font-medium text-gray-600">
          Kami menawarkan berbagai layanan sunat yang disesuaikan dengan kebutuhan dan kenyamanan pasien dengan metode
          modern dan peralatan medis terkini
        </p>
        <div>
          <a href="/layanan" className="text-sumod-bl3 text-base font-medium flex items-center">
            Lihat Layanan Kami
            <ArrowRightIcon className="w-5 h-5 ml-2 text-custom-orange animate-move-x" />
          </a>
        </div>
      </div>

      {services.map((service) => (
        <div key={service.id} className="rounded-lg p-6 flex flex-col text-start bg-sumod-bl2 text-gray-800">
          <div className="flex items-center">
            <div className="p-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          </div>
          <p className="text-base text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
