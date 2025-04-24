"use server";

import { cookies } from "next/headers";
import { setTimeout } from "timers/promises";

export const postRegister = async (payload: { name: string, email: string, password: string, confirmPassword: string }) => {
    console.log(payload);
    try {

        (await cookies()).set("verification_email", payload.email);

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