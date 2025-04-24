"use server";

import { cookies } from "next/headers";
import { setTimeout } from "timers/promises";

export const postForgetPassword = async (payload: { email: string }) => {
    try {
        (await cookies()).set("verification_email", payload.email);
        (await cookies()).set('forget-password', payload.email);
        await setTimeout(2000);

        return {
            success: true,
            message: "Password reset verification code sent to your email",
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }
}