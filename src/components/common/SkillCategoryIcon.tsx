import { Globe, Server, Database, Wrench, Code2, Laptop } from "lucide-react";
import type { SkillCategory } from "../../data/skills";

const icons: Record<string, typeof Globe> = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Programming: Code2,
  Other: Laptop,
};

export default function SkillCategoryIcon({
  category,
  size = 28,
  bare = false,
}: {
  category: SkillCategory;
  size?: number;
  bare?: boolean;
}) {
  const Icon = icons[category.title] ?? Globe;

  if (bare) {
    return <Icon size={size} color={category.iconColor} strokeWidth={2} />;
  }

  return (
    <div className={`rounded-xl p-3 ${category.iconBg}`}>
      <Icon size={size} color={category.iconColor} strokeWidth={2} />
    </div>
  );
}
