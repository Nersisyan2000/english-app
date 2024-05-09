import { api } from "..";

export const nativeLanguageGetService = (data) => {
    console.log(data, "sdffdsd")
    return api.get("api/admin/language/native", {
        skip: data.skip,
        limit: data.limit
    }
    );
};
