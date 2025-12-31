import { getService } from "@/drive/service";
import { Result, Ok, Err } from "@/types/result";

const FILE_ID = process.env["GOOGLE_AUTHORIZED_EDITOR_FILE_ID"];

let authorizedEditors: string[] | null = null;

export async function get(): Promise<Result<string[], string>> {
    if (authorizedEditors !== null) {
        return Ok(authorizedEditors);
    }

    const service = getService();
    const res = await service.files.get({ fileId: FILE_ID, alt: "media" });
    const status = res.status;

    if (status !== 200) {
        return Err(`status code ${res.status}`);
    }

    authorizedEditors = (res.data as string).split("\n");

    return Ok(authorizedEditors);
}

export async function set(editors: string[]): Promise<Result<void, string>> {
    const service = getService();
    const content = editors.join("\n");

    const res = await service.files.update({
        fileId: FILE_ID,
        media: {
            mimeType: "text/plain",
            body: content,
        },
    });

    if (res.status !== 200) {
        return Err(`status code ${res.status}`);
    }

    authorizedEditors = editors;

    return Ok(undefined);
}
