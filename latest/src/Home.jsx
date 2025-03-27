import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: "url()" }} // Ensure the image is in public/
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-blue bg-opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-black">AI-Powered Teacher Assistant</h1>
        <p className="text-bold-blue--200 mt-4 text-lg">Automate grading and provide personalized feedback.</p>
        <Button className="mt-6">Get Started</Button>
      </div>

      {/* Dashboard Cards Section */}
      
      
      <div className="relative z-10 grid md:grid-cols-3 gap-8 mt-16 container mx-auto p-6 h-[500px]">

        <DashboardCard
          title="Total Assignments Graded"
          value="1,245"
          description="AI has processed and graded over 1,245 assignments."
        />
        <DashboardCard
          title="Total Assignments Graded"
          value="1,245"
          description="AI has processed and graded over 1,245 assignments."
        /><DashboardCard
        title="Total Assignments Graded"
        value="1,245"
        description="AI has processed and graded over 1,245 assignments."
      /><DashboardCard
      title="Total Assignments Graded"
      value="1,245"
      description="AI has processed and graded over 1,245 assignments."
    />
        <DashboardCard
          title="Feedback Provided"
          value="978"
          description="Students have received 978 personalized feedback reports."
        />
        <DashboardCard
          title="Teacher Time Saved"
          value="500+ hours"
          description="AI has helped save over 500+ hours of manual grading."
        />
      </div>
    </div>
  );
}

// Reusable Card Component
function DashboardCard({ title, value, description }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform duration-300  hover:bg-light blue-500 hover:text-white hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-blue-600 text-3xl font-extrabold mt-2">{value}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}