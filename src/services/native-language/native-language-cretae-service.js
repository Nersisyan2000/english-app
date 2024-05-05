import { api } from "..";

export const nativeLanguageCreateService = (formData) => {
    return api.put("api/admin/language/native", formData
    );
};
