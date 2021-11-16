function errorHandler(target: any, propertyName: any, descriptor: any) {
    const method = descriptor.value;
    descriptor.value = async function (...args: any) {
        try {
            const result = await method.apply(target, args);
            return result;
        } catch (ex: any) {
            console.error(ex);
        }
    };
}

export const ErrorHandler = errorHandler;