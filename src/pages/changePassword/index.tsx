import { useState } from "react";
import EmailStep from "./components/EmailStep";
import VerifyStep from "./components/VerifyStep";
import ChangeStep from "./components/ChangeStep";

function ChangePassword() {
  const [step, setStep] = useState<"email" | "verify" | "change">("email");
  const [email, setEmail] = useState("");

  return (
    <>
      {step === "email" && (
        <EmailStep
          onNext={(enteredEmail) => {
            setEmail(enteredEmail);
            setStep("verify");
          }}
        />
      )}
      {step === "verify" && <VerifyStep email={email} onNext={() => setStep("change")} />}
      {step === "change" && <ChangeStep email={email} />}
    </>
  );
}

export default ChangePassword;
