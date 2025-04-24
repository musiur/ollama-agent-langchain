"use server";

import { cookies } from "next/headers";
import { setTimeout } from "timers/promises";


export const postLogout = async () => {
    try {
        (await cookies()).delete("token");

        await setTimeout(2000);

        return {
            success: true,
            message: "Logout Successfully!",
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }
}