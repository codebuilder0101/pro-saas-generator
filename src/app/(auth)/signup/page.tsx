import OAuth from "@/app/(auth)/_components/OAuth";
import ToggleScreen from "@/app/(auth)/_components/ToggleScreen";
import ButtonComponent from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";

export default function SignUpPage() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center text-gray-900">Sign Up</h2>
      <p className="text-center text-sm text-gray-600">Enter your details to create an account</p>
      <form action="#" method="POST" className="mt-8 space-y-6">
        <InputComponent
          type="name"
          name="name"
          label="Name"
          placeholder=""
        />

        <InputComponent
          type="email"
          name="email"
          label="Email"
          placeholder=""
        />

        <ButtonComponent type="submit">
          Send Validation Email
        </ButtonComponent>
      </form>
      <OAuth />
      <ToggleScreen screen="signup" />
    </>
  );
}