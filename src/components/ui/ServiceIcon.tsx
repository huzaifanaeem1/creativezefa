import {
  FiPenTool,
  FiImage,
  FiLayers,
  FiEdit,
  FiGrid,
  FiVideo,
  FiShoppingBag,
  FiLayout,
  FiCamera,
} from "react-icons/fi";

type ServiceIconProps = {
  icon: string;
};

const iconMap: Record<string, any> = {
  logo: FiPenTool,
  image: FiImage,
  illustration: FiLayers,
  design: FiEdit,
  social: FiGrid,
  thumbnail: FiCamera,
  etsy: FiShoppingBag,
  listing: FiLayout,
  video: FiVideo,
};

export default function ServiceIcon({ icon }: ServiceIconProps) {
  const Icon = iconMap[icon] || FiPenTool; // fallback 🔥

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-(--soft) text-(--accent) transition-all duration-300 group-hover:scale-110 group-hover:bg-(--accent-soft)">
      <Icon className="h-5 w-5 transition group-hover:rotate-3" />
    </span>
  );
}