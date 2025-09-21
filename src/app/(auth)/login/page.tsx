
import FormLoginForm from "@/app/components/form/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page ",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
        <FormLoginForm />
    </div>
  );
}
