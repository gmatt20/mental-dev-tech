import { Circle } from "lucide-react";

export default function TrafficLights() {
  return (
    <div className="flex gap-1">
      <Circle fill="#ED6A5F" strokeWidth={0} />
      <Circle fill="#E0A847" strokeWidth={0} />
      <Circle fill="#61C555" strokeWidth={0} />
    </div>
  );
}
