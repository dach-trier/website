import { getService } from "@/drive/service";

let authorizedEditors: string[] | null = null;
const fileId = process.env["GOOGLE_AUTHORIZED_EDITOR_FILE_ID"];

export async function getEditors(): Promise<string[]> {
    if (authorizedEditors !== null) {
        return authorizedEditors;
    }

    const service = getService();
    const res = await service.files.get({ fileId, alt: "media" });
    const status = res.status;
    const contentType = (res.headers as any).get("content-type");

    if (status !== 200) {
        throw new Error(
            `unable to fetch authorized editors (status code ${res.status})`,
        );
    }

    // prettier-ignore
    if (contentType !== "text/plain" || typeof res.data !== "string") {
        throw new Error(`unexpected file format (${contentType}/${typeof res.data})`);
    }

    authorizedEditors = (res.data as string).split("\n");

    return authorizedEditors;
}

export async function setEditors(editors: string[]): Promise<void> {
    const service = getService();
    const content = editors.join("\n");

    const res = await service.files.update({
        fileId,
        media: {
            mimeType: "text/plain",
            body: content,
        },
    });

    if (res.status !== 200) {
        throw new Error(
            `unable to fetch authorized editors (status code ${res.status})`,
        );
    }

    authorizedEditors = editors;
}
