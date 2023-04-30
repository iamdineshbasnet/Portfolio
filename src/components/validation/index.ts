export const validateName = (fullName: any) => {
    const nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(fullName);
};

export const validateEmail = (email: any) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
};

