import CourseTabs from "@/common/components/CourseTabs";
import { data } from "./data";
 
export default function CourseSchedulePage() {
  return (
    <div className="bg-cream-50 min-h-screen p-8 font-sans">
      <h1 className="text-3xl font-normal mb-8 text-gray-900 select-text">Course Schedule</h1>
      <CourseTabs data={data} />
    </div>
  );
}
