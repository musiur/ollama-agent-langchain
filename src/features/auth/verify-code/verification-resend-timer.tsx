"use client";

import Grid from "@/components/layouts/grid-layout";
import { Typography } from "@/components/typography";
import { useEffect, useState, useTransition } from "react";
import { DynamicForm } from "@/components/dynamics/d-form";

const VerificationResendTimer = ({ onResend }: { onResend: () => void }) => {
  const [timer, setTimer] = useState<number>(30);
  const [pending, setTransition] = useTransition();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) {
        setTimer(prev => prev - 1);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [timer]);

  const handleResend = () => {
    setTransition(async () => {
      setTimeout(() => {
        setTimer(30);
        onResend();
      }, 2000);
    });
  };

  return (
    <Grid className="grid grid-cols-1 gap-2 text-center">
      <Typography.P>
        Get new verifiation code within {timer} seconds
      </Typography.P>
      <DynamicForm.Submit
        pending={pending}
        text="Resend Code"
        onClick={handleResend}
        variant={timer > 0 ? "outline" : "default"}
        disabled={timer > 0}
      />
    </Grid>
  );
};

export default VerificationResendTimer;
