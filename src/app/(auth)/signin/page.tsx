import BackComponent from "@/app/(auth)/_components/Back";
import OAuth from "@/app/(auth)/_components/OAuth";
import ToggleScreenComponent from "@/app/(auth)/_components/ToggleScreen";
import ButtonComponent from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";

export default function SignInPage() {
  return (
    <>
      <BackComponent />
      <h2 className="text-2xl font-semibold text-center text-gray-900">Login</h2>
      <p className="text-center text-sm text-gray-600">Enter your email to begin</p>
      <form action="#" method="POST" className="mt-8 space-y-6">
        <InputComponent
          type="email"
          name="email"
          label="Email"
          placeholder=""
        />
        <ButtonComponent type="submit">
          Continue with Email
        </ButtonComponent>
      </form>
      <OAuth />
      <ToggleScreenComponent screen="signin" />
    </>
  );
}
