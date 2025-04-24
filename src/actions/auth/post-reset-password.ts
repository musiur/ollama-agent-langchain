"use server";

import { setTimeout } from "timers/promises";

export const postResetPassword = async () => {
    try {

        await setTimeout(2000);

        return {
            success: true,
            message: "Password reset successfully",
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }
}