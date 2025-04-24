"use server";

import { cookies } from "next/headers";
import { setTimeout } from "timers/promises";

export const postVerifyCode = async (otp: string) => {
    try {

        const verificationEmail = (await cookies()).get("verification_email")?.value;
        const forgetPassword = (await cookies()).get("forget-password")?.value;

        if (!verificationEmail) {
            return {
                success: false,
                message: "Verification email not found!",
            };
        }

        if (!otp || otp.length !== 6) {
            return {
                success: false,
                message: "Invalid OTP",
            };
        }

        await setTimeout(2000);

        (await cookies()).delete("forget-password");
        (await cookies()).delete("verification_email");

        const toRedirectPath = forgetPassword ? "/reset-password" : "/login";

        return {
            success: true,
            message: "Code verified successfully",
            toRedirectPath
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }
}