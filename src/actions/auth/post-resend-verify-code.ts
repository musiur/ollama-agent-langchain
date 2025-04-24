"use server";

import { cookies } from "next/headers";
import { setTimeout } from "timers/promises";

export const postResendVerifyCode = async () => {
    try {

        const verificationEmail = (await cookies()).get("verification_email")?.value;

        if (!verificationEmail) {
            return {
                success: false,
                message: "No verification email found!",
            }
        }

        await setTimeout(2000);

        return {
            success: true,
            message: "Register Successfully! Account verification code has been sent to your email.",
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }
}