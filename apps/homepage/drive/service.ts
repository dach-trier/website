import { getSession } from "@/drive/auth";
import { drive_v3, google } from "googleapis";

let service: drive_v3.Drive | null = null;

export function getService() {
    if (service !== null) return service;

    const auth = getSession();
    service = google.drive({ version: "v3", auth });
    return service;
}
