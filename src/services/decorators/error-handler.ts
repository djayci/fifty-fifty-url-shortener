function errorHandler(target: any, propertyName: any, descriptor: any) {
    const method = descriptor.value;

    descriptor.value = function (...args: any) {
        try {
            return method.apply(target, args);
        } catch (error) {
            console.log('titties')
        }
    };
}

export const ErrorHandler = errorHandler;

// const Log = (msg: string): any => {
//     return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//       // target: class constructor or current object's prototype
//       // propertyKey: name of the decorated method
//       // descriptor: property descriptor of the method
//       // modify class or method...
//     }
//   }