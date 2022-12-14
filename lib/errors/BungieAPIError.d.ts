/**
 * Represents an error sending a request to the Bungie API
 */
import { BungieNetResponse } from '../util/server-response';
export declare class BungieAPIError<T> extends Error implements BungieNetResponse<T> {
    readonly DetailedErrorTrace: string;
    readonly ErrorCode: any;
    readonly ErrorStatus: string;
    readonly Message: string;
    readonly MessageData: {
        [p: string]: string;
    };
    readonly Response: T;
    readonly ThrottleSeconds: number;
    readonly ResponseTime: number;
    constructor(response: BungieNetResponse<T>);
}
