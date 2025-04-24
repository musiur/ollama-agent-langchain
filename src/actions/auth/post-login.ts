"use server";

import { cookies } from "next/headers";
import { setTimeout } from "timers/promises";

export const postLogin = async (payload: { email: string, password: string, remember: boolean }) => {
    try {
        (await cookies()).set("token", "1234567890");
        (await cookies()).set("remember", payload.remember ? "true" : "false");

        await setTimeout(2000);

        return {
            success: true,
            message: "Login Successfully!",
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }
}